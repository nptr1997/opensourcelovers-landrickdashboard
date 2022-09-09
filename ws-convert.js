const convertToWindowsStore = require('electron-windows-store')
 
convertToWindowsStore({
   containerVirtualization: false,
   inputDirectory: './build/win-unpacked/',
   outputDirectory: './output/',
   packageVersion: '1.5.5.0',
   packageName: 'NativeDashboard',
   packageDisplayName: 'Native Dasboard',
   packageDescription: 'native dashboard for ads manager',
   packageExecutable: 'app/Ghost.exe',
   //assets: 'C:\\assets\\',
   //manifest: 'C:\\AppXManifest.xml',
   deploy: false,
   publisher: 'CN=2148349D-1F31-42D0-98E1-1AA790A2A5CB',
   windowsKit: 'C:\\windowskit',
   devCert: 'C:\\devcert.pfx',
   certPass: 'abcd',
   desktopConverter: 'C:\\desktop-converter-tools',
   expandedBaseImage: 'C:\\base-image.wim',
   makeappxParams: ['/l'],
   signtoolParams: ['/p'],
   makePri: true,
   createConfigParams: ['/a'],
   createPriParams: ['/b'],
   finalSay: function () {
     return new Promise((resolve, reject) => resolve())
   }
})