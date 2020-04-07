const express = require('express');
const router = express.Router();
const DribbleImg = require("../models/dribbleimg")

router.post('/uploadimg',(req,res,next)=>{
    console.log(req.body.category)
    let newNote = new DribbleImg({
        category: req.body.category,
        description: req.body.description,
        artist: req.body.artist,
        title: req.body.title,
        img: req.body.img,
        created_at: Date.now()
    });
    console.log(newNote)
    newNote.save((err, notes)=>{
        console.log(notes)
        if(err){
            res.json({msg: "Failed to add a note"+err})
        }else{
            res.json({msg: "Note Added successfully"})
        }
    }); 
})


module.exports = router;
