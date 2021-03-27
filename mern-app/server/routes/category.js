const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const cart = require('../models/cart');
const Category = require('../models/category.js');


router.get('/allcategory', (req, res) =>{   
    console.log("Hellllllll")
    console.log(req.session.id)

    Category.find({})
        .then(user => {    
            console.log("KKK")
            console.log(user._id)   
           if(!user) {       
              res.status(404).send();      
           }
           console.log(user.id)
           res.send(user);
         }).catch((e) => {      
            res.status(400).send(e);    
         });
    });




router.post('/mycategory', auth.authenticate, (req, res) => {
    console.log("Hi");
    // if (!req.session.userId) {
    //     console.log("Not logged in");m
    //     res.send(200).send({message : "Not logged in"});
    //     return;
    // }
    // if (!req.body.rating) {
    //     res.status(400).send({message: "Please enter the rating"});
    //     return;
    // }

    //const {title, description,            , mrp, lp} = req.body;
    const category = req.body.category;
    const name = req.body.name;

        const categorydb = new Category({category, name});
        categorydb.save().then(() => {
                res.status(201).send({message : 'Product Added in D/B'});
    }).catch(() => {
        res.status(500).send({ message: "Internal Server Error" });
    });
});
module.exports = router;
