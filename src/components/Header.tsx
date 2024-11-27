import styles from './Header.module.css';
import LogoTitle from '../../src/assets/Logo.svg';

function Header() {    
    return (
        <header className={styles.container}>
            <img
                className={styles.logo}
                src={LogoTitle}
                alt="logotipo Todo" />
        </header>
    );
}

export default Header;