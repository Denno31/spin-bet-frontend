import React from 'react';
import styled from 'styled-components';

const OuterBox = styled.div`
    width: 84px;
    height: 86px;
    position: relative;
    border-radius: 50%;
    background: conic-gradient(${({ theme: { color } }) => color.spinGreen} 0turn 90deg, #4a535f 0turn);
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

export const MatchProgress = () => {
    return (
        <OuterBox>
            <InnerBox>32'</InnerBox>
        </OuterBox>
    );
};
