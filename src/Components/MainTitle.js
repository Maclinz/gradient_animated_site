import React from 'react'
import styled from 'styled-components';
import SmallHeading from './SmallHeading';

function MainTitle({title, subtitle, para}) {
    return (
        <MainTitleStyled>
            <SmallHeading title={subtitle} />
            <h2>{title}</h2>
            <p>{para}</p>
        </MainTitleStyled>
    )
}

const MainTitleStyled = styled.div`
    h2{
        padding-top: 1rem;
        font-weight: 500;
    }

    p{
        padding: 1.2em 0;
        opacity: 0.5;
    }
`;

export default MainTitle;
