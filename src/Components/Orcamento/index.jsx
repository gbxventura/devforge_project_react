import { useState } from 'react';
import styles from './Orcamento.module.css';
import { toast } from 'react-toastify';

const Orcamento = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    cargo: '',
    phone: '',
    mkt: '',
    message: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success('Formulário enviado com sucesso');
        setFormData({
          name: '',
          company: '',
          email: '',
          cargo: '',
          phone: '',
          mkt: '',
          message: '',
        });
      } else {
        toast.error('Erro ao enviar o formulário');
      }
    } catch (error) {
      toast.error('Erro ao enviar o formulário');
    }
  };

  return (
    <section className={styles.contact} id='contact'>
      <div className={styles.contact_text}>
        <h2 className={styles.h2_orcamento}>
          Entre em <span>contato</span>
        </h2>
        <h4>Nossos profissionais estão prontos para lhe atender</h4>
        <p>
          Equipe especializada em projetos Full Stack, Design e Marketing
          Multimídia
        </p>
        <ul className={styles.list2}>
          <li>+55 11 96819-5728</li>
          <li> +55 11 91651-6413</li>
          <li>devforge.contato@gmail.com</li>
        </ul>
        <div className={styles.contact_icons}>
          <a href='#'>
            <i className='bx bxl-facebook'></i>
          </a>
          <a href='#'>
            <i className='bx bxl-instagram-alt'></i>
          </a>
        </div>
      </div>
      <div className={styles.contact_form}>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Digite seu Nome'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='company'
            placeholder='Nome da Empresa'
            value={formData.company}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Digite seu E-mail'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='cargo'
            placeholder='Digite seu Cargo'
            value={formData.cargo}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='phone'
            placeholder='Digite seu telefone'
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select
            name='mkt'
            value={formData.mkt}
            onChange={handleChange}
            required
          >
            <option value=''>Quem faz o mkt digital para sua empresa?</option>
            <option value='interno'>Equipe Interna</option>
            <option value='externo'>Agência Externa</option>
          </select>
          <textarea
            name='message'
            cols='35'
            rows='10'
            placeholder='Como podemos ajudar'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <input type='submit' value='Enviar' className={styles.submit} />
        </form>
      </div>
    </section>
  );
};

export default Orcamento;
