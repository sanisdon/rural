var express = require('express');
const app = express();
app.get('/', (req, res) => {

    res.send('hello sandeep world');

});

app.listen(5000);
console.log('this app run in 5000 port');