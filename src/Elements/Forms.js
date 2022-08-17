import styled, {css} from 'styled-components'
import { styleColor } from './Colors'

const Formulario = styled.form`
    max-width: 800px;
    width: 80%;
    margin: auto;
    border-radius: 3px;
    border: 3px solid transparent;
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    background-color: ${styleColor.rellenoFormulario};
    @media (max-width: 680px){
        grid-template-columns: 1fr;
    }
`

const BloqueInput = styled.div`
    position: relative;
    z-index: 90;
    label{
        font-size: 14px;
        font-weight: 400;
        padding: 5px;
        min-height: 30px;
        cursor: pointer;
        align-items: center;
        color: ${styleColor.colorTextLabels};
    }

`
const Select = styled.select`
    position: relative;
    color: ${styleColor.titleGrisClaro};
    z-index: 90;
    width: 100%;
    background: ${styleColor.rellenoInput};
    border-radius: 3px;
    height: 35px;
    line-height: 50px;
    padding: 8px 5px 8px 5px;
    transition: .3s ease all;
    border: 1px solid transparent;
    margin-end: 2px;
    &:focus {
        border: 1px solid ${styleColor.colorBorderFocus};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163, 163, 163. 0.4);
    }
    option{
        color: ${styleColor.titleGrisClaro}
    }
    ${props => props.error === 'true' && css`
        border: 2px solid ${styleColor.colorBorderError} !important;
    `}
`

const Input = styled.input`
    position: relative;
    color: ${styleColor.titleGrisClaro};
    z-index: 90;
    width: 100%;
    background: ${styleColor.rellenoInput};
    border-radius: 3px;
    heinght: 30px;
    line-height: 30px;
    padding-left: 0px;
    transition: .3s ease all;
    border: 1px solid transparent;
    margin-end: 10px;
    ${props => props.error === 'true' && css`
        border: solid 2px ${styleColor.colorBorderError} !important;
    `}

    &:focus {
        border: 1px solid ${styleColor.colorBorderFocus};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163, 163, 163. 0.4);
    }
`

const BtnCancel = styled.button`
    height: 45px;
    line-height: 45px;
    width: 100%;
    background: ${styleColor.bkBtnSendGreyDark};
    color: #fff;
    font-weigth: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s ease all;
    &:hover{
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 1)
    }

`

const BtnSend = styled.button`
    height: 45px;
    line-height: 45px;
    width: 100%;
    background: ${styleColor.bkBtnSendGrinDark};
    color: #fff;
    font-weigth: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s ease all;
    &:hover{
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 1)
    }

`

const AvisoErrorForms = styled.p`
    grid-column: span 3; 
    font-size: 12px;
    color: ${styleColor.colorTextError};
    @media (max-width: 680px){
        grid-column: 1;
    }
`




export {Formulario, BloqueInput, BtnSend, BtnCancel, AvisoErrorForms, Input, Select}