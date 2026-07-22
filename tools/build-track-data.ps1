$ErrorActionPreference = 'Stop'
$source = Join-Path $PSScriptRoot '..\tmp\f1-circuits.geojson'
$output = Join-Path $PSScriptRoot '..\track-data.js'
$geo = Get-Content -Raw $source | ConvertFrom-Json
$targets = [ordered]@{
  'silverstone' = 'Silverstone'
  'spa-francorchamps' = 'Spa Francorchamps'
  'suzuka' = 'Suzuka'
}
$result = [ordered]@{}
foreach ($target in $targets.GetEnumerator()) {
  $feature = $geo.features | Where-Object { $_.properties.Location -eq $target.Value } | Select-Object -First 1
  $coordinates = $feature.geometry.coordinates
  $xs = @($coordinates | ForEach-Object { [double]$_[0] })
  $ys = @($coordinates | ForEach-Object { [double]$_[1] })
  $minX = ($xs | Measure-Object -Minimum).Minimum
  $maxX = ($xs | Measure-Object -Maximum).Maximum
  $minY = ($ys | Measure-Object -Minimum).Minimum
  $maxY = ($ys | Measure-Object -Maximum).Maximum
  $scale = [Math]::Min(740 / ($maxX - $minX), 340 / ($maxY - $minY))
  $drawWidth = ($maxX - $minX) * $scale
  $drawHeight = ($maxY - $minY) * $scale
  $offsetX = (900 - $drawWidth) / 2
  $offsetY = (480 - $drawHeight) / 2
  $parts = New-Object System.Collections.Generic.List[string]
  for ($i = 0; $i -lt $coordinates.Count; $i++) {
    $x = $offsetX + (([double]$coordinates[$i][0] - $minX) * $scale)
    $y = $offsetY + (($maxY - [double]$coordinates[$i][1]) * $scale)
    $command = if ($i -eq 0) { 'M' } else { 'L' }
    $parts.Add(('{0}{1:F1},{2:F1}' -f $command,$x,$y))
  }
  $parts.Add('Z')
  $result[$target.Key] = [ordered]@{
    path = ($parts -join ' ')
    points = $coordinates.Count
    sourceId = $feature.properties.id
    source = 'bacinger/f1-circuits GeoJSON (MIT)'
  }
}
$json = $result | ConvertTo-Json -Depth 5 -Compress
[System.IO.File]::WriteAllText($output, ('window.REAL_TRACK_DATA=' + $json + ';'), [System.Text.UTF8Encoding]::new($false))
