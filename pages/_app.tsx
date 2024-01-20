import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MatchesContextProvider } from '../context/MatchesContextProvider';

const theme = {
    color: {
        spinDarkGray: '#3d3d3d',
        spinLightGray: '#545a5f',
        spinBetYellow: '#ffde09',
        spinBetDark: '#131a21',
        spinGreen: '#44D25C',
        spinBetBlue: '#2A3543',
        spinBetWhite: '#f0f8ff',
        spinExtraLightGray: '#aaafb5',
        spinBetRed: '#C63A38',
    },
    screen: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },
    font: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        xxl: '1.15rem',
        xxxl: '1.875rem',
    },
};

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MatchesContextProvider>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </MatchesContextProvider>
    );
}
