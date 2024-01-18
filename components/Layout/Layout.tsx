import Head from 'next/head';
import { ReactNode } from 'react';

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
            {children}
        </>
    );
};
