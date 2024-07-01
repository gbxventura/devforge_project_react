import React from 'react';
import styles from './Orcamento.module.css';

const Orcamento = () => {
    return (
        <section className={styles.contact} id='contact'>
            <div className={styles.contact_text}>
                <h2 className={styles.h2_orcamento}>Entre em <span>Contato</span></h2>
                <h4>Nossos Profissionais estão prontos para lhe atender</h4>
                <p>Equipe especializada em Projetos Full Stack, Design e Marketing Multimidia</p>
                <ul className={styles.list2}>
                    <li><a href="#"> +55 11 9999-9999</a></li>
                    <li><a href="#"> +55 11 9999-9999</a></li>
                    <li><a href="#">contato@devforge.dev.br</a></li>
                </ul>
                <div className={styles.contact_icons}>
                    <a href="#"><i className="bx bxl-facebook"></i></a>
                    <a href="#"><i className="bx bxl-instagram-alt"></i></a>
                </div>
            </div>
            <div className={styles.contact_form}>
                <form action="" method="post">
                    <input type="text" name="name" placeholder="Digite seu Nome" required />
                    <input type="text" name="company" placeholder="Nome da Empresa" required />
                    <input type="email" name="email" placeholder="Digite seu E-mail" required />
                    <input type="text" name="cargo" placeholder="Digite seu Cargo" required />
                    <input type="text" name="phone" placeholder="Digite a Quantidade de Funcionarios" required />
                    <select required>
                        <option value="">Quem faz o mkt digital para sua empresa?</option>
                        <option value="interno">Equipe Interna</option>
                        <option value="externo">Agência Externa</option>
                    </select>
                    <textarea name="message" cols="35" rows="10" placeholder="Como podemos ajudar" required></textarea>
                    <input type="hidden" name="redirectTo" value="" />
                    <input type="submit" value="Enviar" className={styles.submit} />
                </form>
            </div>
        </section>
    );
}

export default Orcamento;
