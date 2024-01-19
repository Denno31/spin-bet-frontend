import { FilterObject, Match } from '../types/types';

export const getActiveItem = (data: Match[], id: string) => {
    return data.find((item) => item.id === id);
};

export const extractCountryCodeFromCountryName = (countryName: string) => {
    return countryName.substring(0, 3).toLocaleLowerCase();
};

export const generateFilters = (matches: Match[]): { filter: string; count: number }[] => {
    const allCount = matches.length;

    const resultCount = matches.filter((match) => match.status.type === 'finished').length;

    const liveCount = matches.filter((match) => match.status.type === 'inprogress').length;

    const upcomingCount = matches.filter((match) => match.status.type === 'notstarted').length;

    const filters = [
        { filter: 'All', count: allCount },
        { filter: 'Result', count: resultCount },
        { filter: 'Live', count: liveCount },
        { filter: 'Upcoming', count: upcomingCount },
    ];

    return filters;
};

export const getFilteredMatches = (matches: Match[], filterObject: FilterObject) => {
    const { filter } = filterObject;
    switch (filter) {
        case 'Result':
            return matches.filter((match) => match.status.type === 'finished');
        case 'Live':
            return matches.filter((match) => match.status.type === 'inprogress');
        case 'Upcoming':
            return matches.filter((match) => match.status.type === 'notstarted');
        default:
            return matches;
    }
};

export const getConicGradientPercentage = (liveStatusType: string) => {
    switch (liveStatusType) {
        case 'inprogress':
            // calculate percentage
            return (Number(liveStatusType) * 360) / 90;
        case 'finished':
            return 360;
        default:
            return 0;
    }
};
