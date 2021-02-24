const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true });
const userModel = mongoose.model('users', new mongoose.Schema({ name:String, email:String, password:String }), 'users');
const stagiaireModel = mongoose.model('stagiaires', new mongoose.Schema({ cin:String, name:String, prenom:String, ln:String, dn:String, 
    email:String, tele:String, adress:String, sexe:String }), 'stagiaires');


router.get('/allusers', function(req, res, next) { 
    userModel.find({}, function(err, data){
        if(err) console.log(err);
        res.json(data); 
    });    
});
router.get('/user/:name', function(req, res, next) { 
    userModel.findOne({'name' : req.params.name}, function(err, data){
        if(err) console.log(err);
        res.json(data); 
    });    
});
router.get('/user/:name/delete', function(req, res, next) { 
    userModel.deleteOne({ 'name': req.params.id }, function (err) {
        if (err) res.send(1);
        res.send(0)
    }); 
});
router.get('/allstagiaires', function(req, res, next) { 
    var data = stagiaireModel.find({}, function(err, data){
        if(err) console.log(err);
        res.json(data); 
    });    
});
router.get('/stagiaires/:cin', function(req, res, next) { 
    stagiaireModel.findOne({'cin' : req.params.cin}, function(err, data){
        if(err) console.log(err);
        res.json(data); 
    });    
});

module.exports = router;
