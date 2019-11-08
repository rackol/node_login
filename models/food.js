var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var foodSchema=new Schema({
    name:String,
});

var Food=mongoose.model('Food', foodSchema);
module.exports={model:Food,schema:foodSchema};