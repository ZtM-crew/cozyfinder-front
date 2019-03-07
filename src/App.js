import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import LogIn from './components/LogIn/LogIn';
import Profile from './components/Profile/Profile';
import Title from './components/Title/Title';





class App extends Component {
  constructor(props){
    super(props);
    this.handleLoginClick= this.handleLoginClick.bind(this);
    this.handleLogoutClick= this.handleLogoutClick.bind(this);
    this.state = {
      user: false,
    }
  }

  handleLoginClick() {
    this.setState({user: true});
  }

  handleLogoutClick() {
    this.setState({user: false});
  }


  render() {
    const { user } = this.state;

    return (
        <div>

          <Title />

          { user === false
              ?

              <LogIn onClick = {this.handleLoginClick} />

              :

              <div>
                <Navbar logout={this.handleLogoutClick} />
                <Profile />
              </div>


          }
        </div>
    );
  }
}

export default App;
