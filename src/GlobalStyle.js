import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
    }
    body{
        color: white;
        font-size: 1.2rem;
        font-weight: 400;
        background-color: #03091F;
        ::-webkit-scrollbar{
            width: 8px;
        }
        ::-webkit-scrollbar-track{
            background: #ccc;
        }
        ::-webkit-scrollbar-thumb{
            background: linear-gradient(180deg, #7F41DB 0%, #022894 100%);
            border-radius: 24px;
        }
    }
    a{
        color: inherit;
        font-family: inherit;
    }
    p{
        line-height: 2rem;
    }

    .GradientText{
        background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
        background-clip: text;
        display: inline-block;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }

    .Before{
        padding-left: 3rem;
        position: relative;
        &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 35px;
            height: 2px;
            background-color: #395FF6 ;
        }
    }

    .title-con{
        width: 50%;
        margin: 0 auto;
        text-align: center;
    }

    .gradient-cards-con{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 2rem;
    }
`;

export default GlobalStyle;