const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// Post method to add menu item data
router.post('/', async (req, res)=>{
    try{
      const data = req.body; // Assuming the request body contains the menu data 


      // Create a new menu document using the Mongoose model
        const newMenu = new MenuItem(data);


      // Save the new menu document to the database
        
      const response = await newMenu.save();
      
      console.log('data saved' ,response);
      
      res.status(201).json(response)

    }catch(error){
        res.status(500).json(error , 'internal server error');
    }
})

router.get('/', async (req, res)=>{
    try{
        
        const data = await MenuItem.find();
        console.log('data fetched' , data);
        res.status(200).json(data);

    }catch(error){
        res.status(500).json(error , 'internal server error');
    }
});

router.get('/:taste', async (req, res)=>{
    try{
        const taste = req.params.taste;
        if(taste =='spicy' || taste == 'sweet' || taste == 'sour'){
            const response = await MenuItem.find({taste: taste});
            console.log('data fetched');
            res.status(200).json(response);

        }else{
            res.status(400).json('Invalid taste type');
        }
       
    }catch(error){
        res.status(500).json(error , 'internal server error');
    }
}); 


module.exports = router;

