// Importing Modules/Packages
const PORT = process.env.PORT || 5000;
const express = require('express');
const { join } = require('path');
const app = express();


// Starts to All Servers
async function startApplicationServers() {
    try {

        // Middleware
        app.use(express.urlencoded({ extended: false }));
        app.use(express.json());

        checkForNewEnvironment();

        // app.get('/', (req, res) => {
        //     res.json({Naz: 'Hello I am working'});
        // });
        
        // Starting Server
        app.listen(PORT, () => console.log('Listening on Port: ', PORT));
    }
    catch (error) {
        console.error('Error Occurred Starting Apollo Server ', error);
        throw error
    }
}


// Serving up frontend once server starts
function checkForNewEnvironment() {
    if (process.env.NODE_ENV === 'production') {
        // Serve static files from the client/dist directory
        app.use(express.static(join(__dirname, '../client/dist')));

        app.get('*', (req, res) => {
            res.sendFile(join(__dirname, '../client/dist/index.html'));
        });
    }
}

startApplicationServers();