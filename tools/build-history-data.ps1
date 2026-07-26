$ErrorActionPreference = 'Stop'

$circuits = [ordered]@{
  silverstone = 'silverstone'
  'spa-francorchamps' = 'spa'
  suzuka = 'suzuka'
}

function Invoke-JolpicaJson([string]$Uri) {
  for ($attempt = 1; $attempt -le 4; $attempt++) {
    try {
      return Invoke-RestMethod -Uri $Uri -TimeoutSec 30
    } catch {
      if ($attempt -eq 4) { throw }
      Start-Sleep -Milliseconds (400 * $attempt)
    }
  }
}

$archive = [ordered]@{}
foreach ($entry in $circuits.GetEnumerator()) {
  $raceMap = [ordered]@{}
  $first = Invoke-JolpicaJson "https://api.jolpi.ca/ergast/f1/circuits/$($entry.Value)/results/?limit=100&offset=0"
  $total = [int]$first.MRData.total
  $pages = @($first)
  for ($offset = 100; $offset -lt $total; $offset += 100) {
    $pages += Invoke-JolpicaJson "https://api.jolpi.ca/ergast/f1/circuits/$($entry.Value)/results/?limit=100&offset=$offset"
  }

  foreach ($page in $pages) {
    foreach ($race in @($page.MRData.RaceTable.Races)) {
      if ([int]$race.season -lt 2000) { continue }
      $key = "$($race.season)-$($race.round)"
      if (-not $raceMap.Contains($key)) {
        $raceMap[$key] = [ordered]@{
          season = $race.season; round = $race.round; raceName = $race.raceName
          date = $race.date; Circuit = $race.Circuit; Results = @()
        }
      }
      $raceMap[$key].Results += @($race.Results)
    }
  }

  $races = @($raceMap.Values | Sort-Object { [int]$_.season }, { [int]$_.round })
  $stops = @()
  foreach ($race in $races) {
    if ([int]$race.season -lt 2011) { continue }
    $pit = Invoke-JolpicaJson "https://api.jolpi.ca/ergast/f1/$($race.season)/$($race.round)/pitstops/?limit=100"
    if (@($pit.MRData.RaceTable.Races).Count -gt 0) {
      $stops += @($pit.MRData.RaceTable.Races)[0]
    }
  }

  $archive[$entry.Key] = [ordered]@{
    races = $races
    stops = $stops
    generatedAt = (Get-Date).ToUniversalTime().ToString('o')
    source = 'Jolpica F1 (Ergast-compatible archive)'
  }
  Write-Host "$($entry.Key): $($races.Count) races, $($stops.Count) pit-stop races"
}

$json = $archive | ConvertTo-Json -Depth 20 -Compress
$output = Join-Path (Split-Path $PSScriptRoot -Parent) 'history-data.js'
[System.IO.File]::WriteAllText($output, "window.F1_HISTORY=$json;", [System.Text.UTF8Encoding]::new($false))
Write-Host "Wrote $output"
