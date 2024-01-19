import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '../../Shared/FlexBox/FlexBox';
import { MatchProgress } from '../../Shared/MatchProgress/MatchProgress';
import { Match } from '../../../types/types';
import { getTextToStatusToShowOnScoreboard } from '../../../utils/utils';

interface Props {
    match: Match | null | undefined;
}

const ScoreBoardWrapper = styled.div`
    background-color: ${({ theme: { color } }) => color.spinDarkGray};
    text-align: center;
    color: ${({ theme: { color } }) => color.spinBetWhite};
    padding: 1.2rem 0;
`;

const ScoreBoardMatchStatus = styled.p`
    margin-top: 10px;
    color: ${({ theme: { color } }) => color.spinBetYellow};
`;

const ScoreBoardCountry = styled.p`
    font: medium;
    font-weight: 300;
`;

const StyledH1 = styled.h1`
    font-size: 2rem;
`;

const MatchProgressContainer = styled(FlexBox)`
    margin: 0 auto;
    margin-top: 10px;
    width: 90%;
    & > p {
        flex: 1;
        flex-shrink: 0;
        font-size: large;
        white-space: normal;
        overflow-wrap: break-word;
    }
`;

const CompetitionTextWrapper = styled.h2`
    font-weight: 450;
    font-size: 1.5rem;
    margin-top: 10px;
`;

export const FeedSectionMatchResultSection = ({ match }: Props) => {
    const matchStatusText = getTextToStatusToShowOnScoreboard(match);
    return (
        <ScoreBoardWrapper data-testid="match-progress">
            <div style={{ padding: '15px' }}>
                <ScoreBoardCountry>{match?.country}</ScoreBoardCountry>
                <CompetitionTextWrapper>{match?.competition}</CompetitionTextWrapper>
                <ScoreBoardMatchStatus>{matchStatusText}</ScoreBoardMatchStatus>
                {match?.liveStatus !== '-' && (
                    <StyledH1>
                        {match?.homeScore.current} - {match?.awayScore.current}
                    </StyledH1>
                )}
                <MatchProgressContainer align="center" justify="space-between">
                    <p>{match?.homeTeam.name}</p>
                    <MatchProgress matchStatus={match?.status.type} liveStatus={match?.liveStatus} />
                    <p>{match?.awayTeam.name}</p>
                </MatchProgressContainer>
            </div>
        </ScoreBoardWrapper>
    );
};