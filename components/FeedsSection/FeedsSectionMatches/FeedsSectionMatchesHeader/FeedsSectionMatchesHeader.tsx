import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '../../../Shared/FlexBox/FlexBox';

const HeaderContainer = styled(FlexBox)`
    padding: 15px;
    background-color: ${({ theme: { color } }) => color.spinDarkGray};
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
`;

const FilterButtonsWrapper = styled(FlexBox)`
    width: 60%;
`;

const FilterButton = styled.button`
    background: transparent;
    color: ${({ theme: { color } }) => color.spinBetWhite};
    border: 1px solid ${({ theme: { color } }) => color.spinBetWhite};
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
    font-weight: 400;
    font-size: small;
    margin-right: 5px;
    cursor: pointer;
    border: 1px solid ${({ theme: { color } }) => color.spinBetWhite};
    & > span {
        margin-left: 5px;
    }
`;

const MatchesCount = styled(FlexBox)`
    padding: 5px;
    color: ${({ theme: { color } }) => color.spinBetDark};
    font-weight: 600;
    background-color: ${({ theme: { color } }) => color.spinBetYellow};
    border-radius: 100%;
    font-size: small;
`;

const buttonItems = [
    { title: 'All', count: 200 },
    { title: 'Result', count: 10 },
    { title: 'Live', count: 20 },
    { title: 'Upcoming', count: 90 },
];

export const FeedsSectionMatchesHeader = () => {
    return (
        <HeaderContainer justify="space-between">
            <FilterButtonsWrapper>
                {buttonItems.map((item) => (
                    <FilterButton key={item.title}>
                        {item.title}
                        <span>{item.count}</span>
                    </FilterButton>
                ))}
            </FilterButtonsWrapper>
            <MatchesCount>90</MatchesCount>
        </HeaderContainer>
    );
};
