import React from 'react';
import styled from 'styled-components';
import { FeedsSectionMatchesHeader } from './FeedsSectionMatchesHeader/FeedsSectionMatchesHeader';
import { FeedsSectionMatchesList } from './FeedsSectionMatchesList/FeedsSectionMatchesList';

const MatchesContainer = styled.div`
    background-color: ${({ theme: { color } }) => color.spinBetBlue};
    width: 40%;
    border-radius: 4px;
`;

export const FeedsSectionMatches = () => {
    return (
        <MatchesContainer>
            <FeedsSectionMatchesHeader />
            <FeedsSectionMatchesList />
        </MatchesContainer>
    );
};
