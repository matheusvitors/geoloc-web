import styled from 'styled-components';
import { hexToRGBA } from 'utils/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Titulo = styled.h1`
    font-size: 24px;
    color: ${props => props.theme.text.light};
`;

export const Tabela = styled.table`
    width: 30%;
    
    align-self: center;
    
    font-size: 22px;
    text-align: right;
    
    thead {
        text-align: center;
    }
    
    tr {
        height: 50px;
        padding: 0px 25px;

        cursor: pointer;
        

        &:hover {
            background-color: ${props => hexToRGBA(props.theme.colors.primary, 0.1)};
        }
    }

`;

