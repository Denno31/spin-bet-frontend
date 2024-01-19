export type Match = {
    id: string;
    name: string;
    competitionId: string;
    competition: string;
    countryId: string;
    country: string;
    timestamp: number;
    date: string;
    time: string;
    status: {
        code: number;
        type: 'finished' | 'inprogress' | 'notstarted' | string; // Specify the possible values here
    };
    round?: {
        round?: number | undefined;
    };
    homeTeam: {
        id: number;
        name: string;
        slug: string;
        gender: string | null;
        subTeams: any[]; // Adjust as needed
    };
    awayTeam: {
        id: number;
        name: string;
        slug: string;
        gender: string;
        subTeams: any[]; // Adjust as needed
    };
    homeScore: {
        current?: number | undefined;
        period1?: number;
        normaltime?: number | undefined;
    };
    awayScore: {
        current?: number | undefined;
        period1?: number;
        normaltime?: number;
    };
    liveStatus: string;
};
