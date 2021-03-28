import styles from '../styles/Header.module.css'
import { BiSearchAlt } from "react-icons/bi";

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <strong>Cheat Sheets</strong>
            </div>
            <div className={styles.search}>
                <input/>
                <BiSearchAlt size={20} />
            </div>
        </div>
    );
}