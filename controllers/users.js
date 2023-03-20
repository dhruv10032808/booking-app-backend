const User=require('../models/user')
exports.getUsers=(req,res,next)=>{
    User.findAll().then(result=>{
      res.status(201).json({newUserDetail:result})
      console.log(result)
    })
    .catch(err=>console.log(err))
  }

exports.postUsers=(req,res,next)=>{
    User.create({
        username:req.body.username,
        number:req.body.number,
        email:req.body.email
    }).then(result=>{
        res.status(201).json({newUserDetail:result})
        console.log(result)
    })
    .catch(err=>console.log(err))
}

exports.getDelete=(req,res,next)=>{
    const userId=req.params.userId;
    User.destroy({where:{id:userId}}).then((result)=>{
       console.log(result)
       console.log('deleted')
    })
    .catch(err=>console.log(err))
}