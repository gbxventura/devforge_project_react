import styles from './Admin.module.css';
import Header from '../../Components/Headeradm/index'
import Tabela from '../../Components/Projetos/index'

const Admin = () => {


  return (
    <div className={styles.admPage}>
      <Header />
      <Tabela />
    </div>
  );
};

export default Admin;
