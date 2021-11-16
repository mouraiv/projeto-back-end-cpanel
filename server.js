const express = require('express');
const cookieParse = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/router')

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://webroot:NnqXYA37RxhDcySp@cluster0.qqwrk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true
},function(err){
    if(err){
        console.log('ERRO AO CONECTAR'+err)
    }else{
        console.log('SERVIDOR CONECTADO COM SUCESSO!')
    }
})

app.use(cors());
app.use(cookieParse());
app.use(express.json());
app.use(routes);

app.listen(port,function(){
    console.log('Server start!')
});