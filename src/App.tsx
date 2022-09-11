import { useState } from 'react';
import AgentSelect from './components/AgentSelect';
import Header from './components/Header';
import LineupMenu from './components/LineupMenu';
import { MyGlobalContext } from './utilities/hooks/useGlobalContext';

interface Lineup {
    agent: string;
}

export interface contextType {
    agent?: string;
    setAgent?: React.Dispatch<React.SetStateAction<string>>;
    selectedMap?: string;
    setSelectedMap?: React.Dispatch<React.SetStateAction<string>>;
}

export function App() {
    const [agent, setAgent] = useState<string>('');
    const [selectedMap, setSelectedMap] = useState<string>('');

    return (
        <div className="App max-h-screen">
            <div className="main">
                <MyGlobalContext.Provider value={{ agent, setAgent, selectedMap, setSelectedMap }}>
                    {agent ? <Header /> : <h1 className="text-center my-4">ValoLineup</h1>}
                    <h2 className="text-base my-8 md:text-xl">{agent}</h2>
                    {!agent && <AgentSelect />}
                    {agent && <LineupMenu />}
                </MyGlobalContext.Provider>
            </div>
        </div>
    );
}
