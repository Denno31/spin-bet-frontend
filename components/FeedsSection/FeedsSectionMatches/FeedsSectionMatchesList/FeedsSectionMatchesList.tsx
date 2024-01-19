import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '../../../Shared/FlexBox/FlexBox';
import Flag from 'react-world-flags';
import { IconTemplate } from '../../../Shared/IconTemplate/IconTemplate';

const MatchListItemTopSection = styled(FlexBox)`
    padding: 5px 15px 5px 15px;
`;

const MatchListItemLeagueDetails = styled(FlexBox)``;
const ListItemParagraph = styled.p`
    margin: 0px;
    font-weight: 600;
    margin-left: 1rem;
    font-size: 12px;
    color: ${({ theme: { color } }) => color.spinBetWhite};
`;

const Separator = styled.div`
    width: 2px;
    height: 35px;
    margin-left: 1rem;
    margin-right: 1rem;
    background-color: #4a535f;
`;

const CountryName = styled(ListItemParagraph)`
    color: #aaafb5;
    text-align: left;
`;

export const FeedsSectionMatchesList = () => {
    return (
        <MatchListItemTopSection align="center" justify="space-between">
            <FlexBox align="center">
                <Flag code={'cze'} height={16} />
                <div>
                    <CountryName>Russia</CountryName>
                    <ListItemParagraph>Football National League</ListItemParagraph>
                </div>
            </FlexBox>
            <FlexBox align="center">
                <ListItemParagraph>Finished</ListItemParagraph>
                <Separator></Separator>
                <IconTemplate svgName="carbon:text-link-analysis" svgWidth={20} />
            </FlexBox>
        </MatchListItemTopSection>
    );
};
