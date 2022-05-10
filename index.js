const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello world 4?');
});

app.listen(80,()=>{
    console.log('Listening on port 80');
});