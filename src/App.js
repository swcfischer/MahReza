import React, { Component } from 'react';
import './App.css';
import { Menu } from '@material-ui/icons';
import logo from './images/logo.png';
import Profile from './components/Profile';
import styled from 'styled-components';
import Medications from './components/Medications'
import AddMedication from './components/AddMedication';


const HomeContainer = styled.div`
  display: flex;
`

class App extends Component {
  state = {
    addMed: false
  }

  handleToggle = (e) => {
    e.preventDefault()
    this.setState({
      addMed: !this.state.addMed
    })
  }
  
  render() {
    return (
      <div className="App">
        <nav className="navbar" style={{ height: 85}}>
        <div id="mymeds-logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <a style={{ cursor: 'pointer', paddingRight: 20 }} href="/" onClick={this.handleToggle}>
            {this.state.addMed 
              ? 'View Meds'
              : 'Add Meds'
              }
          </a>
          <Menu style={{ paddingRight: 100, paddingTop: 30 }} />
        </div>
        </nav>
        <HomeContainer>
            <Profile />
          {this.state.addMed 
            ? (<AddMedication />)
            
            : (<Medications />)
            }
          </HomeContainer>

      </div>
    );
  }
}

export default App;
