$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$sourceRoot = 'C:\Users\molla\.codex\generated_images\019f8949-1c79-7b51-8963-15862da21334'
$outputRoot = Join-Path $PSScriptRoot '..\assets\cars'
New-Item -ItemType Directory -Force $outputRoot | Out-Null
$files = [ordered]@{
  'ferrari' = 'exec-b62b7606-bb15-43df-bc36-ac059160f19b.png'
  'mercedes' = 'exec-4b52325b-c2f7-4e5b-b548-36434c7537cb.png'
  'mclaren' = 'exec-dce94fe4-206a-4518-aa75-a2e0147b7f11.png'
  'red-bull-racing' = 'exec-96d77f31-691d-4537-9929-f01906d851fb.png'
  'racing-bulls' = 'exec-3e5e512d-a19d-413b-bd03-9852ddb27e16.png'
  'audi' = 'exec-1d9ef5a8-3aa8-4edf-830d-e73d2b6688c0.png'
  'alpine' = 'exec-4f4d4f44-0f5a-4290-937b-826e6fdcdfcd.png'
  'haas' = 'exec-62210a85-e614-4720-9c88-75e12a5384d1.png'
  'cadillac' = 'exec-30ba5914-be0d-4d27-964e-c0619ac04a31.png'
  'williams' = 'exec-6413a116-9051-46f5-9d78-656dd4f9818c.png'
  'aston-martin' = 'exec-5eeb6705-98b1-46f3-acc1-810759a9a8cc.png'
}
foreach ($entry in $files.GetEnumerator()) {
  $source = [System.Drawing.Bitmap]::FromFile((Join-Path $sourceRoot $entry.Value))
  try {
    $bitmap = [System.Drawing.Bitmap]::new(256,256,[System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    try {
      $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $graphics.DrawImage($source, 0, 0, 256, 256)
    } finally { $graphics.Dispose() }
    for ($y = 0; $y -lt 256; $y++) {
      for ($x = 0; $x -lt 256; $x++) {
        $pixel = $bitmap.GetPixel($x,$y)
        $greenDominance = $pixel.G - [Math]::Max($pixel.R,$pixel.B)
        if ($pixel.G -gt 105 -and $greenDominance -gt 35) {
          $alpha = [Math]::Max(0, [Math]::Min(255, 255 - (($greenDominance - 35) * 4)))
          $newGreen = [Math]::Min($pixel.G, [Math]::Max($pixel.R,$pixel.B) + 12)
          $bitmap.SetPixel($x,$y,[System.Drawing.Color]::FromArgb($alpha,$pixel.R,$newGreen,$pixel.B))
        }
      }
    }
    $target = Join-Path $outputRoot ($entry.Key + '.png')
    $bitmap.Save($target,[System.Drawing.Imaging.ImageFormat]::Png)
    $bitmap.Dispose()
  } finally { $source.Dispose() }
}
