$ErrorActionPreference = 'Stop'

$downloads = 'C:\Users\cooki\Downloads'
$root = (Resolve-Path -LiteralPath 'D:\Project\roadtokorea\frontend\public\images\clipartkorea').Path
$expectedRoot = 'D:\Project\roadtokorea\frontend\public\images\clipartkorea'

if (-not $root.Equals($expectedRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
  throw "Unexpected image root: $root"
}

$regions = [ordered]@{
  boseong = @('cm28010223', 'tip250t021276', 'tc00240036428')
  namhae = @('tc00240031341', 'cm27002353', 'tc00240008028', 'tc00240046050', 'tc00240008460')
  tongyeong = @('tc07690000940', 'tc00240114502', 'cm28003289', 'tc02820006696')
  geoje = @('tc00240067406', 'tc00240033922', 'tc00240005192')
  haenam = @('tc00240076791', 'tc00240015668', 'tc08110001899', 'tc00240034550')
  wando = @('tc00240072552', 'cm27015648')
  incheon = @(
    'tc00240015561', 'tc00240016431', 'tc00240114234',
    'tc00240038542', 'tc00240003208', 'tc00240042687',
    'tc00240070187', 'tc00230006243', 'tc00240004068',
    'tc00240031229', 'tc00240110451', 'tc00240109751',
    'tc00240039315', 'cm26008114', 'tc00240065755'
  )
  suwon = @(
    'cm27006035', 'tc00240042747', 'tc00240050756',
    'tc00240045732', 'tc00240072044', 'tc00240070949',
    'cm27014314', 'tc00240039337'
  )
  seosan = @(
    'tc00240028151', 'tc00240010365', 'tc00240104073',
    'tc00240027848', 'tc00240012884', 'tc00240012881',
    'cm270022207', 'cm270022206', 'cm270022199',
    'tc08110003000', 'tc08110002999', 'tc08110002998'
  )
  boryeong = @(
    'tc00240074399', 'tc00240005447', 'tc00240093281',
    'tc00240093282', 'tc00240093280', 'tc00240074401',
    'tc00240116729', 'ta03330003735', 'ta03330003733'
  )
  gunsan = @(
    'tc00240028924', 'tc00240027689', 'tc00240074426',
    'tc01090000012', 'cm27011175', 'tc00240008389'
  )
  mokpo = @(
    'tc00240029851', 'tc00240087840', 'tc00240029853',
    'tc00240097754', 'tc00240103535',
    'tc02460000729', 'tc02460000715', 'tc00240087867',
    'tc00230001383', 'tc00240003276', 'cm27002761'
  )
}

$copied = 0
$alreadyPresent = 0
$missing = 0

foreach ($entry in $regions.GetEnumerator()) {
  $targetDir = [System.IO.Path]::GetFullPath((Join-Path $root $entry.Key))
  if (-not $targetDir.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Unsafe target directory: $targetDir"
  }

  if (-not (Test-Path -LiteralPath $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir | Out-Null
  }

  foreach ($code in $entry.Value) {
    $target = Join-Path $targetDir "$code.jpg"
    if (Test-Path -LiteralPath $target) {
      $alreadyPresent += 1
      continue
    }

    $escaped = [regex]::Escape($code)
    $source = Get-ChildItem -LiteralPath $downloads -File |
      Where-Object { $_.Name -match "^${escaped}_l(?: \(\d+\))?\.jpg$" } |
      Sort-Object LastWriteTime |
      Select-Object -First 1

    if (-not $source) {
      $missing += 1
      continue
    }

    [System.IO.File]::Copy($source.FullName, $target, $false)
    $copied += 1
  }
}

[PSCustomObject]@{
  Copied = $copied
  AlreadyPresent = $alreadyPresent
  Missing = $missing
  RegionFolders = $regions.Count
} | Format-List
