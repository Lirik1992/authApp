const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {

    var newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register user' });
        } else {
            res.json({ success: true, msg: 'User registered' });
        }
    });
});

// Authentication
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found' });
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({ data: user }, config.secret, { expiresIn: 604800 }, (err, token) => {
                    res.json({
                        success: true,
                        token: 'Bearer ' + token,
                        user: {
                            id: user._id,
                            name: user.name,
                            username: user.username,
                            email: user.email
                        }
                    });
                });
            } else {
                return res.json({ success: false, msg: 'Wrong password' });
            }
        });
    });
});

// Passport auth
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user });
});


// JSON Web Token check
router.post('/devices/load', verifyToken, (req, res) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if(err) {
            res.sendStatus(403);
        } else {
             res.json({
                 message: 'Post created',
                 data,
             });
        }
    });
});


// Verify token MIDDLEWARE 
function verifyToken(req, res, next) {
    //Get auth header value
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        //Pull the actual token
        const bearer = bearerHeader.split(' ').splice(1, 1)[0];
        //Set the token
        req.token = bearer;
        // Next MIDDLEWARE
        next();
    } else {
        res.json({ message: "Server responded with the 403 code." })
    }
}


router.get('/getall', (req, res, next) => {
    User.find({}, function (err, user) {
        res.json(user);
    });
});

// 
router.get('/validate', (req, res, next) => {
    res.send('VALIDATE')
});

module.exports = router;