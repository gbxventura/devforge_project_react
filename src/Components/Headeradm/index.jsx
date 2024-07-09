import styles from './Headeradm.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Headeradm = () => {

    return (
        <header className={styles.headerAdm}> 
            <form action="">
                <div className={styles.search} >
                    <div className={styles.lupa}><i className="bi bi-search"></i></div>
                    <div className={styles.input}>
                    <input type="text" name='ipt-adm' id='inpt-adm' placeholder='Pequise o projeto.'/>
                    </div>
                </div>
            </form>
            
            
            <div className={styles.right}>
                <div className={styles.notification}><i className="bi bi-bell"></i></div>

                <div className={styles.chat}><i className="bi bi-chat-dots"></i></div>

                <div className={styles.admperfil}>
                    <div className={styles.menun}><i className="bi bi-person"></i></div>
                    <div className={styles.dropdown}>
                        <a href=""><i className="bi bi-person-fill-gear">Nome</i></a>
                        <a href="#"><i className="bi bi-key-fill">Mudar a senha</i></a>
                        <a href="#"><i className="bi bi-door-open">Sair</i></a>
                    </div>
                </div>
            </div>
            
        </header>
    );
};

export default Headeradm;
