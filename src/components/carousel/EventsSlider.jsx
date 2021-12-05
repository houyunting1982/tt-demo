import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import bg1 from "../../assets/bg1.jpeg";
import bg2 from "../../assets/bg2.jpeg";
import bg3 from "../../assets/bg3.jpeg";
import styled from "styled-components";

const StyledImg = styled.img`
    width: 100wh;
    height: 50vh;
    object-fit: cover;
`;

const StyledCarousel = styled(Carousel)``;

const StyledCaption = styled(Carousel.Caption)`
    color: ${(props) => (props.light ? "white" : "black")};
    font-size: 20px;
`;
const EventsSlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <StyledCarousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <StyledImg
                    className='d-block w-100'
                    src={bg1}
                    alt='First slide'
                />
                <StyledCaption light>
                    <h3>Saturday Tournament</h3>
                    <p>
                        Tournament format: Division 1: 1800+, Division 2: &lt;
                        1800. Round Robin of 3 or 4 players (you play all
                        players in your group, win or lose), best two advance to
                        single elimination draw.
                    </p>
                </StyledCaption>
            </Carousel.Item>
            <Carousel.Item>
                <StyledImg
                    className='d-block w-100'
                    src={bg2}
                    alt='Second slide'
                />

                <StyledCaption light>
                    <h3>Professional Private Lessons</h3>
                    <p>
                        With Head Coach Wei Wang: Floor fee + $50/half hour or
                        $90/hour With one of our highly qualified Associate
                        Coaches: Floor Fee + $40/half hour or $70/hour
                    </p>
                </StyledCaption>
            </Carousel.Item>
            <Carousel.Item>
                <StyledImg
                    className='d-block w-100'
                    src={bg3}
                    alt='Third slide'
                />

                <StyledCaption>
                    <h3>Top Quality Rackets</h3>
                    <p>
                        We have a Pro Shop where you can get top quality
                        tournament rackets. Note that rackets available in
                        sporting goods stores are usually of recreational
                        quality, even their more expensive ones. So come consult
                        us before you buy.
                    </p>
                </StyledCaption>
            </Carousel.Item>
        </StyledCarousel>
    );
};

export default EventsSlider;
