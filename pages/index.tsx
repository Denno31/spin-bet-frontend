import styled from 'styled-components';
import { Layout } from '../components/Layout/Layout';

const Container = styled.div`
    background-color: red;
    height: 100vh;
`;

export default function Home() {
    return (
        <Layout title="home">
            <Container>w</Container>
        </Layout>
    );
}
