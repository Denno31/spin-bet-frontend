import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

const theme = {
    color: {
        spinDarkGray: '#3D3D3D',
        spinLightGray: '#575F58',
        spinGreen: '#44D25C',
        spinRed: '#44D25C',
    },
    screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },
};

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
