import React, { useState } from "react";
import { MdExplore } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { TextInput, Button, Alert } from "components/ui";

import { Container, LoginContainer, LogoContainer, FormContainer, H2, H1 } from './styles';
import { Service } from "core/service";

const Login = () => {

    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');
    
    const navigate = useNavigate();

    document.title = "Geoloc - Login";


    const submit = async () => {

        try {
            const response = await Service.login({matricula, password: senha}); 
            localStorage.setItem('@token', response.data.token);
            navigate('/rotas');
            
        } catch (error) {
            Alert.error(error.message);
            console.log(error);
        }

    }

	return (
        <Container>
            <LoginContainer>
                <LogoContainer>
                    <MdExplore size={60} color="#ff9c33" />
                    <H1>GEOLOC</H1>
                </LogoContainer>
                <FormContainer>
                    <H2>Login</H2>

                    <TextInput label="Matrícula" onChange={(e) => setMatricula(e.target.value)} />
                    <TextInput label="Senha" type="password" onChange={(e) => setSenha(e.target.value)} />
                    <Button label="Entrar" onClick={submit}  />
                </FormContainer>
            </LoginContainer> 
        </Container> 
    );
};

export default Login;
