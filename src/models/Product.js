const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    title: { 
        type: String, 
        required: true, 
        },
    img: { 
        type: String, 
        required: true 
        },
    price: { 
        type: Number, 
        required: true 
        },
    user: { 
        type: String, 
        required: true
        }
});

module.exports = model("Product", ProductSchema);