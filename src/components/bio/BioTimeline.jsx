import React from 'react';
import styled from 'styled-components';
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
    HourglassEmptyOutlined,
    ToysOutlined,
    ParkOutlined,
    FastfoodOutlined
} from '@mui/icons-material';

const testdata = [
    {
        year: '1965',
        shortDesc: 'Wei Wang is born Mar. 21, 1961.',
        iconColor: 'salmon',
        iconType: 'hourglass',
        fullDesc: ''
    },
    {
        year: '1972',
        shortDesc:
            'Wei starts playing seriously at age 11 with the help of Wang Jien (1961 World women’s semifinalist to Giu Zhonghui). ',
        fullDesc:
            'Wei starts playing seriously at age 11 with the help of Wang Jien (1961 World women’s semifinalist to Giu Zhonghui). Said her aunt, “Wei, I know you like to dance, but forget the Dance Group, get into table tennis,” and convinces her to play shakehands.',
        iconColor: 'lightblue',
        iconType: 'toys'
    },
    {
        year: '1974',
        shortDesc:
            'Favoring a fast-attack game, Wei, at age 13, on being admitted to the Beijing Team, is the only girl on it playing shakehands.',
        fullDesc: '',
        iconColor: 'lightseagreen',
        iconType: 'park'
    },
    {
        year: '1979-82',
        shortDesc:
            'By 1979 Wei is #5 in China. But through her years of professional play is never chosen for the National Team.',
        fullDesc: '',
        iconColor: 'lightslategray',
        iconType: 'hourglass'
    },
    {
        year: '1983-85',
        shortDesc:
            'Wei retires as a professional and begins attending large classes (with many adult students) held by teachers at certain selected spots. That is, it’s not what those in the U.S. think of as a university—there’s no campus with dorms and students moving from classroom to classroom. Wei, interested in Chinese Literature, graduates in 1985.',
        fullDesc: '',
        iconColor: 'salmon',
        iconType: 'toys'
    }
];
const Title = styled.h2`
    margin: 40px 0;
    text-align: center;
`;

const getIcon = (type) => {
    switch (type) {
        case 'hourglass':
            return <HourglassEmptyOutlined />;
        case 'toys':
            return <ToysOutlined />;
        case 'park':
            return <ParkOutlined />;
        default:
            return <FastfoodOutlined />;
    }
};
const BioTimeline = () => {
    return (
        <React.Fragment>
            <Title>A box of chocolates</Title>
            <VerticalTimeline>
                {testdata.map((item) => (
                    <VerticalTimelineElement
                        className='vertical-timeline-element--work'
                        contentStyle={{
                            borderTop: `solid 5px ${item.iconColor}`
                        }}
                        date={item.year}
                        iconStyle={{
                            background: item.iconColor,
                            color: '#fff'
                        }}
                        icon={getIcon(item.iconType)}
                    >
                        {/* <h3 className='vertical-timeline-element-title'>
                        Creative Director
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Miami, FL
                    </h4> */}
                        <p>{item.shortDesc}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </React.Fragment>
    );
};

export default BioTimeline;
