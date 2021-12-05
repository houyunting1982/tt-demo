import React from "react";
import Announcement from "../components/Announcement";
import EventsSlider from "../components/carousel/EventsSlider";
import TopBar from "../components/topbar/TopBar";

const Home = () => {
    return (
        <React.Fragment>
            <TopBar />
            <Announcement />
            <EventsSlider />
        </React.Fragment>
    );
};

export default Home;
