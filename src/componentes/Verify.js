import styles from './Verify.module.css'
import img from '../imgs/verify.svg'


function Verify() {
  return (
    <div className={styles.verifycss}>
        <img src={img} alt="erro"/>
        <p> Faça o Check-up de privacidade </p>
    </div>      
  );
}

export default Verify