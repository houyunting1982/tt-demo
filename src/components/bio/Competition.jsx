import { FiberManualRecordOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

const Title = styled.h2`
    margin: 40px 0;
    text-align: center;
`;

const data = [
    '1996 US Olympic Team Member',
    '1995 US National Doubles Champion (with Lily Yip)',
    '1995 US Pan-Am Team Member',
    "1995 English Open Women's Doubles Finalist",
    '1994 World Team Cup (Nimes) US Team Member',
    '1994 North American Team Champion',
    '1993 World Championships (Gothenburg, Sweden) US Team Member',
    "1992 US National Women's Doubles Champion (with Lily Yip)",
    '1992 US National Championship Finalist',
    '1991 World Team Cup (Barcelona) US Team Member',
    '1991 World Championships (Chiba, Japan) US Team Member',
    '1990 US National Champion',
    '1989 North American Championships - Finalist',
    '1988 North American Invitational Champion',
    '1980 Chinese National Championships - 5th place',
    '1974-1982 Member Beijing Provincial Team'
];

const renderRecord = (text) => {
    return (
        <p>
            <span>
                <FiberManualRecordOutlined />
            </span>
            {text}
        </p>
    );
};

const Competition = () => {
    return (
        <React.Fragment>
            <Title>Competition Record</Title>
            <Row className='justify-content-md-center'>
                <Col md={{ span: 6, offset: 2 }}>
                    {data.map((text) => renderRecord(text))}
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Competition;
