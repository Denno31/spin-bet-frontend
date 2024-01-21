import React from 'react';
import styled, { keyframes } from 'styled-components';

const loading = keyframes`
   to {
    transform: rotate(360deg);
  }

`;

const LoadingState = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const LoadingInner = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #ddd;
    border-top-color: orange;
    animation: ${loading} 1s linear infinite;
`;

export const LoadingSpinner = () => {
    return (
        <LoadingState>
            <LoadingInner />
        </LoadingState>
    );
};
