import React from "react";
import styled from "styled-components";
import { FastfoodOutlined } from "@mui/icons-material";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { Divider } from "@mui/material";

const testdata = [
    {
        year: "1965",
        shortDesc: "Wei Wang is born Mar. 21, 1961.",
        fullDesc: "",
    },
    {
        year: "1972",
        shortDesc:
            "Wei starts playing seriously at age 11 with the help of Wang Jien (1961 World women’s semifinalist to Giu Zhonghui). ",
        fullDesc:
            "Wei starts playing seriously at age 11 with the help of Wang Jien (1961 World women’s semifinalist to Giu Zhonghui). Said her aunt, “Wei, I know you like to dance, but forget the Dance Group, get into table tennis,” and convinces her to play shakehands.",
    },
    {
        year: "1974",
        shortDesc:
            "Favoring a fast-attack game, Wei, at age 13, on being admitted to the Beijing Team, is the only girl on it playing shakehands.",
        fullDesc: "",
    },
    {
        year: "1979-82",
        shortDesc:
            "By 1979 Wei is #5 in China. But through her years of professional play is never chosen for the National Team.",
        fullDesc: "",
    },
    {
        year: "1983-85",
        shortDesc:
            "Wei retires as a professional and begins attending large classes (with many adult students) held by teachers at certain selected spots. That is, it’s not what those in the U.S. think of as a university—there’s no campus with dorms and students moving from classroom to classroom. Wei, interested in Chinese Literature, graduates in 1985.",
        fullDesc: "",
    },
];

const Title = styled.h2`
    margin: 40px 0;
    text-align: center;
`;

const BioTimeline = () => {
    return (
        <React.Fragment>
            <Title>A box of chocolates</Title>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{
                        background: "rgb(194, 220, 241)",
                        color: "brown",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(222, 240, 255)",
                    }}
                    date='1965'
                    iconStyle={{
                        background: "rgb(102, 181, 238)",
                        color: "#fff",
                    }}
                    icon={<FastfoodOutlined />}>
                    <h3 className='vertical-timeline-element-title'>
                        Creative Director
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Miami, FL
                    </h4>
                    <p>
                        Creative Direction, User Experience, Visual Design,
                        Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    date='2010 - 2011'
                    iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                    icon={<FastfoodOutlined />}>
                    <h3 className='vertical-timeline-element-title'>
                        Art Director
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        San Francisco, CA
                    </h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO,
                        Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    date='2008 - 2010'
                    iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                    icon={<FastfoodOutlined />}>
                    <h3 className='vertical-timeline-element-title'>
                        Web Designer
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Los Angeles, CA
                    </h4>
                    <p>User Experience, Visual Design</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    date='2006 - 2008'
                    iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                    icon={<FastfoodOutlined />}>
                    <h3 className='vertical-timeline-element-title'>
                        Web Designer
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        San Francisco, CA
                    </h4>
                    <p>User Experience, Visual Design</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </React.Fragment>
    );
};

export default BioTimeline;
