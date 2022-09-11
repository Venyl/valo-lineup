import { useGlobalContext } from '../utilities/hooks/useGlobalContext';
import { MapLink } from './MapLink';

export default function Header() {
    const { setAgent } = useGlobalContext();
    const valoMaps = ['ascent', 'bind', 'breeze', 'fracture', 'icebox', 'haven', 'pearl'];
    const { setSelectedMap } = useGlobalContext();

    return (
        <header className="header text-lg md:text-3xl">
            <a
                className="space-y-8"
                onClick={() => {
                    setSelectedMap!('');
                    setAgent!('');
                }}
            >
                Agents
            </a>
            {valoMaps.map((currMap, idx) => (
                <MapLink map={currMap} key={idx} />
            ))}
        </header>
    );
}
