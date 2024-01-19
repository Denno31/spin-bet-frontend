import { Match } from '../types/match';

export const getActiveItem = (data: Match[], id: string) => {
    return data.find((item) => item.id === id);
};

export const extractCountryCodeFromCountryName = (countryName: string) => {
    return countryName.substring(0, 3).toLocaleLowerCase();
};
