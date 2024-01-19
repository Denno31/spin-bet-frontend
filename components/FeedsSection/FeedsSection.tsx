import React from 'react';
import { FeedsSectionCalendar } from './FeedsSectionCalendar/FeedsSectionCalendar';
import { FeedsSectionMatches } from './FeedsSectionMatches/FeedsSectionMatches';
import { FlexBox } from '../Shared/FlexBox/FlexBox';
import styled from 'styled-components';

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

export const FeedsSection = () => {
    return (
        <FeedSectionWrapper>
            <p>Football live scores and schedule</p>
            <FlexBox justify="space-between">
                <FeedsSectionCalendar />
                <FeedsSectionMatches />
            </FlexBox>
        </FeedSectionWrapper>
    );
};
