const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // Extrai o token do cabeçalho
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica o token
    req.userData = decoded; // Armazena os dados do usuário no objeto de requisição
    next(); // Passa o controle para o próximo middleware ou rota
  } catch (error) {
    return res.status(401).json({
      message: 'Autenticação falhou',
    });
  }
};

module.exports = authMiddleware;
