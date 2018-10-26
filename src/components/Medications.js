import React, { Component } from 'react'
import styled from 'styled-components';
import Tabs from './Tabs';
import MedicationCard from './MedicationCard';


const HeaderContainer = styled.header`
  background: #01579B;
  height: 55px;
  width: 100%;
`;

const HeaderTextContainer = styled.h1`
  font-weight: 150;
  color: #999;
  text-align: left;
  padding-left: 20px;
`

const MainContainer = styled.div`
  width: 50%;
`

const MedicationsContainer = styled.div`
  background: #80D8FF;
`;

export default class Medications extends Component {
  render() {
    return (
      <MainContainer>
        <HeaderContainer>
          <HeaderTextContainer>Today's Medications</HeaderTextContainer>
        </HeaderContainer>
        <Tabs />
        <MedicationsContainer>
          <div styled={{ paddingLeft: 30 }}>
            <p>Now: Afternoon Medications</p>
            <MedicationCard />
          </div>
        </MedicationsContainer>
      </MainContainer>
    )
  }
}
