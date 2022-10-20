const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index')
};

indexCtrl.renderProducts = (req, res) => {
    res.render('products')
};

module.exports = indexCtrl;