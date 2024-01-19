import React from 'react';
import styled from 'styled-components';
import { getConicGradientDeg } from '../../../utils/utils';

interface Props {
    matchStatus: string | undefined;
    liveStatus: string | undefined;
}

const OuterBox = styled.div<{ deg: number }>`
    width: 84px;
    height: 86px;
    position: relative;
    border-radius: 50%;
    background: conic-gradient(
        ${({ theme: { color } }) => color.spinGreen} 0turn ${({ deg }) => deg}deg,
        #4a535f 0turn
    );
`;
const InnerBox = styled.div`
    position: absolute;
    width: 81px;
    height: 81px;
    background-color: #3d3d3d;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 2rem;
`;

export const MatchProgress = ({ matchStatus, liveStatus }: Props) => {
    const conicGradientPercentage = getConicGradientDeg(matchStatus, liveStatus);

    const getTextToShowOnCircularProgress = () => {
        switch (matchStatus) {
            case 'finished':
                return 'FT';
            case 'inprogress':
                return `${liveStatus}'`;
            default:
                return '';
        }
    };

    const circularProgressText = getTextToShowOnCircularProgress();

    return (
        <OuterBox deg={conicGradientPercentage} data-testid="outer-box">
            <InnerBox>{circularProgressText}</InnerBox>
        </OuterBox>
    );
};
