import React from "react";
import styled from 'styled-components';

export const Button = ({ onClick, label }) => {
	return (
        <Container> 
            <Btn onClick={onClick}>{label}</Btn>
        </Container>
    );
};


export const Container = styled.div`
    margin: 30px 0;
    height: auto;
    /* width: 70%; */
`;

export const Btn = styled.button`
    padding: 20px 70px;

    border-radius: 15px;
    background-color: ${props => props.theme.colors.primary};

    color: ${props => props.theme.text.dark};
    font-weight: bold;
    font-size: 16px;

`;

