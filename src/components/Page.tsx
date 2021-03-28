import { MainContext } from '@/contexts/MainContext';
import { useContext, useEffect } from 'react';
import styles from '../styles/Page.module.css'


export default function Page() {

    const { currentList, changeList } = useContext(MainContext);

    return (
        <div className={styles.container} id="pageModal">
            {
                currentList.map((item, index) => {
                    return (
                        <div key={index} className={styles.tips}>
                            <div>
                                {item.description}
                                <input/>
                            </div>
                            <div>
                                {item.code}
                                <button></button>
                            </div>
                        </div>
                )})                
            }
            <div className={styles.close} onClick={() => changeList(-1)}>X</div>
        </div>
    );
}