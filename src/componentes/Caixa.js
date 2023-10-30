import styles from './Caixa.module.css'
import lupa from '../imgs/lupa.svg'
import teclado from '../imgs/teclado.svg'
import micro from '../imgs/micro.svg'


function Caixa() {
  return (
    <div className={styles.caixacss}>
        <input></input>
        <img class="lupa" className={styles.lupa} src={lupa}/>
        <img class="teclado" className={styles.teclado} src={teclado}/>
        <img class="micro" className={styles.micro} src={micro}/>
    </div>      
  );
}

export default Caixa
