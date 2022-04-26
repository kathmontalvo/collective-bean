import { styled, keyframes } from "frontity";

// Botones

export const Button = styled.button`
    padding: 18px 24px;
    border-radius: 24px;
    font-size: 18px;
    border: none;
    font-family: 'Abel', sans-serif;
    color: #FFFFFF;
    cursor: pointer;
    @media screen and (min-width: 768px) {
        font-size: 20px;
        padding: 24px 36px;
        border-radius: 36px;
    }
    @media screen and (min-width: 1200px) {
        font-size: 24px;
    }

`

export const MainButton = styled(Button)`
    background-color: #B63EB6;
`

export const ButtonSecondary = styled(Button)`
    background-color: transparent;
    border: 1px solid #FFFFFF;
    &:hover {
        background-color: #B63EB6;
        border: 1px solid #B63EB6;
        color: #FFFFFF;
    }
`

// Título y texto

export const TitleNormal = styled.h3`
    font-size: 24px;
    font-family: 'Abel', sans-serif;
    font-weight: 500;
    margin-top: 12px;
    margin-bottom: 0;
    @media screen and (min-width: 768px) {
        font-size: 36px;
    }
    @media screen and (min-width: 1200px) {
        font-size: 52px;
    }
`

export const TitleBold = styled(TitleNormal)`
    font-weight: 700;
    margin-top: 0;
`

export const Subtitle = styled.h4`
    font-size: 18px;
    font-family: 'Abel', sans-serif;
    font-weight: 400;
    margin-top: 12px;
    margin-bottom: 8px;
    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
    @media screen and (min-width: 1200px) {
        font-size: 36px;
    }
`

export const TextBody = styled.p`
    font-family: Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #403636;
    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 30px;
    }
    @media screen and (min-width: 1200px) {
        font-size: 18px;
    }
`

// Utils 

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export const BackgroundImage = styled.img`
    width: 100%;
    height: 100vh;
    z-index: -2;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    filter: brightness(0.5);
    &.welcome {
        height: 120h;
    }
    @media screen and (min-width: 320px) and (max-height: 640px){
        &.welcome {
            height: 115vh;
        }
    }
    @media screen and (min-width: 320px) and (min-height: 641px){
        &.welcome {
            height: 90vh;
        }
    }
    @media screen and (min-width: 320px) and (min-height: 844px){
        &.welcome {
            height: 80vh;
        }
    }
    @media screen and (min-width: 768px) and (max-height: 640px){
        &.welcome {
            height: 100vh;
        }
    }
    @media screen and (min-width: 768px) and (min-height: 641px){
        &.welcome {
            height: 90vh;
        }
    }
    @media screen and (min-width: 768px) and (min-height: 1024px){
        &.welcome {
            height: 65vh;
        }
    }
    @media screen and (min-width: 768px) and (min-height: 1350px){
        &.welcome {
            height: 65vh;
        }
    }
    @media screen and (min-width: 1200px) {
        &.welcome {
            height: 110vh;
        }
    }
`

const fadeAnimation = keyframes`
    0% { opacity: 0; }
    50% { opacity: 0.5; }
    75% { opacity: 0.75; }
    100% { opacity: 1; }
`
const animatePop = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.5, 0.5);
    }

    100% {
        opacity: 1;
        transform: scale(1, 1);
    }
`
const propsAnimatePop = `
    animation-duration: 0.5s;
    animation-name: ${fadeAnimation};
    animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
`


// Home page

export const WrapperWelcome = styled.section`
    padding: 64px 36px 90px;
    color: #FFFFFF;

    & h1 {
        font-family: 'Abel', sans-serif;
        font-size: 48px;    
        line-height: 64px;
        margin-bottom: 0;
        margin-top: 0;
        max-width: 100%;
        animation: 2s ${fadeAnimation} 0.1s backwards;

    }

    & h2 {
        font-size: 18px;
        font-family: Helvetica, sans-serif;
        font-weight: 400;
        margin-top: 24px;
        margin-bottom: 48px;
        animation: 1.5s ${fadeAnimation} 0.2s backwards;

    }
    ${MainButton} {
        animation: 1s ${fadeAnimation} 0.2s backwards;
    }
    @media screen and (min-width: 768px) {
        padding: 64px 120px 200px;
        & h1 {
            margin-top: 0.85em;
            font-size: 64px;
            line-height: 90px;
        }
    }
    @media screen and (min-width: 1200px) {
        max-width: 75%; 
        padding: 70px 120px;
        & h1 {
            margin-top: 0.85em;
            font-size: 92px;
            line-height: 120px;
        }
        & h2 {
            font-size: 24px;
            margin-top: 8px;
        }
    }
`

export const ShadowImage = styled.img`
    border-radius: 0 0 10% 0;
    box-shadow: 15px 15px 0px ${props => props.isDark ? "#162216" : "white"};;
`

export const WrapperModel = styled.section`
    padding: 100px 36px;
    ${TitleNormal}, ${TitleBold}, ${Subtitle} {
        color: #B63EB6;
    }
    @media screen and (min-width: 768px) {
        padding: 120px;
        padding-top: 140px
        padding-bottom: 200px;
    }

`

export const WrapperModelTop = styled.div`
    text-align: center;
    margin-top: 24px;
    margin-bottom: 36px;
    ${TextBody} {
        width: 100%;
        margin: 36px auto;
    }
    @media screen and (min-width: 768px) {
        ${TextBody} {
            width: 50%;
        }
    }
`

export const WrapperModelBottom = styled.div`
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    .start, ${ShadowImage}.end {
        width: 100%;
    }
    ${ShadowImage}.end{
        margin-top: 36px;
        animation: 0.5s ${animatePop} cubic-bezier(.26, .53, .74, 1.48);
    }
    @media screen and (min-width: 768px) {
        margin-top: 120px;
        flex-direction: row;
        .start {
            width: 55%;
            padding-right: 36px;
        } 
        ${ShadowImage}.end {
            width: 40%;
            margin: auto;
        }
    } 
`

export const ModelList = styled.ul`
    padding-left: 0;
    padding-top: 16px;
    & li {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        font-family: Helvetica, sans-serif;
        list-style: none;
        margin-bottom: 16px;
        img {
            margin-right: 10px;
            margin-top: 12px;
            width: 40px;
        }
    }
`

export const WrapperDiscover = styled.div`
    padding: 100px 36px;
    background-color: #162216;
    border-radius: 60px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${ShadowImage} {
        width: 100%;
    }
    aside {
        width: 100%;
        color: #FFFFFF;
        text-align: start;
        margin-top: 36px;
    }
    @media screen and (min-width: 768px) {
        padding: 180px 120px;
        flex-direction: row;
        border-radius: 80px 0 0 0;
        ${ShadowImage} {
            width: 65%;
        }
        aside {
            width: 35%;
            text-align: end;
            margin-top: 0;
        }
    }
`

export const WrapperBeans = styled.section`
    padding: 100px 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
    background-size: cover;
    @media screen and (min-width: 768px) {
        padding: 180px 120px;
        flex-direction: row;
    }
`

export const BeanCard = styled.div`
    border-radius: 0 0 80px 0;
    border: 1px solid #FFFFFF;
    padding: 24px 12px;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
    img {
        height: 150px;
    }
    ${TitleBold} {
        color: #FFFFFF;
        text-align: center;
        margin-top: 16px;
        margin-bottom: 16px;
    }
    ${TextBody} {
        padding: 0 24px;
    }
    ${ButtonSecondary}, ${TextBody} {
        visibility: hidden;
        text-align: center
    }
    &:hover {
        transition: 0.5s all linear;

        ${ButtonSecondary}, ${TextBody} {
            transition: visibility 0.3s linear 0.1s;
            visibility: visible;
        }
        &.first {
            background-color: #162216;
            border: 1px solid #162216;
            color: #FFFFFF;
            ${ButtonSecondary}, ${TextBody} {
                color: #FFFFFF;
            }
        }
        &.second {
            background-color: #FFFFFF;
            color: ##162216;
            ${ButtonSecondary}, ${TextBody}, ${TitleBold} {
                color: #162216;
            }
            ${ButtonSecondary} {
                transition: border 0.3s linear 0.2s;
                border: 1px solid #162216;
                &:hover {
                    color: #FFFFFF;
                    border: 1px solid #B63EB6;
                }
            }
        }
    }
    @media screen and (min-width: 768px) {
        width: 35%;
        margin-bottom: 0;
        padding: 56px 24px;
        img {
            height: 180px;
        }
    }
`

export const FooterSection = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #162216;
    padding: 70px 36px;
    color: #FFFFFF;
    font-family: 'Abel', sans-serif;

    ul {
        padding: 0;
        margin: 36px auto;
        li {
            list-style: none;
            font-size: 18px;
            text-transform: uppercase;
            margin-bottom: 16px;
            text-align: center;
        }
    }
    ${Column} {
        width: 33%;
        align-items: center;
        img.logo {
            width: 200px;
        }
        ${Row} { 
            a {
                margin-right: 24px;
                img {
                    width: 32px;
                }
                &:nth-of-type(2n) {
                    margin: 0;
                }
            }
        }
    }
    @media screen and (min-width: 768px) {
        padding: 70px 150px;
        flex-direction: row;
        ${Column} {
            img.logo {
                width: 300px;
            }
            ${Row} { 
                img {
                    width: 64px;
                }
            }
        }

    }

`

// Beans

export const WrapperBeansPage = styled(Wrapper)`
    padding: 24px 36px;
    background-color: #162216;
    width: auto;
    ${TitleBold} {
        color: #FFFFFF;
        text-align: center;
    }
    @media screen and (min-width: 768px) {
        padding: 80px 120px;
    }
`
export const BackgroundMenu = styled.div`
    width: 100%;
    height: 200px;
    z-index: -2;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #162216;
`

export const ImgMap = styled.svg`
    margin: 24px auto;
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 80%;
        height: 750px; 
    }
`

// Beans Place

export const WrapperBeanPlace = styled(Wrapper)`
    color: #FFFFFF;
    padding: 24px 120px;
    width: auto;
    ${Row} {
        ${Column} {
            width: 50%;
            & ${TitleBold} {
                font-size: 92px;    
                line-height: 120px;
                margin-bottom: 0;
            }
            & ${TextBody} {
                padding-right: 64px; 
            }
        }
        .titleCol{
            padding: 180px 0
        } 
    }
    ${BackgroundImage} {
        height: 125vh;
        position: fixed;
    }
`

export const CardVisible = styled.section`
    display: block;
`
export const CardHover = styled(Row)`
    display: none;
    height: 301px;
    align-items: center;
    justify-content: center;
    padding: 0 18px;
    color: #FFFFFF;

    &.microlots.coffee-bean {
        background-color: #D1C066;
    }
    &.comunales.coffee-bean {
        background-color: #A33535;
    }
    &.microlots.cocoa-bean {
        background-color: #953FA3;
    }
    &.comunales.cocoa-bean {
        background-color: #52313D;
    }

    img, ${Subtitle}, ${ButtonSecondary} {
        width: 33%;
    }

    img {
        width: 25%;
        margin: auto;
    }

    ${Subtitle} {
        padding: 8px;
        text-align: center;
    }

    ${ButtonSecondary} {
        padding: 16px 32px;
        margin: 2px;
    }
`

export const BeanCardWrapper = styled(Wrapper)`
    width: 90%;
    border: 1px solid #FFFFFF;
    margin-bottom: 16px;
    img.loteImg {
        object-fit: cover;
        width: 100%;
        height: 250px;
    }
    .loteTxt {
        text-align: center;
        text-transform: uppercase;
        border-top: 1px solid #FFFFFF;
        padding: 8px;
        ${Subtitle} {
            margin: 0;
            font-size: 24px;
        }
        &.microlots.coffee-bean {
            background-color: #D1C066;
        }
        &.comunales.coffee-bean {
            background-color: #A33535;
        }
        &.microlots.cocoa-bean {
            background-color: #953FA3;
        }
        &.comunales.cocoa-bean {
            background-color: #52313D;
        }
    }

    &:hover {
        ${CardVisible} {
            display: none;
        }
        ${CardHover} {
            display: flex;
        }
    }
`

export const WrapperBeanChart = styled(Wrapper)`
    background-color: #FFFFFF;
    padding-top: 64px;
    .title {
        margin: 60px 200px;
        margin-bottom: 0;
        padding: 16px 0;
        text-align: center;
        border: 3px solid #162216;
        color: #162216;
        ${TitleNormal} {
            font-size: 36px;
            display: block;
        }
        ${TitleBold} {
            display: block;
            text-transform: uppercase;
        }
    }
    ${Row} {
        margin: 60px 200px;
        margin-top: 0;
        background-color: #162216;
        ${Column} {
            padding: 48px;
            width: 50%;
            table {
                tr {
                    td {
                        color: #FFFFFF;
                        &.main {
                            color: #D1C065;
                            padding: 24px 0;
                        }
                    }
                }
            }
            ${ButtonSecondary} {
                align-self: center;
                margin-top: 16px;
                padding: 18px 36px;
                border-color: #D1C065;
            }
        }

    }
`

export const WrapperRanges = styled(Wrapper)`
    background-color: #FFFFFF;
    padding: 120px 200px;
    width: auto;
    ${TitleBold} {
        text-align: center;
        color: #2C442C;
    }
    ${CardHover} {
        display: flex;
        width: 50%;
        margin-right: 8px;
        margin-top: 48px;
        flex-direction: column;
        height: auto;
        padding: 0;
        ${Row} {
            padding: 32px 24px;
            width: 90%;
            ${Column} {
                justify-content: center;
                width: 50%;
            }
            img {
                width: 40%;
            }
        }

        .titleType {
            width: 100%;
            text-transform: uppercase;
            text-align: center;
            border: 2px solid #FFFFFF;
            ${Subtitle} {
                margin: auto;
            }
        }
    }
    p {
        margin: 0;
    }
`
// Model

export const WrapperBanner = styled.section`
    padding: 64px 36px 90px;
    text-align: center;
    animation: 0.3s ${fadeAnimation} 0.3s backwards;

    ${TitleNormal}{
        color: #FFFFFF;
    }
    ${TitleBold} {
        margin-top: 8px;
        color: #B63EB6;
        text-shadow: -1px 0px 0px #b63eb6;
    }

    @media screen and (min-width: 768px) {
        padding: 64px 120px 200px;
        ${TitleBold} {
            margin: 36px auto;
            text-shadow: none;
        }
    }
    @media screen and (min-width: 1200px) {
        max-width: 100%; 
        padding: 70px 120px;
        ${TitleNormal}{
            margin-top: 36px;
        }
        ${TitleBold} {
            margin: 24px auto 64px;
        }
    }
`

export const WrapperMessages = styled(Wrapper)`
    width: auto;
    padding: 64px 0;
    ${TitleBold} {
        color: #B63EB6;
    }
    ${TextBody} {
        font-size: 14px;
        line-height: 20px;
        margin-top: 8px;
    }
    ${Row} {
        padding: 64px 120px;
        background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            color-stop(80%, #EBEBEB),
            color-stop(20%, #FFFFFF)
        );
        background: -o-linear-gradient(top, #EBEBEB 80%, #FFFFFF 20%);
        background: linear-gradient(
        to bottom,
        #EBEBEB 80%,
        #FFFFFF 20%
        );

        ${Column} {
            width: 50%;

            img {
                width: 100%;
                height: 350px;
                object-fit: cover;
                border-radius: 0 0 64px 0;
            }

            &.text {
                justify-content: center;
                .text-msg {
                    padding-right: 48px;
                }
            }
        }

        &:nth-of-type(2n) {
            background: -webkit-gradient(
                linear,
                left top,
                left bottom,
                color-stop(80%, #FFFFFF),
                color-stop(20%, #EBEBEB)
            );
            background: -o-linear-gradient(top, #FFFFFF 80%, #EBEBEB 20%);
            background: linear-gradient(
            to bottom,
            #FFFFFF 80%,
            #EBEBEB 20%
            );
            ${Column} {
                &.text {
                    order: 1;
                    padding-left: 24px;
                }
                img {
                    border-radius: 0 0 0 64px;
                }
            }
        }
        &:first-child {
            padding-top: 100px;
        }
        &:last-child {
            background: #FFFFFF;
        }
    }
`

// when needed
// background: -webkit-gradient(
//     linear,
//     left top,
//     left bottom,
//     color-stop(50%, green),
//     color-stop(50%, blue)
//   );
//   background: -o-linear-gradient(top, green 50%, blue 50%);
//   background: linear-gradient(
//     to bottom,
//     green 50%,
//     blue 50%
//   );