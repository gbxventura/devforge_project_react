const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Registrar
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).send('Usuário já existe');
    }
    const user = new User({ username, password });
    await user.save();
    res.status(201).send('Usuário registrado com sucesso!');
  } catch (error) {
    res.status(500).send('Erro ao registrar usuário');
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

//admin
router.get('/admin', authMiddleware, async (req, res) => {
  // Aqui você poderia acessar req.userData para obter informações sobre o usuário
  res.json({ message: 'Dados Administrativos' });
});

module.exports = router;
