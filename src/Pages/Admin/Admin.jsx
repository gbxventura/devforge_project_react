import styles from './Admin.module.css';
import Header from '../../Components/Headeradm/index';
import FormList from '../../Components/FormList/FormList';
// import Tabela from '../../Components/Projetos/index';

const Admin = () => {
  return (
    <div className={styles.admPage}>
      <Header />
      <FormList />
    </div>
  );
};

export default Admin;
