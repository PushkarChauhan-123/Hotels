const express = require('express');
const router = express.Router();

const person = require('../models/person');


// Post method to add person data
router.post('/', async(req, res)=>{
    try{
      const data = req.body; // Assuming the request body contains the person data 


      // Create a new person document using the Mongoose model
        const newPerson = new person(data);


      // Save the new person document to the database
        
      const response = await newPerson.save();
      
      console.log('data saved' ,response);
      
      res.status(201).json(response)

    }catch(error){
        res.status(500).json(error , 'internal server error');
    }
})


// Get merthod to get person data 

router.get('/', async (req, res)=>{
    try{
        
        const data = await person.find();
        console.log('data fetched' , data);
        res.status(200).json(data);

    }catch(error){
        res.status(500).json(error , 'internal server error');
    }
});

router.get('/:workType', async (req, res)=>{
    try{
        const workType = req.params.workType;
        if(workType =='chef' || workType == 'waiter' || workType == 'manager'){
            const response = await person.find({work: workType});
            console.log('data fetched');
            res.status(200).json(response);

        }else{
            res.status(400).json('Invalid work type');
        }
       
    }catch(error){
        res.status(500).json(error , 'internal server error');
    }
});

module.exports = router;