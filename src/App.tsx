import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import { createContext, useState } from 'react';
import AgentSelect from './components/AgentSelect';
import Header from './components/Header';
import LineupMenu from './components/LineupMenu';

interface Lineup {
    agent: string;
}

interface contextType {
    agent?: string;
    setAgent?: React.Dispatch<React.SetStateAction<string>>;
}

export const AgentContext = createContext<contextType>({});

export function App() {
    const [agent, setAgent] = useState<string>('');
    const client = new QueryClient();

    return (
        <div className="App max-h-screen">
            <div className="main md:p-8">
                <QueryClientProvider client={client}>
                    <AgentContext.Provider value={{ agent, setAgent }}>
                        {agent ? <Header /> : <h1 className="text-center my-4">ValoLineup</h1>}
                        <h2 className="text-base my-8 md:text-xl">{agent}</h2>
                        {!agent && <AgentSelect />}
                        {agent && <LineupMenu />}
                    </AgentContext.Provider>
                </QueryClientProvider>
            </div>
        </div>
    );
}
