const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Welcome to my hotel ... how can i help you')
});

// Import the personRoutes
const personRoutes = require('./routes/personRoutes');
app.use('/person' , personRoutes);//use the personRoutes

const menuRoutes = require('./routes/MenuRoutes'); 
app.use('/menu', menuRoutes);//use the menuRoutes

app.listen(3000, ()=>{
    console.log('Listening on port 3000');
})


















  
  


