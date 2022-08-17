import styled from 'styled-components'
import { styleColor } from './Colors'



const Header = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${styleColor.navBar};
    top: 0;
    width: 100%;
    box-shadow: 0px 10px 10px -6px black;
    h1 {
        color: ${styleColor.textNav};
        font-size: 12px;
        font-weight: normal;
        margin: 0px 10px;
        text-align: end;
        @media (max-width: 500px){
            font-size: 10px;
        }
    }
}
`

const ImgBrand = styled.img`
height: 45px;
margin: 8px;
@media (max-width: 500px){
    height: 35px;
}
`

const ContenedorFooter = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: ${styleColor.navBar};
    position: fixed;
    bottom: 0;
    width: 100vw;
    div{
        font-size: 12px;
        color: ${styleColor.textNav};
        padding-right: 10px;
        @media (max-width: 540px){
            font-size: 8px;
        }
    }
`
const ImgFooter = styled.img`
    height: 15px;
    margin: 8px;
    @media (max-width: 500px){
        height: 10px;
    }
`

export {Header, ImgBrand, ContenedorFooter, ImgFooter}