import { ReactNode, createContext, useState } from 'react';
import matchesData from '../data.json';
import { Match } from '../types/match';

interface Props {
    children: ReactNode;
}
const initialState = {
    matches: matchesData,
    handleSetMatchesData: () => {},
    activeMatch: null,
    handleSetActiveMatch: () => {},
};

export const MatchesContext = createContext<{
    matches: Match[];
    handleSetMatchesData: (data: Match[]) => void;
    activeMatch: string | null;
    handleSetActiveMatch: (id: string) => void;
}>(initialState);

export const MatchesContextProvider = ({ children }: Props) => {
    const [matches, setMatchesData] = useState<Match[]>(matchesData);
    const [activeMatch, setActiveMatch] = useState<string | null>(matchesData[0].id);

    const handleSetMatchesData = (data: Match[]) => {
        setMatchesData(data);
    };
    const handleSetActiveMatch = (id: string) => {
        setActiveMatch(id);
    };
    const contextValue = {
        matches,
        handleSetMatchesData,
        activeMatch,
        handleSetActiveMatch,
    };

    return <MatchesContext.Provider value={contextValue}>{children}</MatchesContext.Provider>;
};
