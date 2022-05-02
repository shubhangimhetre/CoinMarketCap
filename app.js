const express=require('express');
const app=express();
const port=3000;
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const DB="mongodb+srv://shubhangimhetre:Shubhangi_123@cluster0.d7gfu.mongodb.net/Mydb?retryWrites=true&w=majority"
const web=require('./routes/web')

mongoose.connect(DB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(()=>{console.log('connected to database..') })
.catch((err)=>{ console.log(err)})

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use('/',web)

app.listen(port,()=>{
    console.log(`server is listening at ${port}`)
})