const express = require('express');
const app = express();
const PORT = 3000;

app.get('/index', function (req, resp){
    resp.send(`Hello Word`);
})

app.listen(PORT, function (){
    console.log(`Sever start  success! Port: ${PORT}`);
})