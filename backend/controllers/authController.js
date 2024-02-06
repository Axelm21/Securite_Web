const User = require('../models/user');

exports.signup = async (req, res) => {
  try {
    // Récupère les données d'inscription depuis le corps de la requête
    const { firstName, lastName, email, password } = req.body;

    // Vérifie si l'utilisateur avec cet email existe déjà
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
    }

    // Crée un nouvel utilisateur
    const newUser = new User({ firstName, lastName, email, password });

    // Enregistre l'utilisateur dans la base de données
    await newUser.save();

    // Envoie une réponse réussie
    res.status(200).json({ message: "Inscription réussie" });
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de l inscription.' });
  }
};


const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Tu devras peut-être installer le package bcrypt pour hacher les mots de passe

exports.login = async (req, res) => {
  try {
    // Récupère les données de connexion depuis le corps de la requête
    const { email, password } = req.body;

    // Vérifie si l'utilisateur avec cet email existe
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }

    // Vérifie le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }

    // Génère un token d'authentification
    const token = jwt.sign({ userId: user._id, email: user.email }, 'secret_key', { expiresIn: '1h' });

    // Envoie le token en réponse
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la connexion.' });
  }
};
