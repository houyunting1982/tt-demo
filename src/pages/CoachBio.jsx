import React from 'react';
import BioBrief from '../components/bio/BioBrief';
import TopBar from '../components/topbar/TopBar';
import styled from 'styled-components';
import BioTimeline from '../components/bio/BioTimeline';
import Competition from '../components/bio/Competition';

const Container = styled.div`
    height: 100%;
    background-color: #f6f0f2;
`;
const Wrapper = styled(Container)`
    width: 80vw;
    margin: 0 auto;
`;
const CoachBio = () => {
    return (
        <Container>
            <TopBar />
            <Wrapper>
                <BioBrief />
                <Competition />
                <BioTimeline />
            </Wrapper>
        </Container>
    );
};

export default CoachBio;
