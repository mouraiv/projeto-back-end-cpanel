const express = require('express');
const cookieParse = require('cookie-parser');
const ejs = require('ejs')
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/router')

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://webroot:NnqXYA37RxhDcySp@cluster0.qqwrk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true
},function(err){
    if(err){
        console.log('ERRO AO CONECTAR'+err)
    }else{
        console.log('SERVIDOR CONECTADO COM SUCESSO!')
    }
})

app.set("views", path.join(__dirname, "src/views"));
app.use("/css",express.static(path.join(__dirname, "src/public/css")));
app.set('view engine', 'ejs');
console.log(path.join(__dirname, "src/public/css"))
app.use(cors());
app.use(cookieParse());
app.use(express.json());
app.use(routes);

app.listen(port,function(){
    console.log('Server start!')
});