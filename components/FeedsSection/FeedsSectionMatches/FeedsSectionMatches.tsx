import React, { useContext } from 'react';
import styled from 'styled-components';
import { FeedsSectionMatchesHeader } from './FeedsSectionMatchesHeader/FeedsSectionMatchesHeader';
import { FeedsSectionMatchesListItem } from './FeedsSectionMatchesListItem/FeedsSectionMatchesListItem';
import { MatchesContext } from '../../../context/MatchesContextProvider';

const MatchesContainer = styled.div`
    background-color: ${({ theme: { color } }) => color.spinBetBlue};
    width: 40%;
    border-radius: 4px;
    @media (max-width: ${({ theme: { screen } }) => screen.md}) {
        width: 100%;
    }
    @media (min-width: ${({ theme: { screen } }) => screen.md}) and (max-width: ${({ theme: { screen } }) =>
            screen.xl}) {
        width: 80%;
        margin-top: 1px;
    }
`;

const ListSectionWrapper = styled.div`
    max-height: 100vh;
    overflow: auto;
`;

export const FeedsSectionMatches = () => {
    const { matches, filters } = useContext(MatchesContext);

    return (
        <MatchesContainer data-testid="matches-container">
            <FeedsSectionMatchesHeader filters={filters} />
            <ListSectionWrapper data-testid="matches-list">
                {matches.map((match) => (
                    <FeedsSectionMatchesListItem key={match.id} id={match.id} match={match} />
                ))}
            </ListSectionWrapper>
        </MatchesContainer>
    );
};
