import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../Layouts';
import map from '../img/map.png';

function ContactSection() {
    return (
        <ContactSectionStyled>
            <SectionStyled>
                <div className="contact-info">
                    <h3 className="contact-title">
                        Contact Us
                    </h3>
                    <p>30 Avenue Street, United Kingdom</p>
                    <p>+44 786 997 7162</p>
                    <p>maclinzuniversal@gmail.com</p>
                </div>
                <div className="bg-image">
                    <img src={map} alt="" />
                </div>
            </SectionStyled>
        </ContactSectionStyled>
    )
}

const ContactSectionStyled = styled.div`
    background-color: #020C31;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem 0;
    position: relative;
    z-index: 1;
    p{
        opacity: 0.5;
    }
    .bg-image{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        img{
            width: 80%;
            opacity: 0.08;
        }
    }
    .contact-title{
        position: relative;
        padding-bottom: 1rem;
        margin-bottom: 2rem;
        font-weight: 500;
        font-size: 1.5rem;
        &::before{
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 4rem;
            height: 2px;
            background-color: #eb3fa9;
        }
    }
`;

export default ContactSection;
