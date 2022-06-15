import styled, {css} from 'styled-components'

const color = {
    fondoIconoActive: '#333333',
    fondoIconoDesactive: '#A6A6A6',
    textColor1: '#FFFBF5',
}

const Contenedor = styled.div` 
    display: flex;
    flex-direction: column;
    width: 100vw;
    text-align: center;   
    padding: 1px;
    h1{
        font-size: 14px;
        font-weight: normal; 
        margin: 1px;
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
        color: ${color.textColor1};
        margin-top: 0px;
        margin-bottom: 1px;
    }
    ${props => props.tipo ==='personas' && css`
        background-color: ${color.fondoIconoActive} !important;
    `}
    ${props => props.tipo ==='empresas' && css`
        background-color: ${color.fondoIconoDesactive};
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
        color: ${color.textColor1};
        margin-top: 0px;
        margin-bottom: 1px;
    }
    ${props => props.tipo ==='empresas' && css`
        background-color: ${color.fondoIconoActive} !important;
    `}
    ${props => props.tipo ==='personas' && css`
        background-color: ${color.fondoIconoDesactive};
    `}
`

export {Contenedor, ContenedorTipo, IconEmpresa, IconPersona}
