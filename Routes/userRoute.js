const router = require('express').Router()
const { users } = require('../user')






//Routes
   //GET : 
    //get all users:

    router.get('/get-all-users',(req,res)=> {
        res.status(200).json(users)
   })

   //get user by id

   router.get('/:id',(req,res)=>{
       console.log('req',req.params.id)
       res.status(200).json(users.find(el=>el.id == req.params.id))
   })


   //PUT 
   //update user

   router.get('/update-user/:id',(req,res)=>{
    const newUsers = users.map(el => el.id == req.params.id ? {...el , firstName : "updated now"} : el)
    res.status(200).json(newUsers)
   })

module.exports = router