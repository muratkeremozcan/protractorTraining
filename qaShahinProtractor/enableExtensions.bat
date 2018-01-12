$registryPath = "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallBlacklist"
$Name = "1"

Remove-ItemProperty $registryPath $Name