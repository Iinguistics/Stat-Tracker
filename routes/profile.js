const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const API = require('call-of-duty-api')({ platform: "xbl" });




// overwatch
router.get('/:platform/:gamertag/overwatch', async (req,res) =>{
    try{
       const headers = {
           'TRN-Api-Key' : process.env.TRACKER_API_KEY
       }

       const { platform, gamertag } = req.params;

       const response = await fetch(`${process.env.TRACKER_API_URL_overwatch}/profile/${platform}/${gamertag}`, {
           headers
       });

       const data = await response.json();

       if(data.errors && data.errors.length > 0){
           return res.status(404).json(
               {message: 'Profile not found'}
           )
       }

       res.json(data);

    } catch(err){
        console.log(err);
        res.status(500).json({
            message: 'server error'
        });
    }
});

// apex
router.get('/:platform/:gamertag/apex', async (req,res) =>{
    try{
       const headers = {
           'TRN-Api-Key' : process.env.TRACKER_API_KEY
       }

       const { platform, gamertag } = req.params;

       const response = await fetch(`${process.env.TRACKER_API_URL_apex}/profile/${platform}/${gamertag}`, {
           headers
       });

       const data = await response.json();

       if(data.errors && data.errors.length > 0){
           return res.status(404).json(
               {message: 'Profile not found'}
           )
       }

       res.json(data);

    } catch(err){
        console.log(err);
        res.status(500).json({
            message: 'server error'
        });
    }
});

// division-2
router.get('/:platform/:gamertag/division', async (req,res) =>{
    try{
       const headers = {
           'TRN-Api-Key' : process.env.TRACKER_API_KEY
       }

       const { platform, gamertag } = req.params;

       const response = await fetch(`${process.env.TRACKER_API_URL_division}/profile/${platform}/${gamertag}`, {
           headers
       });

       const data = await response.json();

       if(data.errors && data.errors.length > 0){
           return res.status(404).json(
               {message: 'Profile not found'}
           )
       }

       res.json(data);

    } catch(err){
        console.log(err);
        res.status(500).json({
            message: 'server error'
        });
    }
});


// cod MW
router.get('/:platform/:gamertag/cod', async (req,res) =>{
     
    const {  gamertag } = req.params;
   
    API.login("thylinux@gmail.com", "Daskeyboard1*#").then(()=> {
        API.MWstats(gamertag).then(data => {
            res.json(data);
           // console.log(data);  // see output
        }).catch(err => {
            console.log(err);
        })
     }).catch(err => {
         console.log(err);
     });
        
});




    




module.exports = router;