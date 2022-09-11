import { useContext } from 'react';
import { useGlobalContext } from '../utilities/hooks/useGlobalContext';

interface props {
    agentName: string;
}

export function Agent({ agentName }: props) {
    const { setAgent } = useGlobalContext();
    const agentImgs = {
        'KAY/O': 'https://static.wikia.nocookie.net/valorant/images/f/f0/KAYO_icon.png',
        Fade: 'https://valorantinfo.com/images/pl/fade_valorant_icon_2351.webp',
        Viper: 'https://static.wikia.nocookie.net/valorant/images/5/5f/Viper_icon.png',
        Sova: 'https://static.wikia.nocookie.net/valorant/images/4/49/Sova_icon.png',
    };
    return (
        <button className="agent-button" onClick={() => setAgent!(agentName)}>
            <img
                className="w-16 md:w-24 rounded-md"
                src={agentImgs[agentName as keyof typeof agentImgs]}
                alt={agentName}
            />
            <h2>{agentName}</h2>
        </button>
    );
}
