import styles from './Nav.module.css'
import img from '../imgs/nav.svg'
import icon from '../imgs/iconeMenu.svg'

function Nav() {
  return (
    <div className={styles.navcss}>
        <p>Gmail</p>
        <p>Imagens</p>
        <img src={icon} />
        <img src={img} alt="erro"/>
    </div>      
  );
}

export default Nav
