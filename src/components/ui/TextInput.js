import React from "react";
import styled from "styled-components";
// import * as T from 'about-colors-js';
import { hexToRGBA } from "utils/colors";


export const TextInput = ({ label, onChange, type }) => {
    
	return (
        <Container>
            <Label>{label}</Label>
            <Input type={type ? type : 'text'} onChange={onChange} />
        </Container>
    );
};

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    width: 70%;
    height: 40px;
    padding: 20px;
    margin-top: 30px;

    background-color: rgba(61, 61, 61, 0.7);

    border-radius: 15px;

`;

const Label = styled.label`
    margin-bottom: 10px;
    
    font-size: 14px;
    font-weight: 300;
`;

export const Input = styled.input`
    width: 98%;
    height: 50px;

    font-size: 22px;
    font-weight: bold;
    color: ${props => props.theme.text.light};

    background: transparent;
    border: none;
    outline: none;

`;
