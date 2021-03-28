import styles from '../styles/Menu.module.css'
import { MainContext } from '../contexts/MainContext'
import { useContext } from 'react';

export default function Menu(){
    const { icons, changeList } = useContext(MainContext);

    return(
        <div className={styles.container} id="menu">
            {icons.map((item, index) => {
                return <div key={index} style={{backgroundColor: item.background}} className={styles.icon} title={item.name} onClick={() => { changeList(item.id) }}><img src={item.logo}/></div>
            })}
        </div>
    );
}