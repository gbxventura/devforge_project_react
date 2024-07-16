import { useState } from 'react';
import styles from './Admin.module.css';
import Header from '../../Components/Headeradm/index';
import FormList from '../../Components/FormList/FormList';

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={styles.admPage}>
      <Header setSearchTerm={setSearchTerm} />
      <FormList searchTerm={searchTerm} />
    </div>
  );
};

export default Admin;
