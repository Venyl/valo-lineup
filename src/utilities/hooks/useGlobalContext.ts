import { createContext, useContext } from 'react';

export interface contextType {
    agent?: string;
    setAgent?: React.Dispatch<React.SetStateAction<string>>;
    selectedMap?: string;
    setSelectedMap?: React.Dispatch<React.SetStateAction<string>>;
}

export const MyGlobalContext = createContext<contextType>({});
export const useGlobalContext = () => useContext(MyGlobalContext);
