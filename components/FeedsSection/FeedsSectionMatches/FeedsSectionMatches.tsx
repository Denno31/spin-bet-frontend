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
`;

export const FeedsSectionMatches = () => {
    const { matches, filters } = useContext(MatchesContext);

    return (
        <MatchesContainer>
            <FeedsSectionMatchesHeader filters={filters} />
            {matches.map((match) => (
                <FeedsSectionMatchesListItem key={match.id} id={match.id} match={match} />
            ))}
        </MatchesContainer>
    );
};
