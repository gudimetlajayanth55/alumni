const express = require('express');
const app = express();
const sendScript = require('./sendScript.js')
const bodyParser = require('body-parser');

app.use(express.static('.'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.render('./hello.ejs');
});

app.use('/sendMessage', sendScript);

//app.use('/sendMessage', sendScript);
app.listen(8000, () => {
    console.log("server is listening on port 8000");
});