import { useContext } from 'react';
import { AgentContext } from '../App';

interface props {
    agentName: string;
}

export function Agent({ agentName }: props) {
    const { setAgent } = useContext(AgentContext);
    return (
        <button className="agent-button" onClick={() => setAgent!(agentName)}>
            <img
                className="w-16 md:w-24"
                src={`/src/assets/agents/${agentName === 'KAY/O' ? 'KAYO' : agentName}.webp`}
                alt={agentName}
            />
            <h2>{agentName}</h2>
        </button>
    );
}
