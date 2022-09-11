import { Link, useLocation } from 'react-router-dom';
import { capitalize } from '../utilities/capitalize';
import useMap from '../utilities/hooks/useMap';

interface props {
    map: string;
}

export function MapLink({ map }: props) {
    const selectedMap = useMap();
    return (
        <Link className={String(selectedMap === map && 'selected')} to={map}>
            {capitalize(map)}
        </Link>
    );
}
