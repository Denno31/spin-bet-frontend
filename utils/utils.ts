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
    console.log(liveStatusType, liveStatus);
    switch (liveStatusType) {
        case 'inprogress':
            const statusValue = liveStatus === 'HT' ? 45 : liveStatus?.replace(/[^0-9|.]/, '');
            return (Number(statusValue) * 360) / 90;
        case 'finished':
            return 360;
        default:
            return 0;
    }
};

export const getTextToStatusToShowOnScoreboard = (match: Match | null | undefined) => {
    if (!match) return '';
    const liveStatus = parseInt(match.liveStatus, 10);
    if (!isNaN(liveStatus) && liveStatus >= 0) {
        return 'LIVE';
    } else if (match.status.type === 'finished') {
        return 'ENDED';
    } else if (match.liveStatus.toLowerCase() === 'cancelled') {
        return 'CANCELLED';
    } else if (!isNaN(match.timestamp)) {
        return getDateFormatted(match.timestamp);
    } else {
        return '';
    }
};

const getDateFormatted = (date?: number) => {
    const dateObj = new Date(date || '');
    const day = dateObj.getDate();
    let formattedDaySuffix;

    if ((day > 3 && day < 21) || day % 10 > 3) {
        formattedDaySuffix = 'TH';
    } else {
        formattedDaySuffix = ['st', 'nd', 'rd'][(day % 10) - 1];
    }

    const formattedDay = day + formattedDaySuffix;
    const formattedMonth = dateObj.toLocaleString('en-US', { month: 'short' });
    const formattedDate = `${formattedMonth.toUpperCase()} ${formattedDay}`;

    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    return `${formattedDate} ${formattedTime}`;
};
