import { createContext, ReactNode, useEffect, useState } from 'react';
import jsonIcons from '../../public/books.json'
import jsonCheats from '../../public/cheats.json'

export const MainContext = createContext({} as GlobalContent);

interface cheatType{
    description: string;
    code: string;
    save: boolean;
    bookId: number;
}

interface ElementType{
    id: number;
    name: string;
    background: string;
    logo: string;
}

interface GlobalContent {
    icons: ElementType[];
    currentList: cheatType[];
    changeList: (id: number) => void;
}

interface ContextProviderProps{
    children: ReactNode;
}

export function ContextProvider({ children }: ContextProviderProps){

    const [currentList, setCurrentList] = useState<cheatType[]>([]);
    const icons = jsonIcons;

    function changeList(id: number){
        var newList = jsonCheats.filter(x => x.bookId == id);
        setCurrentList(newList);
        if(id == -1){
            document.querySelector('#pageModal')?.setAttribute('style', 'transform: scale(0)');
            document.querySelector('#menu')?.setAttribute('style', 'opacity: 1');
        }else{
            document.querySelector('#pageModal')?.setAttribute('style', 'transform: scale(1)');
            document.querySelector('#menu')?.setAttribute('style', 'opacity: 0');
        }
    }

    return(
        <MainContext.Provider value={{ icons, currentList, changeList }}>
            {children}
        </MainContext.Provider>
    );
}