const { exec } = require('child_process');
const os = require('os');
const path = require('path');

const scriptPath = path.join(__dirname, 'run.sh');


const fs = require('fs');
fs.chmodSync(scriptPath, '755');  // Make sure it's executable


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
