// /api/login.js
import { connectToDatabase } from '../utils/mongodb'; // Supondo que você tenha uma função de utilitário para conectar ao MongoDB
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    const { db } = await connectToDatabase();

    const user = await db.collection('users').findOne({ username });
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

    return res.status(200).json({ token });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
};
