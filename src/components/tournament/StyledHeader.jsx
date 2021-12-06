import React from "react";
import styled from "styled-components";

const Header = styled.div`
    background-color: inherit;
    display: flex;
    align-items: center;
    margin: 30px 0;
    color: ${(props) => props.color || "gray"};
    &::before,
    &::after {
        content: "";
        margin: auto 1em;
        border-bottom: solid 3px;
        flex: 1;
    }
`;

const Title = styled.h1`
    position: relative;
    padding: 0.25em 1em;
    overflow: hidden;
    margin: 0;
    background: linear-gradient(currentcolor, currentcolor) no-repeat top center,
        linear-gradient(currentcolor, currentcolor) no-repeat bottom center;
    background-size: calc(100% - 1.65em) 2px;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border: solid 2px;
        border-top: none;
        border-bottom: none;
        transform: skew(45deg);
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border: solid 2px;
        border-top: none;
        border-bottom: none;
        transform: skew(-45deg);
    }
`;

const StyledHeader = ({ children, color }) => {
    return (
        <Header color={color}>
            <Title>{children}</Title>
        </Header>
    );
};

export default StyledHeader;
