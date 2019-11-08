module.exports=function(app) {
    var currentUser;
    var User=require('../models/user.js');
    var Food=require('../models/food.js').model;

    app.get('/', function(req, res) {

        User.find({}, function(err,users) {

            console.log(users)
            res.render('login.ejs',{results:users})

        })

    });

app.post('/login',function(req,res){
    User.findOne({userName:req.body.userName},function(err,user){
        if(user){
            currentUser=user;
            res.render("home.ejs",{userObject:user})
        }else{
            var u=new User({userName:req.body.userName,password:req.body.password})
            u.save(function(err,user){
                currentUser=user;
                res.render("home.ejs",{userObject:user})
            })
        }
    })

});

app.post('/addAttributes', function(req, res) {
    var u = req.body.userName; 
    var p = req.body.password;

    User.findOne({userName:currentUser.userName},function(err,user){
        user.name=req.body.name
        user.age=req.body.age
        user.food.push(new Food({name:req.body.food}));
        user.save(function(err,newUser){
            res.render('home.ejs',{userObject:user})
        })
    })
});
app.get('/displayList', function(req, res) {
    User.find({},function(err,users){
        res.render('displayList.ejs',{results:users})
    })
});
}