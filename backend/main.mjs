import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conectar ao MongoDB
const mongoURI =
  'mongodb+srv://gbxventura:0901@cursojs01.e6vqfep.mongodb.net/forms?retryWrites=true&w=majority&appName=cursojs01';
mongoose
  .connect(mongoURI)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.log(err));

// Definir o modelo de dados
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

// Rota para receber os dados do formulário
app.post('/api/form', async (req, res) => {
  try {
    const formData = new FormModel(req.body);
    await formData.save();
    res.status(200).send('Dados recebidos e salvos com sucesso');
  } catch (err) {
    res.status(500).send('Erro ao salvar os dados');
  }
});

// Buscar dados do formulario
app.get('/api/forms', async (req, res) => {
  try {
    const forms = await FormModel.find();
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).send('Erro ao buscar os dados');
  }
});

// Ouvindo porta
app.listen(port, () => {
  console.log(`Server executando na porta ${port}`);
});
