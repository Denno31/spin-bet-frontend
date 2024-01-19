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
    max-width: 1380px;
    margin: 0.1rem auto;
    max-width: 1380px;
    & > p {
        font-size: medium;
        color: ${({ theme: { color } }) => color.spinLightGray};
        font-weight: 500;
        margin: 10px 0px;
    }
`;

const ResultSectionContainer = styled.div`
    width: 33%;
`;

export const FeedsSection = () => {
    const { activeMatch, matches } = useContext(MatchesContext);
    const foundMatch = activeMatch ? getActiveItem(matches, activeMatch) : null;
    return (
        <FeedSectionWrapper>
            <p>Football live scores and schedule</p>
            <FlexBox justify="space-between">
                <FeedsSectionCalendar />
                <FeedsSectionMatches />
                <ResultSectionContainer>
                    <FeedSectionMatchResultSection match={foundMatch} />
                </ResultSectionContainer>
            </FlexBox>
        </FeedSectionWrapper>
    );
};
