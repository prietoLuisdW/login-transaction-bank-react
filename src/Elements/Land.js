import styled, {css} from 'styled-components'
import { styleColor } from './Colors'


const Contenedor = styled.div` 
    display: flex;
    flex-direction: column;
    width: 100vw;
    text-align: center;   
    padding: 1px;
    h1{
        font-size: 1em;
        font-weight: normal; 
        margin: 20px;
        color: ${styleColor.titleGrisClaro}
    }   
`
const ContenedorTipo = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: center;
    border-radius: 3px solid;
`

const IconPersona = styled.div`
    margin: 5px 20px 5px 20px;
    padding: 0px 4px;
    border-radius: 3px;
    cursor: pointer;
    img{
        margin: 2px;
    }
    p{
        font-size: 10px;
        color: ${styleColor.textColorWhite};
        margin-top: 0px;
        margin-bottom: 1px;
    }
    ${props => props.tipo ==='personas' && css`
        background-color: ${styleColor.fondoIconoActive} !important;
    `}
    ${props => props.tipo ==='empresas' && css`
        background-color: ${styleColor.fondoIconoDesactive};
    `}

`

const IconEmpresa = styled.div`
    margin: 5px 20px 5px 20px;
    padding: 0px 4px;
    border-radius: 3px;
    cursor: pointer;
    img{
        margin: 2px;
    }
    p{
        font-size: 10px;
        color: ${styleColor.textColorWhite};
        margin-top: 0px;
        margin-bottom: 1px;
    }
    ${props => props.tipo ==='empresas' && css`
        background-color: ${styleColor.fondoIconoActive} !important;
    `}
    ${props => props.tipo ==='personas' && css`
        background-color: ${styleColor.fondoIconoDesactive};
    `}
`

export {Contenedor, ContenedorTipo, IconEmpresa, IconPersona}
