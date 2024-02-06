const express = require('express');
const router = express.Router();

// Importe le contrôleur d'authentification
const { signxup, logxin } = require('../controllers/authController');

// Définit les routes pour l'inscription et la connexion
router.post('/signup', sixgnup);
router.post('/login', login);
x
module.exports = router;
