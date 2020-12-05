const User = require("../model/user")

exports.createUser = (req,res)=>{
    if(!req.body.name){
        return res.status(400).json({
            "message" : "Name cannot be empty"
        })
    }
    const user = new User({
        _id : req.body.id,
        name : req.body.name,
        age : req.body.age,
        vip : req.body.vip  || false,
        joining_date : Date.now()
    })
    user.save()
    .then(data =>{
        res.json(data)
    }).catch(err =>{
        res.status(500).json({
            "message" : err.message || "Some unknown error occured !"
        })
    })
}

exports.findUser = (req,res)=>{
    User.findById(req.params.userId)
    .then(user =>{
        if(!user){
            return res.status(404).json({
                "message" : 'User not found !!'
            });
        }
        res.json(user)
    }).catch(err =>{
        if(err.kind === 'ObjectId'){
            return res.status(404).json({
                "message" : "User not found !!"
            })
        }
        res.status(500).json({"message" : "Some error occured"})
    })
}

exports.updateUser = (req,res)=>{
    if(!req.body.name){
        return res.status(400).json({
            "message" : "Name cannot be empty !!"
        })
    }
    User.findByIdAndUpdate(req.params.userId,{
        name : req.body.name,
        age : req.body.age,
        vip : req.body.vip || false,
    },{new : true})
    .then(user =>{
        if(!user){
            return res.status(404).json({
                "message" : 'User not found !!'
            });
        }
        res.json(user)
    }).catch(err =>{
        if(err.kind === 'ObjectId'){
            return res.status(404).json({
                "message" : "User not found !!"
            })
        }
        res.status(500).json({"message" : "Some error occured"})
    })
}

exports.deleteUser = (req,res)=>{
    User.findByIdAndDelete(req.params.userId)
    .then(user =>{
        if(!user){
            return res.status(404).json({
                "message" : 'User not found !!'
            });
        }
        res.json({
            "message" : "User deleted successfully !!"
        })
    }).catch(err =>{
        if(err.kind === 'ObjectId'){
            return res.status(404).json({
                "message" : "User not found !!"
            })
        }
        res.status(500).json({"message" : "Some error occured"})
    })
};