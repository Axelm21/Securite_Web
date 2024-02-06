const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Récupère le token d'authentification depuis les en-têtes de la requête
  const token = req.header('Authorization');

  // Vérifie si le token est présent
  if (!token) {
    return res.status(401).json({ message: 'Accès non autorisé. Token manquant.' });
  }

  try {
    // Vérifie et décode le token
    const decoded = jwt.verify(token, 'secret_key');

    // Ajoute les informations de l'utilisateur au corps de la requête
    req.user = decoded;

    // Poursuit vers la route protégée
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Accès non autorisé. Token invalide.' });
  }
};

module.exports = authMiddleware;
