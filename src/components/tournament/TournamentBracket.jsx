import React from "react";
import styled from "styled-components";
import StyledHeader from "./StyledHeader";
import {
    SingleEliminationBracket,
    Match,
} from "@g-loot/react-tournament-brackets";

import { matchesDivision1, matchesDivision2 } from "../../dummydata";

const BracketContainer = styled.div`
    text-align: center;
    width: 100%;
    overflow-x: auto;
    padding: 20px;
    margin: 40px 0 20px;
    border: 1px solid black;
    border-radius: 5px;
    -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
        5px 5px 15px -7px rgba(0, 0, 0, 0);
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
        5px 5px 15px -7px rgba(0, 0, 0, 0);
`;

const TournamentBracket = () => {
    return (
        <React.Fragment>
            <BracketContainer>
                <StyledHeader color='darkred'>Division 1</StyledHeader>
                <SingleEliminationBracket
                    matches={matchesDivision1}
                    matchComponent={Match}
                    options={{
                        style: {
                            roundHeader: { backgroundColor: "#0b0b0b" },
                            connectorColor: "#86817c",
                            connectorColorHighlight: "#e77c12",
                        },
                    }}
                />
            </BracketContainer>
            <BracketContainer>
                <StyledHeader color='lightblue'>Division 2</StyledHeader>
                <SingleEliminationBracket
                    matches={matchesDivision2}
                    matchComponent={Match}
                    options={{
                        style: {
                            roundHeader: { backgroundColor: "#0b0b0b" },
                            connectorColor: "#86817c",
                            connectorColorHighlight: "#e77c12",
                        },
                    }}
                />
            </BracketContainer>
        </React.Fragment>
    );
};

export default TournamentBracket;
