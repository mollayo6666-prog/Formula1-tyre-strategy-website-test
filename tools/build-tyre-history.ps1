$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent
$dump = Join-Path $root 'tmp\jolpica-dump'
$seasons = @{}; Import-Csv (Join-Path $dump 'formula_one_season.csv') | ForEach-Object { $seasons[$_.id] = $_.year }
$circuits = @{}; Import-Csv (Join-Path $dump 'formula_one_circuit.csv') | ForEach-Object { $circuits[$_.id] = $_.reference }
$siteKeys = [ordered]@{
  albert_park='albert-park'; shanghai='shanghai'; suzuka='suzuka'; bahrain='bahrain'; jeddah='jeddah'
  miami='miami'; villeneuve='villeneuve'; monaco='monaco'; catalunya='catalunya'; red_bull_ring='red-bull-ring'
  silverstone='silverstone'; spa='spa-francorchamps'; hungaroring='hungaroring'; zandvoort='zandvoort'
  monza='monza'; madring='madring'; baku='baku'; marina_bay='marina-bay'; americas='americas'
  rodriguez='rodriguez'; interlagos='interlagos'; vegas='las-vegas'; losail='losail'; yas_marina='yas-marina'
}
$output = [ordered]@{}
foreach($key in $siteKeys.Values){ $output[$key] = [ordered]@{} }

function Get-Stints([string]$Uri) {
  for ($attempt=1; $attempt -le 3; $attempt++) {
    try { return Invoke-RestMethod -Uri $Uri -TimeoutSec 30 } catch { if($attempt -eq 3){throw}; Start-Sleep -Milliseconds (500*$attempt) }
  }
}

$rounds = Import-Csv (Join-Path $dump 'formula_one_round.csv') | Where-Object {
  $siteKeys.Contains($circuits[$_.circuit_id]) -and [int]$seasons[$_.season_id] -ge 2019 -and $_.is_cancelled -ne 't' -and $_.date -le (Get-Date).ToString('yyyy-MM-dd')
}
foreach($round in $rounds) {
  $season = $seasons[$round.season_id]
  $reference = $circuits[$round.circuit_id]
  $response = Get-Stints "https://api.racehooks.io/v1/historical/$season/$($round.number)/stints?limit=100"
  $race = @($response.RHData.RaceTable.Races)[0]
  if($race -and @($race.Stints).Count -gt 0) {
    $output[$siteKeys[$reference]]["$season-$($round.number)"] = @($race.Stints)
    Write-Host "$reference $season round $($round.number): $(@($race.Stints).Count) stints"
  }
}
$json = $output | ConvertTo-Json -Depth 10 -Compress
[System.IO.File]::WriteAllText((Join-Path $root 'tyre-history.js'), "window.F1_TYRE_HISTORY=$json;", [System.Text.UTF8Encoding]::new($false))
Write-Host 'tyre-history.js created'
