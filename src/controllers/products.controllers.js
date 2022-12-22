const productsCtrl = {};

const Product = require('../models/Product');

productsCtrl.renderCart = (req, res) => {
    console.log(req.user.id);
    res.render('cart');
}

productsCtrl.addProductToCart = async (req, res) => {
    const { title, description, price } = req.body;
    const newProduct = new Product({title, description, price})
    newProduct.user = req.user.id;
    await newProduct.save();
    req.flash('success_msg', 'Producto añadido con éxito.');
}

productsCtrl.renderProducts = async (req, res) => {
    const products = await Product.find({user: req.user.id});
    res.render('cart', { products })
}

productsCtrl.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id)
    if (note.user != req.user.id) {
        req.flash('error_msg', 'Not Authorized')
        return res.redirect('/notes');
    }
    res.render('notes/edit-note', { note })
}

productsCtrl.updateNote = async (req, res) => {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description })
    req.flash('success_msg', 'Note Updated Successfully');
    res.redirect('/notes')
}

productsCtrl.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Producto eliminado del carrito.');
    res.redirect('/cart')
}

module.exports = productsCtrl;