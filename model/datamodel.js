const mongoose=require('mongoose')
Schema= mongoose.Schema

const data=new Schema({
    id:{type:Number},
    symbol:{type:String},
    name:{type:String},
    amount:{type:Number},
    USD:{type:Number}
},{timestamps:true})

module.exports=mongoose.model('data',data)
