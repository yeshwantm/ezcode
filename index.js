const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello world 14?');
});

app.listen(4000,()=>{
    console.log('Listening on port 4000');
});