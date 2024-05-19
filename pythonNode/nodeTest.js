const express = require('express')
const { spawn } = require('child_process');
const app = express()
const port = 3000

app.get('/', (req, res) => {

    const firstNum = req.query.first || 0;
    const secondNum = req.query.second || 1;

    let dataToSend;
    // spawn new child process to call the python script 
    // and pass the variable values to the python script
    const python = spawn('python', ['pythonTest.py', firstNum , secondNum]);
    // collect data from script
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        res.send(dataToSend)
    });

})

app.listen(port, () => {
    console.log(`app is listening on port ${port}!`)
})