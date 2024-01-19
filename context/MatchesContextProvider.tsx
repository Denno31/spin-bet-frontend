import { ReactNode, createContext, useState } from 'react';
import matchesData from '../data.json';

import { generateFilters } from '../utils/utils';
import { FilterObject, Match } from '../types/types';

interface Props {
    children: ReactNode;
}

const matchFilters = generateFilters(matchesData);

const initialState = {
    matches: matchesData,
    handleSetMatchesData: () => {},
    activeMatch: null,
    handleSetActiveMatch: () => {},
    handleSetActiveFilter: () => {},
    filters: matchFilters,
    activeFilter: matchFilters[0],
};

export const MatchesContext = createContext<{
    matches: Match[];
    handleSetMatchesData: (data: Match[]) => void;
    activeMatch: string | null;
    handleSetActiveMatch: (id: string) => void;
    filters: FilterObject[];
    activeFilter: FilterObject;
    handleSetActiveFilter: (filter: FilterObject) => void;
}>(initialState);

export const MatchesContextProvider = ({ children }: Props) => {
    const [matches, setMatchesData] = useState<Match[]>(matchesData);
    const [activeMatch, setActiveMatch] = useState<string | null>(matchesData[0].id);
    const [activeFilter, setActiveFilter] = useState(initialState.activeFilter);

    const handleSetMatchesData = (data: Match[]) => {
        setMatchesData(data);
    };
    const handleSetActiveMatch = (id: string) => {
        setActiveMatch(id);
    };

    const handleSetActiveFilter = (filter: FilterObject) => {
        setActiveFilter(filter);
    };

    const contextValue = {
        matches,
        handleSetMatchesData,
        activeMatch,
        handleSetActiveMatch,
        filters: initialState.filters,
        activeFilter,
        handleSetActiveFilter,
    };

    return <MatchesContext.Provider value={contextValue}>{children}</MatchesContext.Provider>;
};
