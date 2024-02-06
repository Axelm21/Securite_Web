// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Ajoute cette ligne

const app = express();
const port = 3000;

// Configuration CORS
app.use(cors()); // Utilise CORS pour permettre les requêtes de tous les domaines

// Autres middlewares...
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes...
app.post('/signup', (req, res) => {
  // Logique d'inscription...
  res.send('Inscription réussie');
});

app.post('/login', (req, res) => {
    // Logique de connexion...
    res.send('Connexion réussie');
  });

// Connecte-toi à la base de données MongoDB...

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
