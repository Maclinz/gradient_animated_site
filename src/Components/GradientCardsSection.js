import React from 'react'
import { SectionStyled } from '../Layouts';
import GradientCard from './GradientCard';
import MainTitle from './MainTitle';
import avatar from '../img/avata.jpg';
import styled from 'styled-components';
import CtaButton from './CtaButton';
import person from '../img/person.jpg';
import person2 from '../img/bitcoin3.jpg';
import bitcoin2 from '../img/bitcoin2.jpg';
import bitcoin from '../img/bitcoin.jpg';
import person3 from '../img/person3.jpg';
import computer from '../img/computer.jpg';

function GradientCardsSection() {
    return (
        <GradientCardsSectionStyled>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle title={'New Upcoming Items'} subtitle={'Discover Upcoming Items'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'} />
                </div>
                <div className="gradient-cards-con">
                    <GradientCard image={person} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
                    <GradientCard image={person2} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={person3} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={computer} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={bitcoin2} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
                    <GradientCard image={bitcoin} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={person} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={bitcoin2} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                </div>
                <div className="load">
                    <CtaButton name={'View More'} />
                </div>
            </SectionStyled>
        </GradientCardsSectionStyled>
    )
}

const GradientCardsSectionStyled = styled.div`
    .load{
        padding-top: 3rem;
        text-align: center;
    }
`;

export default GradientCardsSection;
