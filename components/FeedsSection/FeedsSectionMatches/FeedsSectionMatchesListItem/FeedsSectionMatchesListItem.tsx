import React, { useContext } from 'react';
import styled from 'styled-components';
import { FlexBox } from '../../../Shared/FlexBox/FlexBox';
import Flag from 'react-world-flags';
import { IconTemplate } from '../../../Shared/IconTemplate/IconTemplate';
import { MatchesContext, MatchesContextProvider } from '../../../../context/MatchesContextProvider';
import { extractCountryCodeFromCountryName, getActiveItem } from '../../../../utils/utils';
import { Match } from '../../../../types/types';
import { format } from 'date-fns';

interface Props {
    id: string;
    match: Match;
}

const MatchListItemTopSection = styled(FlexBox)`
    padding: 5px 15px 5px 15px;
`;

const ListItemParagraph = styled.p`
    margin: 0px;
    font-weight: 600;
    margin-left: 1rem;
    font-size: 12px;
    color: ${({ theme: { color } }) => color.spinBetWhite};
`;

const Separator = styled.div`
    width: 2px;
    height: 35px;
    margin-left: 1rem;
    margin-right: 1rem;
    background-color: #4a535f;
`;

const CountryName = styled(ListItemParagraph)`
    color: ${({ theme: { color } }) => color.spinExtraLightGray};
    text-align: left;
`;

const MatchListMatchDetailsSectionContainer = styled.div`
    display: flex;
    padding: 5px 15px 5px 15px;
    transition: background-color 0.3s ease;
    justify-content: space-between;
    cursor: pointer;
    border-bottom: 1px solid ${({ theme: { color } }) => color.spinExtraLightGray};
    &:hover {
        background-color: ${({ theme: { color } }) => color.spinBetDark};
    }
`;

const GameStatusParagraph = styled.p`
    font: 12px;
    color: ${({ theme: { color } }) => color.spinLightGray};
    font-weight: 600;
`;

const TeamName = styled.div`
    margin-left: 0;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    & > p {
        color: ${({ theme: { color } }) => color.spinBetWhite};
        font-size: 12px;
        margin-left: 5px;
        font-weight: 600;
    }
`;

const ScoreWrapper = styled.div`
    color: ${({ theme: { color } }) => color.spinBetRed} !important;
`;

export const FeedsSectionMatchesListItem = ({ id, match }: Props) => {
    const { handleSetActiveMatch, activeMatch } = useContext(MatchesContext);
    const countryCode = extractCountryCodeFromCountryName(match.country || '');
    return (
        <>
            <MatchListItemTopSection align="center" role="button" justify="space-between">
                <FlexBox align="center">
                    <Flag code={countryCode} height={16} />
                    <div>
                        <CountryName>{match?.country}</CountryName>
                        <ListItemParagraph>{match?.competition}</ListItemParagraph>
                    </div>
                </FlexBox>
                <FlexBox align="center">
                    <ListItemParagraph>{match?.liveStatus}</ListItemParagraph>
                    <Separator></Separator>
                    <IconTemplate svgName="carbon:text-link-analysis" svgWidth={20} />
                </FlexBox>
            </MatchListItemTopSection>
            <MatchListMatchDetailsSectionContainer onClick={() => handleSetActiveMatch(id)}>
                <FlexBox align="center">
                    <div style={{ textAlign: 'center' }}>
                        <GameStatusParagraph>{format(new Date(match.timestamp), 'HH:mm')}</GameStatusParagraph>
                        <GameStatusParagraph>{match?.liveStatus}</GameStatusParagraph>
                    </div>
                    <Separator />
                    <div>
                        <TeamName>
                            <IconTemplate svgColor="#44D25C" svgName="ph:soccer-ball-fill" svgWidth={16} />
                            <p>{match?.homeTeam.name}</p>
                        </TeamName>
                        <TeamName>
                            <IconTemplate svgColor="#ffde09" svgName="ph:soccer-ball-fill" svgWidth={16} />
                            <p>{match.awayTeam.name}</p>
                        </TeamName>
                    </div>
                </FlexBox>
                <FlexBox align="center">
                    <ScoreWrapper>
                        <p>{match?.homeScore.current}</p>
                        <p>{match?.awayScore.current}</p>
                    </ScoreWrapper>
                    <Separator />
                    <IconTemplate svgName="mi:notification" svgWidth={20} />
                </FlexBox>
            </MatchListMatchDetailsSectionContainer>
        </>
    );
};
