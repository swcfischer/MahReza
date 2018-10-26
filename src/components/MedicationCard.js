import React from 'react'
import styled from 'styled-components';


const MainContainer = styled.div`
  background: #fff;
  width: 650px;
  height: 290px
  display: flex;
  -webkit-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
`;

export default function MedicationCard() {
  return (
    <MainContainer>
      <h5><span>12:00 PM</span> <span>1/2 tablet</span></h5>
    </MainContainer>
  )
}
