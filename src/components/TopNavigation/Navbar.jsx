import styles from './Navbar.module.css';



export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <a href="#about">About me</a>
                </li>
                <li>
                    <a href="#experiences">Experiencies</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact me</a>
                </li>
            </ul>
        </nav>
    );
    }