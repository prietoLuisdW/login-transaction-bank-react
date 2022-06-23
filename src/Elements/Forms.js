import styled, {css} from 'styled-components'

const coloritos = {
    relleno: '#BFBFBF',
    border: '#727273',
    borderError: '#A62103',
    rellenoInput: '#F5F5F5',
    leyendaError: '#D46424',
    labels: '#222426',
    select: '#222426',
    btnEviar: '#222426',
    btnCancel: '#727273',
    textError: '#A62103',
}

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
    background-color: ${coloritos.relleno};
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
        color: ${coloritos.labels}
    }

`
const Select = styled.select`
    position: relative;
    z-index: 90;
    width: 100%;
    background: ${coloritos.rellenoInput};
    border-radius: 3px;
    heinght: 50px;
    line-height: 50px;
    padding: 8px 5px 8px 5px;
    transition: .3s ease all;
    border: 1px solid transparent;
    margin-end: 2px;
    &:focus {
        border: 1px solid ${coloritos.border};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163, 163, 163. 0.4);
    }
    option{
        color: ${coloritos.select}
    }
    ${props => props.error === 'true' && css`
        border: 2px solid ${coloritos.borderError} !important;
    `}
`

const Input = styled.input`
    position: relative;
    z-index: 90;
    width: 100%;
    background: ${coloritos.rellenoInput};
    border-radius: 3px;
    heinght: 30px;
    line-height: 30px;
    padding-left: 0px;
    transition: .3s ease all;
    border: 1px solid transparent;
    margin-end: 10px;
    ${props => props.error === 'true' && css`
        border: solid 2px ${coloritos.borderError} !important;
    `}

    &:focus {
        border: 1px solid ${coloritos.border};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163, 163, 163. 0.4);
    }
`

const BtnCancel = styled.button`
    height: 45px;
    line-height: 45px;
    width: 100%;
    background: ${coloritos.btnCancel};
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
    background: ${coloritos.btnEviar};
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
    color: ${coloritos.textError};
    @media (max-width: 680px){
        grid-column: 1;
    }
`




export {Formulario, BloqueInput, BtnSend, BtnCancel, AvisoErrorForms, Input, Select}