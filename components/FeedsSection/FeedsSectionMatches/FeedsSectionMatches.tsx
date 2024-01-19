import React from 'react';
import styled from 'styled-components';
import { FeedsSectionMatchesFilter } from './FeedsSectionMatchesFilter/FeedsSectionMatchesFilter';

const MatchesContainer = styled.div`
    background-color: ${({ theme: { color } }) => color.spinBetDark};
    width: 40%;
    border-radius: 4px;
`;

export const FeedsSectionMatches = () => {
    return (
        <MatchesContainer>
            <FeedsSectionMatchesFilter />
        </MatchesContainer>
    );
};
