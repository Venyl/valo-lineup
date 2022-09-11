import { useLocation } from 'react-router-dom';

export default function useMap() {
    const location = useLocation();
    const selectedMap = location.pathname.replace('/', '');
    return selectedMap;
}
