import React from "react";
import { Stack } from "react-bootstrap";
import styled from "styled-components";
import TopBar from "../components/topbar/TopBar";
import TournamentBracket from "../components/tournament/TournamentBracket";
import { tournamentSample } from "../dummydata";
const Wrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
`;

const Title = styled.h1`
    margin-top: 20px;
    color: #0f5653;
`;

const Desc = styled.p`
    &::first-letter {
        font-size: 130%;
    }
`;
const Tournament = () => {
    return (
        <React.Fragment>
            <TopBar />
            <Wrapper>
                <Stack
                    direction='horizontal'
                    className='justify-content-between me-4'>
                    <Title>{tournamentSample.date}</Title>
                    <Title>{tournamentSample.place}</Title>
                </Stack>
                {tournamentSample.desc.map((item) => (
                    <Desc>{item}</Desc>
                ))}

                <TournamentBracket />
            </Wrapper>
        </React.Fragment>
    );
};

export default Tournament;
