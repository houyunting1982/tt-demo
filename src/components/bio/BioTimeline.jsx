import React from "react";
import styled from "styled-components";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
    HourglassEmptyOutlined,
    ToysOutlined,
    ParkOutlined,
    FastfoodOutlined,
} from "@mui/icons-material";

const testdata = [
    {
        year: "1965",
        shortDesc: "Wei Wang is born Mar. 21, 1961.",
        iconColor: "salmon",
        iconType: "hourglass",
        fullDesc: "",
    },
    {
        year: "1972",
        shortDesc:
            "Wei starts playing seriously at age 11 with the help of Wang Jien (1961 World women’s semifinalist to Giu Zhonghui). ",
        fullDesc:
            "Wei starts playing seriously at age 11 with the help of Wang Jien (1961 World women’s semifinalist to Giu Zhonghui). Said her aunt, “Wei, I know you like to dance, but forget the Dance Group, get into table tennis,” and convinces her to play shakehands.",
        iconColor: "lightblue",
        iconType: "toys",
    },
    {
        year: "1974",
        shortDesc:
            "Favoring a fast-attack game, Wei, at age 13, on being admitted to the Beijing Team, is the only girl on it playing shakehands.",
        fullDesc: "",
        iconColor: "lightseagreen",
        iconType: "park",
    },
    {
        year: "1979-82",
        shortDesc:
            "By 1979 Wei is #5 in China. But through her years of professional play is never chosen for the National Team.",
        fullDesc: "",
        iconColor: "lightslategray",
        iconType: "hourglass",
    },
    {
        year: "1983-85",
        shortDesc:
            "Wei retires as a professional and begins attending large classes (with many adult students) held by teachers at certain selected spots. ",
        fullDesc: "",
        iconColor: "salmon",
        iconType: "toys",
    },
    {
        year: "1986",
        shortDesc: "Wei immigrates to the U.S.",
        fullDesc: "",
        iconColor: "lightblue",
        iconType: "hourglass",
    },
    {
        year: "1987",
        shortDesc:
            "The USATT magazine, Table Tennis Topics, first mentions Wei when she plays in the May, 1987 West Covina, CA Open.",
        fullDesc: "",
        iconColor: "lightpink",
        iconType: "park",
    },
    {
        year: "1988",
        shortDesc:
            "On Mar. 24, at the Orange Coast College in Costa Mesa, Wei wins two singles and the doubles with U-22 U.S. Champion Lan Vuong—thus enabling the “U.S.” to defeat a visiting Japanese Team managed by 1967 U.S. Open Champion Manji Fukushima.",
        fullDesc: "",
        iconColor: "teal",
        iconType: "hourglass",
    },
    {
        year: "1989",
        shortDesc:
            "The Top 3 in Jan.-Feb. U.S. Women’s Ratings are: Bhushan: 2401; Lily Hugh: 2361; and Wei: 2352. In a Feb. Pittsburgh tournament, Wei upsets Insook.",
        fullDesc: "",
        iconColor: "brown",
        iconType: "toy",
    },
    {
        year: "1990",
        shortDesc:
            "Wei beats Tawny Banh to win the Women’s at the Apr. West Covina Spring Open.",
        fullDesc: "",
        iconColor: "orange",
        iconType: "toys",
    },
    {
        year: "1991",
        shortDesc:
            " At the World’s, in a Corbillon Cup match, Wei beats Bulgaria’s Daniela Guerguelcheva, the 1990 European Champion. In Mixed Doubles, Wei and Eric Boggan reach the round of 32, lose 2-1 to France’s Damien Eloi/Sandrine Derrien.",
        fullDesc: "",
        iconColor: "tomato",
        iconType: "hourglass",
    },
    {
        year: "1992",
        shortDesc:
            "In the Mar.-Apr. issue of Topics readers note both Wei’s “A Newer, Faster Way To Learn,” and the Interview with her.",
        fullDesc: "",
        iconColor: "maroon",
        iconType: "park",
    },
    {
        year: "1993",
        shortDesc:
            "At the Feb. Chinese New Year Open, Wei loses to Amy Feng in Women’s and Women’s All-Star matches.",
        fullDesc: "",
        iconColor: "green",
        iconType: "toys",
    },
    {
        year: "1994",
        shortDesc:
            "By now Anita and Wei have done a video shoot for the French band “Air.” ",
        fullDesc: "",
        iconColor: "olive",
        iconType: "default",
    },
    {
        year: "1995",
        shortDesc:
            "Playing in the Jan., 1995 ENGLISH OPEN as a warm-up for the Pan-Am Games, Wei, playing with a pick-up Austrian partner against world-class opponents, is the WOMEN’S DOUBLES RUNNER-UP—quite an achievement.",
        fullDesc: "",
        iconColor: "goldenrod",
        iconType: "park",
    },
    {
        year: "1996",
        shortDesc:
            "At the Feb. Flint, MI U.S. Olympic Trials, Wei finishes 3rd behind Lily and Amy. So when later at Edmonton Virginia fails to qualify for Doubles, Wei is able to partner Lily in Atlanta. Her official Olympic Athlete biography (where do they get their info?) says she plays penholder and has won back-to-back U.S. Championships.",
        fullDesc: "",
        iconColor: "violet",
        iconType: "toys",
    },
];
const Title = styled.h2`
    margin: 40px 0;
    text-align: center;
`;

const getIcon = (type) => {
    switch (type) {
        case "hourglass":
            return <HourglassEmptyOutlined />;
        case "toys":
            return <ToysOutlined />;
        case "park":
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
                            borderTop: `solid 5px ${item.iconColor}`,
                        }}
                        date={item.year}
                        iconStyle={{
                            background: item.iconColor,
                            color: "#fff",
                        }}
                        icon={getIcon(item.iconType)}>
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
