import React, { Component } from 'react'
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #0288D1;
  height: 110px;
  align-items: center;
`

export default class Tabs extends Component {
  state = {
    tabNumber: 1
  }

  handleOnClick = (e) => {
    e.preventDefault()
    const { target } = e;
    // access the data id and set the tagNumber thereby rendering another tab via a conditional
    console.log(target);
  }


  render() {
    return (
      <div>
        <MainContainer>
          <div 
            id="tab-1" 
            className="active"
            data-id="1"
            onClick={null}
          >
            Upcoming
          </div>
          <div 
            id="tab-2"
            data-id="2"
          >
            Snoozed
          </div>
          <div 
            id="tab-3"
            data-id="3"
          >
            New to Review
            {/* badge could be done with material ui or custom */}
            <span style={{ background: 'red', borderRadius: '50%', padding: '2px 7px', marginLeft: '5px' }}>3</span>
          </div>
        </MainContainer>
        
      </div>
    )
  }
}
