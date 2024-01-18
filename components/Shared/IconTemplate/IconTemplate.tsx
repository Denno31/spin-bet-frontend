import { Icon } from '@iconify/react';
import React from 'react';
import styled from 'styled-components';

interface IconTemplateProps {
    label?: string;
    svgName: string;
    svgWidth?: number;
    svgColor?: string;
    className?: string;
}

const IconTemplateWrapper = styled.div<{ $svgColor?: string }>`
    display: flex;
    align-items: center;
    margin-left: 0.2rem !important;
    color: ${(props) => props.$svgColor || '#f0f8ff'};
    & > span {
        margin-left: 5px;
    }
`;

export const IconTemplate = ({ svgName, svgWidth, svgColor, label }: IconTemplateProps) => {
    return (
        <IconTemplateWrapper>
            <Icon color={svgColor} icon={svgName} width={svgWidth} />
            {label && <span>{label}</span>}
        </IconTemplateWrapper>
    );
};
