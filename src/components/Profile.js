import React, { Component } from 'react'
import headIcon from '../images/head_icon.png';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

import faceIcon from '../images/head.png';
import headsIcon from '../images/heads.png';
import graphIcon from '../images/graph.png';
import chatBlurbIcon from '../images/chat_blurb.png';
import medsIcon from '../images/meds.png';
import gearIcon from '../images/gear.png';

const MainContainer = styled.div`
  padding: 0 0 0 0;
  width: 670px;
  z-index: -1;
`;

const IconLinksContainer = styled.div`
  border-top: 1px solid #222;

`

const ListContainer = styled.ul`
  list-style: none;
  li {
    display: flex;
    vertical-align: top;
    color: #0085BB;
    align-items: center;
  }
`

export default class Profile extends Component {
  render() {
    return (
      <MainContainer>
        <div style={{ background: '#FAFAFA', paddingLeft: 200 }}>
          {/* I would normally add extra attributes for accessibility, like aria and alt image */}
          <img src={headIcon} alt="icon of a human head" />
          <p style={{ color: '#4AB6CD',  fontSize: '30px'}} >Ariel Augusta <span style={{ fontWeight: 'bold' }}> > </span></p>
          <IconLinksContainer>
            <ListContainer>
              {/* Each of these bullet points would be a link
              
              <Link to={componentName} ?>
                <img /> and text
              <Link>
              */}
              <li><img src={faceIcon} alt="face icon" /> My Profile</li>
              <li><img src={headsIcon} alt="heads icon" /> Ciricle of Care</li>
              <li><img src={graphIcon} alt="graph icon" />Medication Tracking</li>
              <li><img src={chatBlurbIcon} alt="chat icon" />Messenger</li>
              <li><img src={medsIcon} alt="medication icon" />Refill tracker</li>
              <li><img src={gearIcon} alt="gear/settings icon" />Settings</li>
            </ListContainer>
          </IconLinksContainer>
        </div>
      </MainContainer>
    )
  }
}
