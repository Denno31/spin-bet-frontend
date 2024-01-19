import { format } from 'date-fns';
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
        { filter: 'Live', count: liveCount },
        { filter: 'Result', count: resultCount },
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

export const getConicGradientDeg = (liveStatusType: string | undefined, liveStatus: string | undefined) => {
    switch (liveStatusType) {
        case 'inprogress':
            return (Number(liveStatus) * 360) / 90;
        case 'finished':
            return 360;
        default:
            return 0;
    }
};

export const getTextToStatusToShowOnScoreboard = (match: Match | null | undefined) => {
    console.log(match);
    if (!match) return '';
    const liveStatus = parseInt(match.liveStatus, 10);
    if (!isNaN(liveStatus) && liveStatus >= 0) {
        return 'LIVE';
    } else if (match.status.type === 'finished') {
        return 'ENDED';
    } else if (match.liveStatus.toLowerCase() === 'cancelled') {
        return 'CANCELLED';
    } else {
        return '';
    }
};
