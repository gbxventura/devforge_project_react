import React from 'react';
import styles from './Orcamento.module.css';

const Orcamento = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.contact_text}>
                <h2 style={styles.h2_orcamento}>Entre em <span>Contato</span></h2>
                <h4>Nossos Profissionais estão prontos para lhe atender</h4>
                <p>Equipe especializada em Projetos Full Stack, Design e Marketing Multimidia</p>
                <div className={styles.list}>
                    <li><a href="#"> +55 11 9999-999</a></li>
                    <li><a href="#"> +55 11 9999-999</a></li>
                    <li><a href="#">contato@devforge.dev.br</a></li>
                </div>
                <div className={styles.contact_icons}>
                    <a href="#"><i class="bx bxl-facebook"></i></a>
                    <a href="#"><i class="bx bxl-instagram-alt"></i></a>
                </div>
            </div>
            <div className="contact_form">
                <form action="" method="post">
                    <input type="name" name="name" placeholder="Digite seu Nome" required />
                    <input type="email" name="email" placeholder="Nome da Empresa" required />
                    <input type="email" name="email" placeholder="Digite seu E-mail" required />
                    <input type="text" name="cargo" placeholder="Digite seu Cargo" required />
                    <input type="text" name="phone" placeholder="Digite a Quantidade de Funcionarios" required />
                    <select required id="select">
                        <option value="">Quem faz o mkt digital para sua empresa?</option>
                        <option value="interno">Equipe Interna</option>
                        <option value="externo">Agência Externa</option>
                    </select>
                    <textarea name="message" id="" cols="35" rows="10" placeholder="Como podemos ajudar" required></textarea>
                    <input type="hidden" name="redirectTo" value="" />
                    <input type="submit" value="Enviar" class="submit" required />
                </form>
            </div>
        </section >
    );
}

export default Orcamento;
