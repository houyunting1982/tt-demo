import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import styled from "styled-components";
import TopBar from "../components/topbar/TopBar";
import Tour01 from "../assets/tour01.png";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    max-width: 1200px;
    width: 80vw;
    margin: 20px auto;
`;

const Title = styled.h1`
    text-align: center;
    margin: 20px auto;
    color: #0f5653;
`;

const Desc = styled.p`
    width: 80%;
    margin: 20px auto;
    &::first-letter {
        font-size: 130%;
    }
`;

const StyledCard = styled(Card)`
    width: 18rem;
    margin: 20px auto;
`;

const StyledRow = styled(Row)`
    text-align: center;
    justify-content: space-between;
`;
const TournamentsBoard = () => {
    return (
        <React.Fragment>
            <TopBar />
            <Wrapper>
                <Title>Club Tournament</Title>
                <Desc>
                    Tournament format: Division 1: 1800+, Division 2 &lt; 1800.
                    Round Robin of 3 or 4 players (you play all players in your
                    group, win or lose), best two advance to single elimination
                    draw. Please be there by 6.30 pm (or text me at 626
                    674-6037) so I can include you in the draw. Please don't
                    arrive after 7 pm.
                </Desc>
                <StyledRow>
                    <Col md={6} xl={4}>
                        <StyledCard style={{ width: "18rem" }}>
                            <Card.Img variant='top' src={Tour01} />
                            <Card.Body>
                                <Card.Title>Nov 20th 2021 </Card.Title>
                                <Card.Text>
                                    Final: Kevin Choe - Takato Tsuchiya
                                </Card.Text>
                                <Link to='/tournament/dd'>
                                    <Button variant='primary'>
                                        More Detail
                                    </Button>
                                </Link>
                            </Card.Body>
                        </StyledCard>
                    </Col>
                    <Col md={6} xl={4}>
                        <StyledCard style={{ width: "18rem" }}>
                            <Card.Img variant='top' src={Tour01} />
                            <Card.Body>
                                <Card.Title>Nov 20th 2021 </Card.Title>
                                <Card.Text>
                                    Final: Kevin Choe - Takato Tsuchiya
                                </Card.Text>
                                <Link to='/tournament/dd'>
                                    <Button variant='primary'>
                                        More Detail
                                    </Button>
                                </Link>
                            </Card.Body>
                        </StyledCard>
                    </Col>
                    <Col md={6} xl={4}>
                        <StyledCard style={{ width: "18rem" }}>
                            <Card.Img variant='top' src={Tour01} />
                            <Card.Body>
                                <Card.Title>Nov 20th 2021 </Card.Title>
                                <Card.Text>
                                    Final: Kevin Choe - Takato Tsuchiya
                                </Card.Text>
                                <Link to='/tournament/dd'>
                                    <Button variant='primary'>
                                        More Detail
                                    </Button>
                                </Link>
                            </Card.Body>
                        </StyledCard>
                    </Col>
                    <Col md={6} xl={4}>
                        <StyledCard style={{ width: "18rem" }}>
                            <Card.Img variant='top' src={Tour01} />
                            <Card.Body>
                                <Card.Title>Nov 20th 2021 </Card.Title>
                                <Card.Text>
                                    Final: Kevin Choe - Takato Tsuchiya
                                </Card.Text>
                                <Link to='/tournament/dd'>
                                    <Button variant='primary'>
                                        More Detail
                                    </Button>
                                </Link>
                            </Card.Body>
                        </StyledCard>
                    </Col>
                </StyledRow>
            </Wrapper>
        </React.Fragment>
    );
};

export default TournamentsBoard;
