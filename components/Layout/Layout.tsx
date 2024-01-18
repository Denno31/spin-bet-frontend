import Head from 'next/head';
import { ReactNode } from 'react';
import { Navbar } from '../Navbar/Navbar';

interface LayoutProps {
    children: ReactNode;
    title: string;
}

export const Layout = ({ children, title }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            {children}
        </>
    );
};
