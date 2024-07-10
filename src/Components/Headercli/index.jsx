import styles from './Headercli.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const HeaderCli = () => {
    return (
        <header className={styles.headerCliente}> 
            <div className={styles.headerContent}>
                <a href="./admin"><i class="bi bi-arrow-left"></i></a>
                <div className={styles.right}>
                    <i className="bi bi-bell"></i>
                    <i className="bi bi-chat-dots"></i>
                    <i className="bi bi-person"></i>
                </div>
            </div>
        </header>
    );
};

export default HeaderCli;
