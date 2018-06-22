const express = require('express');

var app = express();

var dummyStat = {
    temperature: 25.10,
    humidity: 0.45
}


app.get('/test', (req, res) => {
    res.end(JSON.stringify(dummyStat, undefined, 2));
})

var server = app.listen(3000, () => {
    var host = server.address().address
    var port = server.address().port

    console.log("Server listening at http://%s:%s", host, port)
})


