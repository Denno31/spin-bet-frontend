import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '../../Shared/FlexBox/FlexBox';
import { MatchProgress } from '../../Shared/MatchProgress/MatchProgress';
import { Match } from '../../../types/match';

interface Props {
    match: Match | null | undefined;
}

const ScoreBoardWrapper = styled.div`
    background-color: ${({ theme: { color } }) => color.spinDarkGray};
    text-align: center;
    color: ${({ theme: { color } }) => color.spinBetWhite};
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
    width: 80%;
    & > p {
        font-size: large;
    }
`;

const styledH2 = styled.h2`
    font: medium;
`;

export const FeedSectionMatchResultSection = ({ match }: Props) => {
    return (
        <ScoreBoardWrapper>
            <div style={{ padding: '15px' }}>
                <ScoreBoardCountry>{match?.country}</ScoreBoardCountry>
                <h2>{match?.competition}</h2>
                <ScoreBoardMatchStatus>LIVE</ScoreBoardMatchStatus>
                <StyledH1>
                    {match?.homeScore.current} - {match?.awayScore.current}
                </StyledH1>
                <MatchProgressContainer align="center" justify="space-between">
                    <p>{match?.homeTeam.name}</p>
                    <MatchProgress />
                    <p>{match?.awayTeam.name}</p>
                </MatchProgressContainer>
            </div>
        </ScoreBoardWrapper>
    );
};
