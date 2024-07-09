import React, { useState} from 'react';
import Headeradm from "../../Components/Headeradm";
import Projetos from "../../Components/Projetos";
import Orcamento from "../../Components/Orcamento"
import styles from "./Admin.module.css";

const Admin = () => {
  const [dados, setDados] = useState([]);

  const adicionarDado = (dado) => {
    setDados([...dados, dado]);
  };

  return (
    <div className="Admpage">
      <Headeradm />
      <Projetos  dados={dados} />
    </div>
  );
};

export default Admin;
