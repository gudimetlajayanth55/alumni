const express = require('express');
const app = express();


app.set('ejs', 'html');


app.get('/', (req, res) => {
    res.render('./index.html');
});

app.listen(3000, () => {
    console.log("server is listening on port 3000");
});