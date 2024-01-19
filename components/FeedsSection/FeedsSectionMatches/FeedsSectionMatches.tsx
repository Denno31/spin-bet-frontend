import React, { useContext } from 'react';
import styled from 'styled-components';
import { FeedsSectionMatchesHeader } from './FeedsSectionMatchesHeader/FeedsSectionMatchesHeader';
import { FeedsSectionMatchesListItem } from './FeedsSectionMatchesListItem/FeedsSectionMatchesListItem';
import { MatchesContext } from '../../../context/MatchesContextProvider';

const MatchesContainer = styled.div`
    background-color: ${({ theme: { color } }) => color.spinBetBlue};
    width: 40%;
    border-radius: 4px;
`;

export const FeedsSectionMatches = () => {
    const { matches } = useContext(MatchesContext);

    return (
        <MatchesContainer>
            <FeedsSectionMatchesHeader />
            {matches.map((match) => (
                <FeedsSectionMatchesListItem key={match.id} id={match.id} />
            ))}
        </MatchesContainer>
    );
};
