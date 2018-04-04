const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/email/:address', (req, res) => {
    console.log('Data received: ' + JSON.stringify(req.body));
    res.send('OK');
});

console.log('Server is running on', process.env.PORT || 3000, process.env.IP || '0.0.0.0');

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );

