import styled from 'styled-components';
import { Layout } from '../components/Layout/Layout';
import { FeedsSection } from '../components/FeedsSection/FeedsSection';
import { FlexBox } from '../components/Shared/FlexBox/FlexBox';

const Container = styled.div`
    background-color: ${(props) => props.theme.color.spinGreen};
    height: 100vh;
`;

export default function Home() {
    return (
        <Layout title="home">
            <FlexBox>
                <FeedsSection />
            </FlexBox>
        </Layout>
    );
}
