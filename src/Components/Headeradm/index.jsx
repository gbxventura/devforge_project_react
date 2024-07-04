import { useRef } from 'react'
import styles from './Headeradm.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Headeradm = () => {

    // const inputRef = useRef(null);
    // const handleSearchClick = () => {
    //     if (inputRef.current) {
    //         inputRef.current.focus();
    //     }
    // };

    return (
        <header className={styles.headerAdm}> 
            <form action="">
                <div className={styles.search} >
                    <div className={styles.lupa}><i class="bi bi-search"></i></div>
                    <div className={styles.input}>
                    <input type="text" name='ipt-adm' id='inpt-adm' placeholder='Pequise o projeto.'/>
                    </div>
                </div>
            </form>
            
            
            <div className={styles.right}>
                <div className={styles.notification}><i class="bi bi-bell"></i></div>

                <div className={styles.chat}><i class="bi bi-chat-dots"></i></div>

                <div className={styles.admperfil}>
                    <div className={styles.menun}><i class="bi bi-person"></i></div>
                    <div className={styles.dropdown}>
                        <a href="">Nome</a>
                        <a href="#"><i class="bi bi-key-fill">Mudar a senha</i></a>
                        <a href="#"><i class="bi bi-door-open">Sair</i></a>
                    </div>
                </div>
            </div>
            
        </header>
    );
};

export default Headeradm;
