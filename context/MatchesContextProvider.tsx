import { ReactNode, createContext, useMemo, useState } from 'react';
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
    activeMatch: matchesData[0],
    handleSetActiveMatch: () => {},
    handleSetActiveFilter: () => {},
    filters: matchFilters,
    activeFilter: matchFilters[0],
};

export const MatchesContext = createContext<{
    matches: Match[];
    handleSetMatchesData: (data: Match[]) => void;
    activeMatch: Match;
    handleSetActiveMatch: (match: Match) => void;
    filters: FilterObject[];
    activeFilter: FilterObject;
    handleSetActiveFilter: (filter: FilterObject) => void;
}>(initialState);

export const MatchesContextProvider = ({ children }: Props) => {
    const [matches, setMatchesData] = useState<Match[]>(matchesData);
    const [activeMatch, setActiveMatch] = useState<Match>(matchesData[0]);
    const [activeFilter, setActiveFilter] = useState(initialState.activeFilter);

    const handleSetMatchesData = (data: Match[]) => {
        setMatchesData(data);
    };
    const handleSetActiveMatch = (match: Match) => {
        setActiveMatch(match);
    };

    const handleSetActiveFilter = (filter: FilterObject) => {
        setActiveFilter(filter);
    };

    const contextValue = useMemo(
        () => ({
            matches,
            handleSetMatchesData,
            activeMatch,
            handleSetActiveMatch,
            filters: generateFilters(matchesData),
            activeFilter,
            handleSetActiveFilter,
        }),
        [matches, activeMatch, activeFilter]
    );

    return <MatchesContext.Provider value={contextValue}>{children}</MatchesContext.Provider>;
};
