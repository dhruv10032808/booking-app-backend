const express=require('express');
const userRoutes=require('./routes/users')
const parsedBody=require('body-parser')
const cors=require('cors')
const sequelize=require('./util/database')

const app=express();
app.use(cors());
app.use(parsedBody.json());
app.use(parsedBody.urlencoded({ extended: true }));
app.use(userRoutes)

sequelize.sync().then(result=>{
    app.listen(3000);
})
.catch(err=>console.log(err))
