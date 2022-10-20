const usersCtrl = {};

const passport = require('passport');

const User = require('../models/User')

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signup = async (req, res) => {
    const errors = [];
    const {name, email, password, confirm_password} = req.body;
    if (password != confirm_password) {
        errors.push({text: 'Las contraseñas no coinciden'})
    }
    if (password.length < 4) {
        errors.push({text: 'La contraseña debe tener al menos 4 caracteres'})
    }
    if (errors.length > 0) {
        res.render('users/signup', {
            errors,
            name,
            email,
            password,
            confirm_password
        })
    } else {
        const emailUser = await User.findOne({email: email});
        if (emailUser) {
            req.flash('error_msg', 'Este email ya se encuentra en uso')
            res.redirect('/users/signup');
        } else {
            const newUser = new User({name, email, password})
            newUser.password = await newUser.encryptPassword(password)
            await newUser.save();
            req.flash('success_msg', 'Registro exitoso')
            res.redirect('/users/signin');
        }
    }
};

usersCtrl.renderSignInForm = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/',
    failureFlash: true
})

usersCtrl.logout = (req, res) => {
    req.logout((err) => {
        if(err) {
        return next(err);
        }
        req.flash('success_msg', 'Saliste de tu cuenta.');
        res.redirect('/');
    }); 
};

module.exports = usersCtrl;