import styled, { css } from "styled-components";
import { styleColor } from "./Colors";

const Title = styled.h1`
    font-size: 18px;
    color: ${styleColor.colorTextTitles};
    font-weight: bolder;
`

const GrupoBtn = styled.div`
    margin: 2px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 50px;
    gap: 5px;
`

const BtnStep = styled.button`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px ;
    text-align: center;
    font-weight: bolder;
    background-color: ${styleColor.rellenoInactiveBtn};
    color: ${styleColor.colorTextStepInactive};
    ::before{
        content: '';
        position: absolute;
        border-left: 20px solid ${styleColor.colorTextBtnActive};
        border-top: 25px solid ${styleColor.rellenoInactiveBtn};
        border-bottom: 25px solid ${styleColor.rellenoInactiveBtn};
    }
    ::after{
        content: '';
        position: absolute;
        border-left: 20px solid ${styleColor.rellenoInactiveBtn};
        border-top: 25px solid ${styleColor.colorTextBtnActive};
        border-bottom: 25px solid ${styleColor.colorTextBtnActive};
        right: 0;
    }
    h1{
        font-size: 14px;
        margin-left: 8px;
    }
    ${props => props.valueStep === props.step &&
        css` 
            background-color: ${styleColor.rellenoActiveBtn}!important;
            border-top-right-radius: 25px !important;
            border-bottom-right-radius: 25px !important;

            border-top-left-radius: -25px !important;
            border-bottom-left-radius: -25px !important;

            color: ${styleColor.colorTextBtnActive};

            ::before{
                border-left: 20px solid ${styleColor.colorTextBtnActive};
                border-top: 25px solid ${styleColor.rellenoActiveBtn};
                border-bottom: 25px solid ${styleColor.rellenoActiveBtn};
            }
            ::after{
                border-left: 20px solid ${styleColor.rellenoActiveBtn};
                border-top: 25px solid ${styleColor.colorTextBtnActive};
                border-bottom: 25px solid ${styleColor.colorTextBtnActive};
            }
        `
    }
`

const NumStep = styled.span`
    background-color: ${styleColor.rellenoStepInactive};
    font-size: 18px;
    border-radius: 20px;
    padding: 4px 9px;
    margin-left: 30px;
    color: ${styleColor.textColorWhite};
    ${props => props.valueStep === props.step &&
        css` 
            background-color: ${styleColor.colorTextBtnActive}!important;
            color: ${styleColor.colorTextStepInactive};
        `
    }

`

export { Title, GrupoBtn, BtnStep, NumStep }