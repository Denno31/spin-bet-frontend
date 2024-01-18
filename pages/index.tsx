import styled from 'styled-components';
import { Layout } from '../components/Layout/Layout';

const Container = styled.div`
    background-color: ${(props) => props.theme.color.spinGreen};
    height: 100vh;
`;

export default function Home() {
    return <Layout title="home">dd</Layout>;
}
