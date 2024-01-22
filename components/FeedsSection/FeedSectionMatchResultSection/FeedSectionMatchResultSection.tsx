import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { FlexBox } from '../../Shared/FlexBox/FlexBox';
import { MatchProgress } from '../../Shared/MatchProgress/MatchProgress';
import { Match } from '../../../types/types';
import { getTextToStatusToShowOnScoreboard } from '../../../utils/utils';

interface Props {
    match: Match | null | undefined;
    isScoreCardLoaded: boolean;
    handleSetIsScoreCardLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScoreBoardWrapper = styled.div`
    background-color: ${({ theme: { color } }) => color.spinDarkGray};
    text-align: center;
    color: ${({ theme: { color } }) => color.spinBetWhite};
    padding: 1.2rem 0;
    & > div {
        padding: 0.4rem;
        @media (max-width: ${({ theme: { screen } }) => screen.md}) {
            padding: 0.2rem 0;
        }
    }
    @media (max-width: ${({ theme: { screen } }) => screen.md}) {
        padding: 0.5rem 0;
    }
`;

const ScoreBoardMatchStatus = styled.p<{ matchStatus: string }>`
    margin-top: 10px;
    color: ${({ theme: { color }, matchStatus }) => {
        switch (matchStatus) {
            case 'ENDED':
                return color.spinGreen;
            case 'LIVE':
                return color.spinBetYellow;
            case 'CANCELLED':
                return color.spinBetRed;
            default:
                return color.default;
        }
    }};
    @media (max-width: ${({ theme: { screen } }) => screen.md}) {
        margin-top: 8px;
    }
`;

const ScoreBoardCountry = styled.p`
    font: medium;
    font-weight: 300;
`;

const StyledH1 = styled.h1`
    font-size: 2rem;
    font-weight: 350;
    margin: 12px 0;
`;

const MatchProgressContainer = styled(FlexBox)`
    margin: 0 auto;
    width: 90%;
    & > p {
        flex: 1;
        flex-shrink: 0;
        font-size: large;
        white-space: normal;
        overflow-wrap: break-word;
        @media (max-width: ${({ theme: { screen } }) => screen.md}) {
            font-size: medium;
        }
    }
`;

const CompetitionTextWrapper = styled.h2`
    font-weight: 350;
    font-size: 1.3rem;
    @media (max-width: ${({ theme: { screen } }) => screen.md}) {
        font-size: 1.2rem;
    }
`;

export const FeedSectionMatchResultSection = ({ match, handleSetIsScoreCardLoaded }: Props) => {
    const matchStatusText = getTextToStatusToShowOnScoreboard(match);
    const setIsScoreCardLoaded = useCallback(() => {
        handleSetIsScoreCardLoaded(true);
    }, []);
    useEffect(() => {
        handleSetIsScoreCardLoaded(true);
    }, []);
    return (
        <ScoreBoardWrapper data-testid="match-progress">
            <div>
                <ScoreBoardCountry>{match?.country}</ScoreBoardCountry>
                <CompetitionTextWrapper>{match?.competition}</CompetitionTextWrapper>
                <ScoreBoardMatchStatus matchStatus={matchStatusText}>{matchStatusText}</ScoreBoardMatchStatus>

                <StyledH1>
                    {match?.homeScore.current} - {match?.awayScore.current}
                </StyledH1>

                <MatchProgressContainer align="center" justify="space-between">
                    <p>{match?.homeTeam.name}</p>
                    <MatchProgress matchStatus={match?.status.type} liveStatus={match?.liveStatus} />
                    <p>{match?.awayTeam.name}</p>
                </MatchProgressContainer>
            </div>
        </ScoreBoardWrapper>
    );
};
