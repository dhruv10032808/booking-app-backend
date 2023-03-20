const express=require('express');
const userController=require('../controllers/users')
const router=express.Router();

router.get('/get-user',userController.getUsers);

router.post('/add-user',userController.postUsers)

router.use(`/delete-user/:userId`,userController.getDelete)

module.exports=router;