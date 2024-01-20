'use client';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { FlexBox } from '../../../Shared/FlexBox/FlexBox';
import { FilterObject } from '../../../../types/types';
import { getFilteredMatches } from '../../../../utils/utils';
import { MatchesContext } from '../../../../context/MatchesContextProvider';
import matchesData from '../../../../data.json';

interface Props {
    filters: FilterObject[];
}

const HeaderContainer = styled(FlexBox)`
    padding: 15px;
    background-color: ${({ theme: { color } }) => color.spinDarkGray};
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    @media (max-width: ${({ theme: { screen } }) => screen.md}) {
        width: 100%;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        padding: 15px 5px;
        margin-top: 0.1rem;
    }
`;

const FilterButtonsWrapper = styled(FlexBox)`
    width: 60%;
    @media (max-width: ${({ theme: { screen } }) => screen.md}) {
        width: 100%;
        justify-content: space-between;
    }
`;

const FilterButton = styled.button<{ active: boolean }>`
    background: transparent;
    color: ${({ theme: { color }, active }) => (active ? color.spinGreen : color.spinBetWhite)};
    border: 1px solid ${({ theme: { color }, active }) => (active ? color.spinGreen : color.spinBetWhite)};
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
    font-weight: 400;
    font-size: small;
    margin-right: 5px;
    cursor: pointer;
    & > span {
        margin-left: 5px;
    }
    @media (max-width: ${({ theme: { screen } }) => screen.md}) {
        font-size: 0.7rem;
    }
`;

const MatchesCount = styled(FlexBox)`
    padding: 5px;
    color: ${({ theme: { color } }) => color.spinBetDark};
    font-weight: 600;
    background-color: ${({ theme: { color } }) => color.spinBetYellow};
    border-radius: 100%;
    font-size: small;
    @media (max-width: 926px) {
        display: none;
    }
`;

export const FeedsSectionMatchesHeader = ({ filters }: Props) => {
    const { activeFilter, handleSetActiveFilter, handleSetMatchesData, matches, handleSetActiveMatch } =
        useContext(MatchesContext);

    useEffect(() => {
        const filterMatches = getFilteredMatches(matchesData, activeFilter);
        handleSetMatchesData(filterMatches);
    }, [activeFilter]);

    useEffect(() => {
        handleSetActiveMatch(matches[0].id);
    }, [matches]);

    return (
        <HeaderContainer justify="space-between">
            <FilterButtonsWrapper>
                {filters.map((item) => {
                    const isActive = !!(item.filter === activeFilter.filter);
                    return (
                        <FilterButton
                            data-testid="filter-button"
                            key={item.filter}
                            active={isActive}
                            onClick={() => handleSetActiveFilter(item)}
                        >
                            {item.filter}
                            <span>{item.count}</span>
                        </FilterButton>
                    );
                })}
            </FilterButtonsWrapper>
            <MatchesCount>{activeFilter.count}</MatchesCount>
        </HeaderContainer>
    );
};
