$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent
$dump = Join-Path $root 'tmp\jolpica-dump'

function Map-ById($rows) { $map = @{}; foreach ($row in $rows) { $map[$row.id] = $row }; return $map }

$circuits = Import-Csv (Join-Path $dump 'formula_one_circuit.csv')
$siteKeys = [ordered]@{
  albert_park='albert-park'; shanghai='shanghai'; suzuka='suzuka'; bahrain='bahrain'; jeddah='jeddah'
  miami='miami'; villeneuve='villeneuve'; monaco='monaco'; catalunya='catalunya'; red_bull_ring='red-bull-ring'
  silverstone='silverstone'; spa='spa-francorchamps'; hungaroring='hungaroring'; zandvoort='zandvoort'
  monza='monza'; madring='madring'; baku='baku'; marina_bay='marina-bay'; americas='americas'
  rodriguez='rodriguez'; interlagos='interlagos'; vegas='las-vegas'; losail='losail'; yas_marina='yas-marina'
}
$circuitIds = @{}
foreach ($c in $circuits) { if ($siteKeys.Contains($c.reference)) { $circuitIds[$c.reference] = $c.id } }

$seasons = Map-ById (Import-Csv (Join-Path $dump 'formula_one_season.csv'))
$drivers = Map-ById (Import-Csv (Join-Path $dump 'formula_one_driver.csv'))
$teams = Map-ById (Import-Csv (Join-Path $dump 'formula_one_team.csv'))
$teamDrivers = Map-ById (Import-Csv (Join-Path $dump 'formula_one_teamdriver.csv'))

$roundRows = @(Import-Csv (Join-Path $dump 'formula_one_round.csv') | Where-Object {
  $_.circuit_id -in $circuitIds.Values -and [int]$seasons[$_.season_id].year -ge 2000 -and $_.is_cancelled -ne 't'
})
$rounds = Map-ById $roundRows
$roundIds = @{}; foreach ($id in $rounds.Keys) { $roundIds[$id] = $true }

$raceSessions = @(Import-Csv (Join-Path $dump 'formula_one_session.csv') | Where-Object { $_.type -eq 'R' -and $roundIds.ContainsKey($_.round_id) })
$sessions = Map-ById $raceSessions
$sessionIds = @{}; foreach ($id in $sessions.Keys) { $sessionIds[$id] = $true }

$roundEntryRows = @(Import-Csv (Join-Path $dump 'formula_one_roundentry.csv') | Where-Object { $roundIds.ContainsKey($_.round_id) })
$roundEntries = Map-ById $roundEntryRows
$roundEntryIds = @{}; foreach ($id in $roundEntries.Keys) { $roundEntryIds[$id] = $true }

$sessionEntryRows = @(Import-Csv (Join-Path $dump 'formula_one_sessionentry.csv') | Where-Object { $sessionIds.ContainsKey($_.session_id) -and $roundEntryIds.ContainsKey($_.round_entry_id) })
$sessionEntries = Map-ById $sessionEntryRows
$sessionEntryIds = @{}; foreach ($id in $sessionEntries.Keys) { $sessionEntryIds[$id] = $true }

$pitRows = @(Import-Csv (Join-Path $dump 'formula_one_pitstop.csv') | Where-Object { $sessionEntryIds.ContainsKey($_.session_entry_id) })
$neededLapIds = @{}; foreach ($pit in $pitRows) { $neededLapIds[$pit.lap_id] = $true }
$laps = @{}
Import-Csv (Join-Path $dump 'formula_one_lap.csv') | ForEach-Object { if ($neededLapIds.ContainsKey($_.id)) { $laps[$_.id] = $_ } }

$result = [ordered]@{}
foreach ($reference in $siteKeys.Keys) {
  $circuitId = $circuitIds[$reference]
  $selectedRounds = @($roundRows | Where-Object { $_.circuit_id -eq $circuitId } | Sort-Object { [int]$seasons[$_.season_id].year })
  $raceOutput = @()
  $stopOutput = @()
  foreach ($round in $selectedRounds) {
    $season = [string]$seasons[$round.season_id].year
    $session = $raceSessions | Where-Object { $_.round_id -eq $round.id } | Select-Object -First 1
    if (-not $session) { continue }
    $entries = @($sessionEntryRows | Where-Object { $_.session_id -eq $session.id } | Sort-Object { if ($_.position) {[int]$_.position} else {999} })
    $results = @()
    foreach ($entry in $entries) {
      $roundEntry = $roundEntries[$entry.round_entry_id]
      $teamDriver = $teamDrivers[$roundEntry.team_driver_id]
      $driver = $drivers[$teamDriver.driver_id]
      $team = $teams[$teamDriver.team_id]
      $results += [ordered]@{
        position = $entry.position; positionText = $(if ($entry.position) {$entry.position} else {'R'}); points = $entry.points
        Driver = [ordered]@{ driverId=$driver.reference; givenName=$driver.forename; familyName=$driver.surname }
        Constructor = [ordered]@{ constructorId=$team.reference; name=$team.name }
        grid = $entry.grid; laps = $entry.laps_completed; status = $entry.detail
      }
    }
    $raceOutput += [ordered]@{ season=$season; round=$round.number; raceName=$round.name; date=$round.date; Results=$results }

    if ([int]$season -ge 2011) {
      $racePits = @()
      foreach ($pit in @($pitRows | Where-Object { $sessionEntries[$_.session_entry_id].session_id -eq $session.id } | Sort-Object { [int]$_.number })) {
        $pitEntry = $sessionEntries[$pit.session_entry_id]
        $pitRoundEntry = $roundEntries[$pitEntry.round_entry_id]
        $pitTeamDriver = $teamDrivers[$pitRoundEntry.team_driver_id]
        $pitDriver = $drivers[$pitTeamDriver.driver_id]
        $racePits += [ordered]@{ driverId=$pitDriver.reference; lap=$laps[$pit.lap_id].number; stop=$pit.number; time=$pit.local_timestamp; duration=$pit.duration }
      }
      $stopOutput += [ordered]@{ season=$season; round=$round.number; raceName=$round.name; PitStops=$racePits }
    }
  }
  $result[$siteKeys[$reference]] = [ordered]@{ races=$raceOutput; stops=$stopOutput; generatedAt=(Get-Date).ToUniversalTime().ToString('o'); source='Jolpica official database dump' }
  Write-Host "${reference}: $($raceOutput.Count) races, $($stopOutput.Count) pit-stop race records"
}

$json = $result | ConvertTo-Json -Depth 16 -Compress
[System.IO.File]::WriteAllText((Join-Path $root 'history-data.js'), "window.F1_HISTORY=$json;", [System.Text.UTF8Encoding]::new($false))
Write-Host 'history-data.js created'
