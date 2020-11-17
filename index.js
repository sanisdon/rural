var express = require('express');
const app = express();
app.get('/', (req, res) => {

    res.send('hello world');

});


app.get('/testing', (req, res) => {

    res.send('testing route');

});

app.listen(5000);
console.log('this app run in 5000 port');