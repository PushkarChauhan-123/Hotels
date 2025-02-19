const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    taste: { type: String, required: true , enum: ['spicy', 'sweet', 'sour'] },
   is_drink: { type: Boolean, default: false },
   ingredients: { type: [String], default: 0},
   num_sales: { type: Number, default: 0}
})

const MenuItem = mongoose.model('menu', menuSchema);

module.exports = MenuItem;
