import React, { useContext } from 'react';
import { FeedsSectionCalendar } from './FeedsSectionCalendar/FeedsSectionCalendar';
import { FeedsSectionMatches } from './FeedsSectionMatches/FeedsSectionMatches';
import { FlexBox } from '../Shared/FlexBox/FlexBox';
import styled from 'styled-components';
import { FeedSectionMatchResultSection } from './FeedSectionMatchResultSection/FeedSectionMatchResultSection';
import { MatchesContext } from '../../context/MatchesContextProvider';
import { getActiveItem } from '../../utils/utils';

const FeedSectionWrapper = styled.section`
    width: 100%;
    max-width: 1400px;
    margin: 0.1rem auto;
    & > p {
        font-size: medium;
        color: ${({ theme: { color } }) => color.spinLightGray};
        font-weight: 500;
        margin: 10px 0px;
        @media (max-width: ${({ theme: { screen } }) => screen.xl}) {
            display: none;
        }
    }
    @media (max-width: ${({ theme: { screen } }) => screen.md}) {
        width: 100%;
    }
`;

const ResultSectionContainer = styled.div`
    width: 35%;
    @media (max-width: ${({ theme: { screen } }) => screen.md}) {
        width: 100%;
    }
    @media (min-width: ${({ theme: { screen } }) => screen.md}) and (max-width: ${({ theme: { screen } }) =>
            screen.xl}) {
        width: 80%;
    }
`;

const FeedSectionFlexContainer = styled(FlexBox)`
    @media (max-width: ${({ theme: { screen } }) => screen.xl}) {
        flex-direction: column-reverse;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`;
const AdvertsWrapper = styled.div`
    width: 35%;
    background-color: red;
`;

export const FeedsSection = () => {
    const { activeMatch, matches } = useContext(MatchesContext);
    const foundMatch = activeMatch ? getActiveItem(matches, activeMatch) : null;
    return (
        <FeedSectionWrapper>
            <p>Football live scores and schedule</p>
            <FeedSectionFlexContainer justify="space-between">
                <FeedsSectionCalendar />
                <FeedsSectionMatches />
                <ResultSectionContainer>
                    <FeedSectionMatchResultSection match={foundMatch} />
                    <AdvertsWrapper>1</AdvertsWrapper>
                </ResultSectionContainer>
            </FeedSectionFlexContainer>
        </FeedSectionWrapper>
    );
};
