import express from 'express';
import mysql from 'mysql';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173', // URL do seu frontend
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'dbdevforge',
});

// Endpoint para registro de usuário
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(sql, [username, hashedPassword], (err, result) => {
    if (err) {
      console.error('Erro na consulta: ', err);
      return res.status(500).send('Erro ao registrar o usuário.');
    }
    res.send('Usuário registrado com sucesso.');
  });
});

// Endpoint para login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], async (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erro ao processar o pedido de login.');
    }
    if (
      results.length &&
      (await bcrypt.compare(password, results[0].password))
    ) {
      const token = jwt.sign({ userId: results[0].id }, 'your_secret_key', {
        expiresIn: '1h',
      });
      res.json({ token });
    } else {
      res.status(401).send('Credenciais inválidas');
    }
  });
});

app.post('/orcamento', (req, res) => {
  const { name, company, email, cargo, phone, mkt, message } = req.body;
  const sql =
    'INSERT INTO orcamentos (name, company, email, cargo, phone, mkt, message) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(
    sql,
    [name, company, email, cargo, phone, mkt, message],
    (err, result) => {
      if (err) {
        console.error('Erro na consulta: ', err);
        return res.status(500).send('Erro ao registrar o orçamento.');
      }
      res.send('Orçamento registrado com sucesso.');
    }
  );
});

app.listen(5000, () => console.log('Server rodando na porta 5000'));
