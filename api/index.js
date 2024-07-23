import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
const SECRET_KEY = 'seu_segredo_super_secreto'; // chave secreta diretamente no código

app.use(bodyParser.json());
app.use(cors());

const mongoURI =
  'mongodb+srv://gbxventura:0901@cursojs01.e6vqfep.mongodb.net/forms?retryWrites=true&w=majority&appName=cursojs01'; // URI do MongoDB diretamente no código
mongoose
  .connect(mongoURI, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  })
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB', err);
  });

const FormSchema = new mongoose.Schema({
  name: String,
  company: String,
  email: String,
  cargo: String,
  phone: String,
  mkt: String,
  message: String,
});

const FormModel = mongoose.model('Form', FormSchema);

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model('User', UserSchema);

app.post('/api/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new UserModel({
      email: req.body.email,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).send('Usuário registrado com sucesso');
  } catch (err) {
    res.status(500).send('Erro ao registrar o usuário');
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send('Email ou senha inválidos');
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(400).send('Email ou senha inválidos');
    }

    const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
      expiresIn: '1h',
    });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).send('Erro ao fazer login');
  }
});

app.post('/api/form', async (req, res) => {
  try {
    const formData = new FormModel(req.body);
    await formData.save();
    res.status(200).send('Dados recebidos e salvos com sucesso');
  } catch (err) {
    res.status(500).send('Erro ao salvar os dados');
  }
});

app.get('/api/forms', async (req, res) => {
  try {
    const forms = await FormModel.find();
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).send('Erro ao buscar os dados');
  }
});

app.delete('/api/forms/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await FormModel.findByIdAndDelete(id);
    res.status(200).send('Formulário excluído com sucesso');
  } catch (err) {
    console.error('Erro ao excluir o formulário:', err);
    res.status(500).send('Erro ao excluir o formulário');
  }
});

app.listen(5000, () => {
  console.log('Server executando na porta 5000');
});
