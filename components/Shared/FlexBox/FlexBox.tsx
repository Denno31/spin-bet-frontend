import styled from 'styled-components';

interface FlexProps {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
}

export const FlexBox = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
    justify-content: ${(props) => props.justify || 'flex-start'};
    align-items: ${(props) => props.align || 'stretch'};
    flex-wrap: ${(props) => props.wrap || 'nowrap'};
`;
