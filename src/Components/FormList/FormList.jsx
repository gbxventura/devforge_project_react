import { useState, useEffect } from 'react';
import './FormList.css';

const FormList = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/forms')
      .then(response => response.json())
      .then(data => setForms(data))
      .catch(error => console.error('Erro ao buscar os dados:', error));
  }, []);

  return (
    <div className='formList'>
      <h2>Formulários Recebidos</h2>
      {forms.length > 0 ? (
        <ul>
          {forms.map(form => (
            <li key={form._id}>
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
              <hr />
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
