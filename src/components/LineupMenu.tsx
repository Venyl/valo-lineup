import { createContext, useEffect, useState } from 'react';
import LineupVideo from './LineupVideo';
import data from '../utilities/lineupList.json';
import LineupList from './LineupList';
import { capitalize } from '../utilities/capitalize';
import Lineups from '../utilities/interfaces/Lineups';
import { useGlobalContext } from '../utilities/hooks/useGlobalContext';

interface contextType {
    vidId?: string;
    setVidId?: React.Dispatch<React.SetStateAction<string>>;
}
export const VidIdContext = createContext<contextType>({});

export default function LineupMenu() {
    const { agent, selectedMap } = useGlobalContext();
    const [vidId, setVidId] = useState<string>('');

    useEffect(() => {
        return () => {
            setVidId('');
        };
    }, []);

    const agentLineups = data[agent as keyof typeof data];
    const lineups: Lineups = agentLineups[capitalize(selectedMap!) as keyof typeof agentLineups];

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
