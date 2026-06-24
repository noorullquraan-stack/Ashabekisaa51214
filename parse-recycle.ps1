
function Parse-RecycleBinMetadata($metadataPath) {
    $bytes = [System.IO.File]::ReadAllBytes($metadataPath);
    $version = [BitConverter]::ToUInt32($bytes, 0);
    $fileSize = [BitConverter]::ToUInt64($bytes, 4);
    $deletionTime = [BitConverter]::ToUInt64($bytes, 12);
    $pathLength = [BitConverter]::ToUInt32($bytes, 20);
    $pathBytes = $bytes[24..(23 + $pathLength * 2)];
    $originalPath = [System.Text.Encoding]::Unicode.GetString($pathBytes);
    $originalPath = $originalPath.TrimEnd([char]0);
    return @{
        Version = $version
        FileSize = $fileSize
        DeletionTime = [DateTime]::FromFileTime($deletionTime)
        OriginalPath = $originalPath
    }
}

$sid = "S-1-5-21-2121845552-316955496-1908354114-1001"
$recyclePath = "C:\`$Recycle.Bin\$sid"

Write-Host "Looking in Recycle Bin: $recyclePath"

Get-ChildItem -Recurse -Force $recyclePath | Where-Object { $_.Name -like "`$I*" } | ForEach-Object {
    $data = Parse-RecycleBinMetadata -metadataPath $_.FullName
    Write-Host "File: $($data.OriginalPath) deleted at $($data.DeletionTime)"
    
    $rFileName = $_.Name -replace "`$I", "`$R"
    $rFilePath = Join-Path $_.DirectoryName $rFileName
    
    if (Test-Path $rFilePath) {
        $ext = [System.IO.Path]::GetExtension($data.OriginalPath)
        $destFileName = [System.IO.Path]::GetFileName($data.OriginalPath)
        if (-not $destFileName) { $destFileName = $rFileName + $ext }
        $destDir = "F:\1.ashabekisaa\recovered_from_recycle"
        if (-not (Test-Path $destDir)) {
            New-Item -ItemType Directory -Path $destDir -Force | Out-Null
        }
        $destPath = Join-Path $destDir $destFileName
        Copy-Item -Path $rFilePath -Destination $destPath -Force
        Write-Host "Copied to: $destPath"
    }
}

Write-Host "Done! Check F:\1.ashabekisaa\recovered_from_recycle"
