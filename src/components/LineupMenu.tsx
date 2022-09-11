import { createContext, useContext, useEffect, useState } from 'react';
import LineupVideo from './LineupVideo';
import useMap from '../utilities/hooks/useMap';
import LineupList from './LineupList';
import { capitalize } from '../utilities/capitalize';
import Lineups from '../utilities/interfaces/Lineups';
import { AgentContext } from '../App';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface contextType {
    vidId?: string;
    setVidId?: React.Dispatch<React.SetStateAction<string>>;
}
export const VidIdContext = createContext<contextType>({});

export default function LineupMenu() {
    const { data, status } = useQuery(['lineups'], async () => {
        const res = await axios.get('https://venyl.github.io/valo-lineup-api/lineupList.json');
        const data = await res.data;
        return data;
    });

    const { agent } = useContext(AgentContext);
    const [vidId, setVidId] = useState('');
    const selectedMap = useMap();

    useEffect(() => {
        return () => {
            setVidId('');
        };
    }, []);

    if (status !== 'success') return <></>;
    const agentLineups = data![agent as keyof typeof data];
    const lineups: Lineups = agentLineups[capitalize(selectedMap) as keyof typeof agentLineups];

    return (
        <div className="grow flex flex-col-reverse self-stretch p-4 gap-4 md:flex-row">
            <VidIdContext.Provider value={{ vidId, setVidId }}>
                <div className="grow flex flex-col justify-end">
                    <LineupVideo vidId={vidId} />
                </div>
                <LineupList {...lineups} />
            </VidIdContext.Provider>
        </div>
    );
}
