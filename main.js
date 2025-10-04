const { exec } = require('child_process');
const os = require('os');
const path = require('path');

// Detect the operating system (Linux/macOS vs Windows)
const isWindows = os.platform() === 'win32';

// Path to the correct script based on the operating system
const scriptPath = path.join(__dirname, isWindows ? 'run.bat' : 'run.sh');

// Ensure the correct script is executable on Linux/macOS
if (!isWindows) {
    const fs = require('fs');
    fs.chmodSync(scriptPath, '755');  // Make sure it's executable
}

// Run the appropriate script based on the OS
exec(scriptPath, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing the script: ${error}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
});
