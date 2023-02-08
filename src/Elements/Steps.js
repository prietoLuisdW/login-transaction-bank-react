import styled, { css } from "styled-components";
import { styleColor } from "./Colors";

const Container = styled.div`
    margin: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    border: 1px solid ${styleColor.colorBorder} ;
    padding: 10px 20px 10px 20px;
    border-radius: 4px;
    @media (max-width: 680px){
        grid-template-columns: 1fr;
    }   
`

const Bloque = styled.div`
    border-radius: 3px;
    border-width: thin;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 10px;
    @media (max-width: 680px){
        grid-template-columns: 1fr;
    }
    h2{
        font-size: 18px;
        color: ${styleColor.titleGrisClaro};
        grid-column: span 2;
        font-weight: normal;
    }
`

const Concepto = styled.h3`
    color: ${styleColor.colorTextGrey};
    font-size: 15px;
    font-weight: normal;
    padding: 10px 0px;
`

const Detalle = styled.h3`
    color: ${styleColor.colorTextGrey};
    font-size: 15px;
    font-weight: bolder;
    padding: 10px 0px;
    ${props => props.alerta === 'false' && css`
        color: ${styleColor.colorTextError};
    `}
`

const Botonera = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
    margin-top: 6px;
    @media (max-width: 350px){
        grid-template-columns: 1fr;
    }
`

const Botton = styled.button`
    color: #fff;
    font-weigth: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s ease all;
    height: 35px;
    ${props => props.name === 'send' ? 
        css`background: ${styleColor.bkBtnSendGrinDark} !important;`:
            props.name ==='cancelTrx' ?
            css`padding: 6px !important; background: black !important;`:
        css`background: ${styleColor.bkBtnSendGreyDark} !important;`
    }
    &:hover{
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 1)
    }    
`

const Aviso = styled.h5`
    color: ${styleColor.colorTextError};
    font-size: 12px;
    font-weight: normal; 
`

const TokenGrup = styled.div`
    margin-top: 5px;
    border-radius: 3px;
    background: ${styleColor.rellenoToken};
    padding: 10px;
    display: grid;
    grid-column: span 2;
    grid-template-columns: 1fr 1fr 1fr;
    nav{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }
    img{
        height: 100px;
    }
    @media (max-width: 700px){
        nav{
            display: none;
        }
    }
    @media (max-width: 500px){
        grid-template-columns: 1fr;
    }
`
const TextToken = styled.div`
    h2{
        color: ${styleColor.colorTextStepInactive};
        font-size: 15px;
        padding: 2px;
        font-weight: bolder;
        margin-bottom: 4px; 
    }   
    }
    h1{
        color: ${styleColor.colorTextStepInactive};
        font-size: 15px;
        padding: 2px;
        font-weight: normal; 
    }   
`

const InputToken = styled.input`
    padding: 10px;
    height: 15px;
    border-radius: 5px;
    border: 1px solid transparent;
    margin: auto;
    width: 80%;
    ${props => props.error === 'true' && css`
        border: solid 2px ${styleColor.borderError} !important;
    `}
    &:focus {
        border: 1px solid ${styleColor.rellenoToken};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163, 163, 163. 0.4);
    }
`

const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
    padding: 10px;
    h2{
        font-size: 18px;
        color: #9b9b9b;
        font-weight: normal;
    }
`

const Contenedor = styled.nav`
    justify-content: space-around;
    margin-left: 60px;
    margin-right: 60px;
    @media (max-width: 650px){
        margin-left: 10px;
        margin-right: 10px;
    } 
    @media (max-width: 450px){
        margin-left: 2px;
        margin-right: 2px;
    } 

`

export { Container, Bloque, Concepto, Detalle, Botonera, Botton, Aviso, TokenGrup, TextToken, InputToken, Head, Contenedor }