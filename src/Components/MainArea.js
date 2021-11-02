import React from 'react';
import styled from 'styled-components';
import business from '../img/marketing.mp4';
import circles from '../img/circles.svg';
import {InnerLayout} from '../Layouts'
import MainContent from './MainContent';

function MainArea() {
    return (
        <MainAreaStyled>
            <video src={business} muted playsInline autoPlay loop></video>
            {<img src={circles} className="overlay" />}
            <InnerLayout>
                <MainContent />
            </InnerLayout>
        </MainAreaStyled>
    )
}

const MainAreaStyled = styled.header`
    width: 100%;
    height: 85vh;
    position: relative;
    overflow: hidden;
    .overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        right: -400px;
        top: -300px;
        
    }
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.7;
    }
`;

export default MainArea;
