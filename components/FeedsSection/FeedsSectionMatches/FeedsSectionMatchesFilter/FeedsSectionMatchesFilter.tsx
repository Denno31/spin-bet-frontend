import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '../../../Shared/FlexBox/FlexBox';

const FilterContainer = styled(FlexBox)`
    padding: 15px;
    background-color: ${({ theme: { color } }) => color.spinDarkGray};
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
`;

const FilterButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--posttext-color);
    font-size: medium;
    font-weight: 500;
`;

export const FeedsSectionMatchesFilter = () => {
    return <FilterContainer>FeedsSectionMatchesFilter</FilterContainer>;
};
