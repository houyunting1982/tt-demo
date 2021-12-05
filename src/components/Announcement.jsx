import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import styled from "styled-components";

const StyledAlert = styled(Alert)`
    font-size: 20px;
    text-align: center;
`;

const Announcement = () => {
    const [show, setShow] = useState(true);
    return (
        show && (
            <StyledAlert
                dismissible
                variant='info'
                onClose={() => setShow(false)}>
                <Alert.Heading>
                    THE WESTSIDE TABLE TENNIS CENTER IS OPEN AGAIN!
                </Alert.Heading>
                <p>
                    Members of the public are invited to come play. Please be
                    responsible for your own Covid-related safety. We trust that
                    people who come witout mask are properly vaccinated.
                </p>
            </StyledAlert>
        )
    );
};

export default Announcement;
