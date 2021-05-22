const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/ComesticShopping'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/ComesticShopping/' }
    );
});


app.listen(8000);