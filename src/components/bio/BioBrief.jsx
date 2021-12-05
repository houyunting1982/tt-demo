import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import WeiImage from '../../assets/weiwang.png';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const StyledImage = styled(Image)`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    object-fit: cover;
`;

const Title = styled(Col)`
    margin-top: 20px;
    ${mobile({ textAlign: 'center' })}
`;

const Desc = styled.p`
    font-family: 'Fuzzy Bubbles', cursive;
    &::first-letter {
        font-size: 200%;
    }
`;
const BioBrief = () => {
    return (
        <React.Fragment>
            <Row className='justify-content-center align-items-center'>
                <Col md='2' className='text-center'>
                    <StyledImage src={WeiImage} />
                </Col>
                <Title md={{ span: 7, offset: 1 }}>
                    <h1>Wei Wang</h1>
                    <Desc>
                        Wei's long list of achievements starts with her getting
                        selected at age nine, in a small Chinese town, to pursue
                        training and a career in table tennis. Years of six-day
                        weeks, training six hours per day, ultimately paid off.
                        She rose to be ranked #5 in China. She then emigrated to
                        the U.S., where she won the U.S. National Championship
                        in singles and doubles. In 1996 she represented the USA
                        in the Olympic Games in Atlanta. Inducted into the U.S.
                        Table Tennis Hall of Fame in 2002, she has now played
                        and coached in California for three decades.{' '}
                    </Desc>
                </Title>
            </Row>
        </React.Fragment>
    );
};

export default BioBrief;
