import styles from './Projetos.module.css';

const Projetos = () => {
    return (
        <div className={styles.tabelaInt}>
            <section className={styles.table__header}>
                <h1>Clientes</h1>
            </section>

            <section className={styles.table__body}>
                <table>
                    <thead className={styles.titulotb}>
                        <tr>
                            <th>Nome</th>
                            <th>Empresa</th>
                            <th>Email</th>
                            <th>Cargo</th>
                            <th>Quantidade de Funcionários</th>
                            <th>MKT digital</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                
                    <tbody>
                        <tr>
                            <td>Eduardo</td>
                            <td>Google</td>
                            <td>eduardo@gmail.com</td>
                            <td>CEO</td>
                            <td>100</td>
                            <td>Interno</td>
                            <td className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error tenetur, beatae eveniet eaque rem consequuntur nobis voluptatem voluptas quas voluptates quisquam illum quia explicabo molestiae est, officiis aperiam. Omnis.</td>
                        </tr>
                        <tr>
                            <td>Eduardo</td>
                            <td>Google</td>
                            <td>eduardo@gmail.com</td>
                            <td>CEO</td>
                            <td>100</td>
                            <td>Interno</td>
                            <td className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error tenetur, beatae eveniet eaque rem consequuntur nobis voluptatem voluptas quas voluptates quisquam illum quia explicabo molestiae est, officiis aperiam. Omnis.</td>
                        </tr>
                        <tr>
                            <td>Eduardo</td>
                            <td>Google</td>
                            <td>eduardo@gmail.com</td>
                            <td>CEO</td>
                            <td>100</td>
                            <td>Interno</td>
                            <td className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error tenetur, beatae eveniet eaque rem consequuntur nobis voluptatem voluptas quas voluptates quisquam illum quia explicabo molestiae est, officiis aperiam. Omnis.</td>
                        </tr>
                        <tr>
                            <td>Eduardo</td>
                            <td>Google</td>
                            <td>eduardo@gmail.com</td>
                            <td>CEO</td>
                            <td>100</td>
                            <td>Interno</td>
                            <td className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error tenetur, beatae eveniet eaque rem consequuntur nobis voluptatem voluptas quas voluptates quisquam illum quia explicabo molestiae est, officiis aperiam. Omnis.</td>
                        </tr>
                        
                    </tbody>
                
                </table>
            </section>
        </div>
    );
};

export default Projetos;
