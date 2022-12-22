const { Router } = require('express')
const router = Router();

const {
    renderCart,  
    addProductToCart, 
    renderProducts, 
    renderEditForm, 
    updateNote, 
    deleteProduct 
} = require('../controllers/products.controllers');

const { isAuthenticated } = require('../helpers/auth')

//New Note

router.get('/cart', isAuthenticated, renderCart)

router.post('/products', isAuthenticated, addProductToCart)

//Get all Note
router.get('/cart', isAuthenticated, renderProducts)

//Edit notes
router.get('/notes/edit/:id', isAuthenticated, renderEditForm)

router.put('/notes/edit/:id', isAuthenticated, updateNote)

//Delete note
router.delete('/cart/delete/:id', isAuthenticated, deleteProduct)

module.exports = router;