import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AgentContext } from '../App';
import { MapLink } from './MapLink';

export default function Header() {
    const { setAgent } = useContext(AgentContext);
    const valoMaps = ['ascent', 'bind', 'breeze', 'fracture', 'icebox', 'haven', 'pearl'];

    return (
        <header className="header text-lg md:text-3xl">
            <Link
                className="space-y-8"
                onClick={() => {
                    setAgent!('');
                }}
                to="/"
            >
                Agents
            </Link>
            {valoMaps.map((currMap, idx) => (
                <MapLink map={currMap} key={idx} />
            ))}
        </header>
    );
}
