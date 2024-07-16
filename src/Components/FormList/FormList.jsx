import { useState, useEffect } from 'react';
import './FormList.css';

const FormList = ({ searchTerm }) => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/forms')
      .then(response => response.json())
      .then(data => setForms(data))
      .catch(error => console.error('Erro ao buscar os dados:', error));
  }, []);

  const handleDelete = id => {
    console.log(`Tentando excluir formulário com ID: ${id}`);
    fetch(`http://localhost:3000/api/forms/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          console.log(`Formulário com ID: ${id} excluído com sucesso`);
          setForms(forms.filter(form => form._id !== id));
        } else {
          console.error('Erro ao excluir o formulário');
        }
      })
      .catch(error => console.error('Erro ao excluir o formulário:', error));
  };

  // Filtrar formulários com base no termo de pesquisa
  const filteredForms = forms.filter(form =>
    form.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='formList'>
      <h2>Formulários Recebidos</h2>
      {filteredForms.length > 0 ? (
        <ul>
          {filteredForms.map(form => (
            <li key={form._id}>
              <h4>
                Pedido: <strong>{form._id}</strong>
                <button onClick={() => handleDelete(form._id)}>🗑️</button>
              </h4>
              <p>
                <strong>Nome:</strong> {form.name}
              </p>
              <p>
                <strong>Empresa:</strong> {form.company}
              </p>
              <p>
                <strong>Email:</strong> {form.email}
              </p>
              <p>
                <strong>Cargo:</strong> {form.cargo}
              </p>
              <p>
                <strong>Telefone:</strong> {form.phone}
              </p>
              <p>
                <strong>Marketing:</strong> {form.mkt}
              </p>
              <p>
                <strong>Mensagem:</strong> {form.message}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum formulário recebido ainda.</p>
      )}
    </div>
  );
};

export default FormList;
