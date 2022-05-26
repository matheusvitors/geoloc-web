import styled from 'styled-components';
import backgroundImg from 'assets/img/background.png'


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    height: 100vh;

    background-image: url(${backgroundImg});

`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    background: rgb(20,20,20);
    background: linear-gradient(90deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0.95) 65%, rgba(20,20,20,0.5) 97%);
    background-repeat: no-repeat;
    background-size: contain;


`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    width: 70%;
    height: 70px;
    margin-top: 10px;
    margin-left: 40px;

    >svg {
        height: 40px;
    }

    /* border: 1px solid white; */

`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 50%;
    height: auto;

    margin: 20px 0 0 60px;
    padding-top: 100px;

    color: #f5f5f5;

    /* border: 1px solid white; */

`;

export const H1 = styled.h1`
    color: ${props => props.theme.colors.primary}
`;

export const H2 = styled.h2`
    margin-left: 20px;
`;


