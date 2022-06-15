import styled from 'styled-components'

const colors = {
    navBar: '#00433D',
    textNav: '#FFFBF5',
}

const Header = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.navBar};
    top: 0;
    width: 100%;
    h1 {
        color: ${colors.textNav};
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
    background-color: ${colors.navBar};
    position: fixed;
    bottom: 0;
    width: 100vw;
    div{
        font-size: 12px;
        color: ${colors.textNav};
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