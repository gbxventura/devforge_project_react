import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// Conectar ao MongoDB
mongoose.connect(
  'mongodb+srv://root:<password>@cluster0.zkwilos.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Definir esquemas e modelos
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

// Endpoint para registro de usuário
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({ username, password: hashedPassword });

  newUser
    .save()
    .then(() => res.send('Usuário registrado com sucesso.'))
    .catch(err => {
      console.error('Erro ao salvar o usuário:', err);
      res.status(500).send('Erro ao registrar o usuário.');
    });
});

// Endpoint para login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then(user => {
      if (!user) {
        return res.status(401).send('Credenciais inválidas');
      }
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const token = jwt.sign({ userId: user._id }, 'your_secret_key', {
            expiresIn: '1h',
          });
          res.json({ token });
        } else {
          res.status(401).send('Credenciais inválidas');
        }
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao processar o pedido de login.');
    });
});

app.listen(5000, () => console.log('Server rodando na porta 5000'));
