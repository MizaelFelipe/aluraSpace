import Cabecalho from "../../componentes/cabecalho";
import banner from  './banner.png'
import Menu from "../../componentes/Menu";
import styles from './PaginaInicial.module.scss';

export default function PaginaInicial() {
    return (
        <>
        <Cabecalho/>
        <main>
            <section className={styles.principal}>
            <Menu/>
            <div className={styles.principal__imagem}>
                <h1>A galeria mais completa do espaco.</h1>
                <img src={banner} alt="Imagem da terra vinda do espaco" />
            </div>
            </section>
        </main>
        
        </>
        

        
    )
}