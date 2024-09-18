// Importing Modules/Packages
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({Naz: 'Hello I am working'});
});

app.listen(PORT, () => console.log('Listening on Port: ', PORT));