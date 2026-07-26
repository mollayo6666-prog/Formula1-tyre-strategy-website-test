$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent
$dataPath = Join-Path $root 'data.json'
$data = Get-Content $dataPath -Raw -Encoding UTF8 | ConvertFrom-Json

# 2026 FIA calendar venues. Bahrain and Saudi Arabia remain available for analysis,
# but are marked cancelled because their April events were officially called off.
$tracks = @(
  @{id='albert-park';name='Albert Park Grand Prix Circuit';gp='Australian Grand Prix';country='Australia';length=5.278;laps=58;first=1996;tyres=@('C3','C4','C5');profile='street-mixed';severity=3;pit=20.5;turns=14;lat=-37.8497;lon=144.9680},
  @{id='shanghai';name='Shanghai International Circuit';gp='Chinese Grand Prix';country='China';length=5.451;laps=56;first=2004;tyres=@('C2','C3','C4');profile='mixed';severity=4;pit=22.0;turns=16;lat=31.3389;lon=121.2197},
  @{id='suzuka';name='Suzuka Circuit';gp='Japanese Grand Prix';country='Japan';length=5.807;laps=53;first=1987;tyres=@('C1','C2','C3');profile='high-speed-technical';severity=5;pit=22.0;turns=18;lat=34.8431;lon=136.5410},
  @{id='bahrain';name='Bahrain International Circuit';gp='Bahrain Grand Prix';country='Bahrain';length=5.412;laps=57;first=2004;tyres=@('C1','C2','C3');profile='traction-braking';severity=4;pit=23.0;turns=15;lat=26.0325;lon=50.5106;cancelled=$true},
  @{id='jeddah';name='Jeddah Corniche Circuit';gp='Saudi Arabian Grand Prix';country='Saudi Arabia';length=6.175;laps=50;first=2021;tyres=@('C2','C3','C4');profile='high-speed-street';severity=3;pit=20.5;turns=27;lat=21.6319;lon=39.1044;cancelled=$true},
  @{id='miami';name='Miami International Autodrome';gp='Miami Grand Prix';country='United States';length=5.412;laps=57;first=2022;tyres=@('C3','C4','C5');profile='street-mixed';severity=3;pit=21.5;turns=19;lat=25.9581;lon=-80.2389},
  @{id='villeneuve';name='Circuit Gilles-Villeneuve';gp='Canadian Grand Prix';country='Canada';length=4.361;laps=70;first=1978;tyres=@('C3','C4','C5');profile='traction-braking';severity=2;pit=19.0;turns=14;lat=45.5000;lon=-73.5228},
  @{id='monaco';name='Circuit de Monaco';gp='Monaco Grand Prix';country='Monaco';length=3.337;laps=78;first=1950;tyres=@('C3','C4','C5');profile='low-speed-street';severity=2;pit=19.5;turns=19;lat=43.7347;lon=7.4206},
  @{id='catalunya';name='Circuit de Barcelona-Catalunya';gp='Barcelona-Catalunya Grand Prix';country='Spain';length=4.657;laps=66;first=1991;tyres=@('C1','C2','C3');profile='high-speed-mixed';severity=5;pit=22.5;turns=14;lat=41.5700;lon=2.2611},
  @{id='red-bull-ring';name='Red Bull Ring';gp='Austrian Grand Prix';country='Austria';length=4.318;laps=71;first=1970;tyres=@('C3','C4','C5');profile='traction-high-speed';severity=3;pit=20.0;turns=10;lat=47.2197;lon=14.7647},
  @{id='silverstone';name='Silverstone Circuit';gp='British Grand Prix';country='United Kingdom';length=5.891;laps=52;first=1950;tyres=@('C1','C2','C3');profile='high-speed';severity=5;pit=23.5;turns=18;lat=52.0786;lon=-1.0169},
  @{id='spa-francorchamps';name='Circuit de Spa-Francorchamps';gp='Belgian Grand Prix';country='Belgium';length=7.004;laps=44;first=1950;tyres=@('C2','C3','C4');profile='high-speed-mixed';severity=4;pit=22.5;turns=19;lat=50.4372;lon=5.9714},
  @{id='hungaroring';name='Hungaroring';gp='Hungarian Grand Prix';country='Hungary';length=4.381;laps=70;first=1986;tyres=@('C2','C3','C4');profile='technical';severity=4;pit=21.0;turns=14;lat=47.5789;lon=19.2486},
  @{id='zandvoort';name='Circuit Zandvoort';gp='Dutch Grand Prix';country='Netherlands';length=4.259;laps=72;first=1952;tyres=@('C1','C2','C3');profile='high-speed-technical';severity=4;pit=20.5;turns=14;lat=52.3888;lon=4.5409},
  @{id='monza';name='Autodromo Nazionale Monza';gp='Italian Grand Prix';country='Italy';length=5.793;laps=53;first=1950;tyres=@('C3','C4','C5');profile='low-downforce';severity=2;pit=24.0;turns=11;lat=45.6156;lon=9.2811},
  @{id='madring';name='Madring';gp='Spanish Grand Prix';country='Spain';length=5.474;laps=57;first=2026;tyres=@('C2','C3','C4');profile='street-mixed';severity=3;pit=22.0;turns=22;lat=40.4630;lon=-3.6170;newTrack=$true},
  @{id='baku';name='Baku City Circuit';gp='Azerbaijan Grand Prix';country='Azerbaijan';length=6.003;laps=51;first=2016;tyres=@('C3','C4','C5');profile='street-low-downforce';severity=2;pit=21.0;turns=20;lat=40.3725;lon=49.8533},
  @{id='marina-bay';name='Marina Bay Street Circuit';gp='Singapore Grand Prix';country='Singapore';length=4.928;laps=62;first=2008;tyres=@('C3','C4','C5');profile='low-speed-street';severity=3;pit=28.0;turns=19;lat=1.2914;lon=103.8640},
  @{id='americas';name='Circuit of the Americas';gp='United States Grand Prix';country='United States';length=5.514;laps=56;first=2012;tyres=@('C2','C3','C4');profile='high-speed-mixed';severity=4;pit=20.5;turns=20;lat=30.1328;lon=-97.6411},
  @{id='rodriguez';name='Autodromo Hermanos Rodriguez';gp='Mexico City Grand Prix';country='Mexico';length=4.304;laps=71;first=1963;tyres=@('C2','C3','C4');profile='low-downforce';severity=3;pit=21.0;turns=17;lat=19.4042;lon=-99.0907},
  @{id='interlagos';name='Autodromo Jose Carlos Pace';gp='Sao Paulo Grand Prix';country='Brazil';length=4.309;laps=71;first=1973;tyres=@('C2','C3','C4');profile='undulating-mixed';severity=3;pit=22.0;turns=15;lat=-23.7036;lon=-46.6997},
  @{id='las-vegas';name='Las Vegas Strip Circuit';gp='Las Vegas Grand Prix';country='United States';length=6.201;laps=50;first=2023;tyres=@('C3','C4','C5');profile='street-low-downforce';severity=2;pit=20.5;turns=17;lat=36.1147;lon=-115.1728},
  @{id='losail';name='Lusail International Circuit';gp='Qatar Grand Prix';country='Qatar';length=5.380;laps=57;first=2021;tyres=@('C1','C2','C3');profile='high-speed';severity=5;pit=25.0;turns=16;lat=25.4900;lon=51.4542},
  @{id='yas-marina';name='Yas Marina Circuit';gp='Abu Dhabi Grand Prix';country='United Arab Emirates';length=5.281;laps=58;first=2009;tyres=@('C3','C4','C5');profile='traction-mixed';severity=3;pit=22.0;turns=16;lat=24.4672;lon=54.6031}
)

$announced = @('albert-park','shanghai','suzuka','miami','villeneuve','monaco','catalunya','red-bull-ring','silverstone','spa-francorchamps','hungaroring')
$circuits = foreach ($t in $tracks) {
  $hard, $medium, $soft = $t.tyres
  $firstStop = [Math]::Max(10, [Math]::Round($t.laps * (0.34 - (($t.severity - 3) * 0.018))))
  $lateStop = [Math]::Round($t.laps * 0.62)
  [ordered]@{
    id=$t.id; name=$t.name; grandPrix=$t.gp; country=$t.country
    eventFormat='standard'; hasSprint=($t.id -in @('shanghai','miami','catalunya','silverstone','zandvoort','marina-bay'))
    calendarStatus=$(if ($t.cancelled) {'called-off'} else {'scheduled'})
    isNewCircuit=[bool]$t.newTrack
    official=[ordered]@{
      lengthKm=$t.length; raceLaps=$t.laps; raceDistanceKm=[Math]::Round($t.length*$t.laps,3); firstGrandPrix=$t.first
      weekendTyres=[ordered]@{hard=$hard;medium=$medium;soft=$soft}
      tyreAllocationStatus=$(if ($t.id -in $announced) {'official-2026'} else {'model-until-pirelli-announcement'})
      coordinates=@($t.lat,$t.lon); turns=$t.turns
      sourceRefs=@('fia-2026-calendar','formula1-circuit-guide','pirelli-2026-compounds')
    }
    trackModelSeed=[ordered]@{
      speedProfile=$t.profile; tyreSeverity=$t.severity; lateralLoad=$t.severity; longitudinalLoad=3; abrasiveness=$t.severity
      frontRearLimitation='balanced'; criticalTyre='track-condition-dependent'; trackEvolution=3; windSensitivity=3
      rainVariability=$(if ($t.id -in @('spa-francorchamps','interlagos','silverstone','suzuka')) {5} else {2})
      overtakingDifficulty=$(if ($t.id -in @('monaco','hungaroring','marina-bay')) {5} else {3})
      estimatedGreenFlagPitLossSeconds=$t.pit; safetyCarProbability=$(if ($t.profile -like '*street*') {0.48} else {0.31})
      confidence=$(if ($t.newTrack) {'low'} else {'medium'}); calibrationRequired=$true
    }
    weatherInputsRecommended=@('airTemperatureC','trackTemperatureC','humidityPct','windSpeedKph','rainProbabilityPct','rainIntensityMmPerHour','trackWetnessPct')
    dryStrategySeeds=@(
      [ordered]@{id="$($t.id)-normal";stints=@([ordered]@{compound=$medium;lapStart=1;pitWindow=[ordered]@{min=$firstStop-3;max=$firstStop+3}},[ordered]@{compound=$hard;toRaceEnd=$true});risk='low'},
      [ordered]@{id="$($t.id)-overcut";stints=@([ordered]@{compound=$hard;lapStart=1;pitWindow=[ordered]@{min=$lateStop-3;max=$lateStop+3}},[ordered]@{compound=$medium;toRaceEnd=$true});risk='medium'},
      [ordered]@{id="$($t.id)-undercut";stints=@([ordered]@{compound=$soft;lapStart=1;pitWindow=[ordered]@{min=[Math]::Max(7,$firstStop-8);max=[Math]::Max(11,$firstStop-3)}},[ordered]@{compound=$hard;pitWindow=[ordered]@{min=$lateStop-4;max=$lateStop+2}},[ordered]@{compound=$medium;toRaceEnd=$true});risk='high'}
    )
  }
}

$data.circuits.circuits = $circuits
$data.circuits.warning = '2026 Pirelli nominations marked official-2026 are official; later rounds stay model projections until Pirelli publishes their selections. Pit loss and strategy windows are model estimates.'
$data.season.supportedCircuits = @($tracks.id)
$data.season | Add-Member -NotePropertyName calendarNote -NotePropertyValue 'Bahrain and Saudi Arabia were called off by the FIA for April 2026; retained for historical analysis and simulation.' -Force
$newSources = @(
  [pscustomobject]@{id='fia-2026-calendar';publisher='FIA';title='FIA and Formula 1 announce 2026 calendar';url='https://www.fia.com/news/fia-and-formula-1-announce-2026-calendar';usedFor=@('2026 calendar','event order')},
  [pscustomobject]@{id='fia-2026-called-off';publisher='FIA';title='Bahrain and Saudi Arabian Grands Prix will not take place in April';url='https://www.fia.com/news/bahrain-and-saudi-arabian-grands-prix-will-not-take-place-april';usedFor=@('called-off status')},
  [pscustomobject]@{id='formula1-circuit-guide';publisher='Formula 1';title='2026 F1 race calendar and circuit guides';url='https://www.formula1.com/en/racing/2026';usedFor=@('circuit length','lap count','circuit identity')},
  [pscustomobject]@{id='pirelli-2026-compounds';publisher='Pirelli';title='2026 tyre compound choices';url='https://press.pirelli.com/?h=1&t=2026+tyre+compound+choices';usedFor=@('official compound nominations')},
  [pscustomobject]@{id='jolpica-database-dump';publisher='Jolpica F1';title='Formula One historical database dump';url='https://api.jolpi.ca/data/dumps/';usedFor=@('race results since 2000','pit stops')},
  [pscustomobject]@{id='racehooks-fastf1-stints';publisher='RaceHooks / FastF1';title='Historical F1 stint data';url='https://api.racehooks.io/';usedFor=@('actual tyre compounds','full race stints since 2019')}
)
$sourceIds = @($newSources.id)
$data.sources.sources = @($data.sources.sources | Where-Object { $_.id -notin $sourceIds }) + $newSources

$json = $data | ConvertTo-Json -Depth 30
[IO.File]::WriteAllText($dataPath, $json, [Text.UTF8Encoding]::new($false))
[IO.File]::WriteAllText((Join-Path $root 'data.js'), "window.F1_DATA=$json;", [Text.UTF8Encoding]::new($false))
Write-Host "Expanded data to $($circuits.Count) circuits."
