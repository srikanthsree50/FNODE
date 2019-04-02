
const port = process.env.PORT || 8080;

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('./models/User');

const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/mongoose' , {useMongoClient:true});
mongoose.connection
.once('open', () => console.log('CONNECTED'))
.on('error', (err) => {
    console.log('could not connect',err)
});
 
app.get('/',(req,res) => {
    res.send('ROOT');
});


app.post('/users',(req,res) => {

    const newUser = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        isActive:req.body.isActive
    });

    newUser.save().then(dataSaved => {
        res.send('saved user newly...');
   }).catch(err => {
       res.status(404).send('user not saved...');
   })

});


app.get('/users',(req,res) =>{
    User.find({}).then(users => {
        res.send(users);
    }).catch(err => {
        res.status(404).send('cannot fetch users...');
    })
})

app.patch('/users/:id',(req,res)=>{
const id = req.params.id;
const firstName = req.body.firstName;

User.findByIdAndUpdate({_id:id},{$set:{firstName:firstName}},{new:true})
.then(savedUser=>{

res.send('user updated...')

}).catch(err => {
    res.status(404).send('cannot update users...');
})
})


// app.put('/users/:id',(req,res)=>{
//     const id = req.params.id;
//     const firstName = req.body.firstName;
//     const lastName = req.body.lastName;

//     User.findByIdAndUpdate({_id:id},{$set:{firstName:firstName,lastName:lastName}},{new:true})
//     .then(savedUser=>{
    
//     res.send('user updated PUT...')
    
//     }).catch(err => {
//         res.status(404).send('cannot update users...');
//     })
//     })


    
app.put('/users/:id',(req,res)=>{

    User.findOne({_id:req.params.id}).then(user=>{
    
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;

    user.save().then(userSaved=>{
        res.send(userSaved);
 
    }).catch(err => {
             res.status(404).send('cannot update users...');
         })

})
   
})


app.delete('/users/:id',(req,res)=>{

    User.findOne({_id:req.params.id}).then(user=>{

    user.remove().then(userRemoved=>{
        res.send(userRemoved);
 
    }).catch(err => {
             res.status(404).send('cannot delete users...');
         })

})
   
})

app.listen(port, () => {
    console.log(`server running at ${port}....`)
});