import styles from './Admin.module.css';

import FormList from '../../Components/FormList/FormList';
// import Tabela from '../../Components/Projetos/index';

const Admin = () => {
  return (
    <div className={styles.admPage}>
      {/* <Tabela /> */}
      <FormList />
    </div>
  );
};

export default Admin;
