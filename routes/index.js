const express = require('express');
const router  = express.Router();
const Spend   = require("../models/Spend")

/* GET home page */
router.get('/', async(req, res) => {
  
  res.render('index');
});

router.post('/spend',async(req, res)=>{

 const {name, price, image, description}= req.body

 await Spend.create({name, price, image, description})
 res.redirect('spend');
})

router.get('/spend', async(req, res)=>{
   const spends = await Spend.find()
   const total = spends.reduce((prev, current)=> prev + current.price, 0 )
  res.render('spend',{spends, total})
})

module.exports = router;
