import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import LogIn from './components/LogIn/LogIn';
import LogOut from './components/LogOut/LogOut';





class App extends Component {
  constructor(props){
    super(props);
    this.handleLoginClick= this.handleLoginClick.bind(this);
    this.handleLogoutClick= this.handleLogoutClick.bind(this);
    this.state = {
      user: true, 
    }
  }

  handleLoginClick() {
    this.setState({user: true});
  }

  handleLogoutClick() {
    this.setState({user: false});
  }
  render() {
    const user = this.state.user;
    let button;
    if(user) {
      button = <LogOut onClick={this.handleLogoutClick}/>;
    } else {
      button = <LogIn onClick={this.handleLoginClick}/>;
    }
    return (
        <div>
            <Navbar/>
            {button}
        </div>
    );
  }
}

export default App;
