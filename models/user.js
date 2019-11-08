var mongoose=require('mongoose');
var Food=require('./food')
var Schema = mongoose.Schema;

var userSchema=new Schema({
    name:String,
    userName:String,
    password: String,
    age: Number,
    //food: Food.schema
    food: Array
});

var User=mongoose.model('User', userSchema);
module.exports=User;