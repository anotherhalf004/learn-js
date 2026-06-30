param(
    [string]$ProjectName = "NewProject"
)

New-Item -ItemType Directory -Path $ProjectName -Force | Out-Null

@"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$ProjectName</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <script src="script.js"></script>
</body>
</html>
"@ | Set-Content "$ProjectName/index.html"

"" | Set-Content "$ProjectName/style.css"
"" | Set-Content "$ProjectName/script.js"

Write-Host "Project '$ProjectName' created successfully!"