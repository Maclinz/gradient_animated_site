import React from 'react'
import styled from 'styled-components';
import logo from '../img/logo2.png';

function Navigation() {
    return (
        <NavigationStyled>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul className="nav-items">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">FAQs</a>
                </li>
                <li>
                    <a href="#">Activity</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <div className="primary-btn">GET CONNECTED</div>
            </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-items{
        display: flex;
        align-items: center;
        li{
            margin: 0 1rem;
        }
        .primary-btn{
            margin-left: 3rem;
            background-color:rgba(57, 95, 246, 0.6);
            padding: .6rem 1.3rem;
            border-radius: 70px;
            cursor: pointer;
            transition: all .4s ease-in-out;
            &:hover{
                background-color:rgba(57, 95, 246, 1);
            }
        }
    }
    .logo{
        img{
            width: 60px;
        }
    }
`;

export default Navigation;
