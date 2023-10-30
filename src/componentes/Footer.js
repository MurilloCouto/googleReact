import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.footercss}>
            <p>Brasil</p>
        </div>
        <div className={styles.footercss}>
            <p>Sobre</p>
            <p>Puclicidade</p>
            <p>Negócios</p>
            <p>Como funciona a Pesquisa</p>
            <div className={styles.p2}>
                <p>Privacidade</p>
            <p>Termos</p>
            <p>Configurações</p>
            </div>
                        
        </div> 
    </div>         
  );
}

export default Footer