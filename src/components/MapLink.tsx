import { useContext } from 'react';
import { capitalize } from '../utilities/capitalize';
import { useGlobalContext } from '../utilities/hooks/useGlobalContext';

interface props {
    map: string;
}

export function MapLink({ map }: props) {
    const { selectedMap, setSelectedMap } = useGlobalContext();
    return (
        <a
            onClick={() => setSelectedMap!(map)}
            className={`${String(selectedMap === map && 'selected')} cursor-pointer`}
        >
            {capitalize(map)}
        </a>
    );
}
