import { MainContext } from '@/contexts/MainContext';
import { useContext } from 'react';
import styles from '../styles/Page.module.css'
import { AiOutlineStar, AiOutlineCopy } from "react-icons/ai";

export default function Page() {

    const { currentList, changeList } = useContext(MainContext);

    // function copyNote(text){
    //     const el = document.createElement('textarea');
    //     el.value = text;
    //     document.body.appendChild(el);
    //     el.select();
    //     document.execCommand('copy');
    //     document.body.removeChild(el);
    // }

    return (
        <div className={styles.container} id="pageModal">
            {
                currentList.map((item, index) => {
                    return (
                        <div key={index} className={styles.tips}>
                            <div>
                                <span>
                                    {item.code}
                                </span>
                                <AiOutlineStar/>
                            </div>
                            <div>
                                <span>
                                    {item.description}
                                </span>
                                <AiOutlineCopy/>
                            </div>
                        </div>
                )})                
            }
            <div className={styles.close} onClick={() => changeList(-1)}>X</div>
        </div>
    );
}