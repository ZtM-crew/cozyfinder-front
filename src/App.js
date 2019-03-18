import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import LogIn from './components/LogIn/LogIn';
import Profile from './components/Profile/Profile';
import Title from './components/Title/Title';
import Form from './components/Form/Form';





class App extends Component {
  constructor(props){
    super(props);
    this.handleLoginClick= this.handleLoginClick.bind(this);
    this.handleLogoutClick= this.handleLogoutClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      route: 'landing',
    }
  }

  handleLoginClick() {
    this.setState({route: 'signin'});
  }

  handleLogoutClick() {
    this.setState({route: 'landing'});
  }

  handleSubmit() {
    this.setState({route: 'loggedin'});
  }

  

  render() {
    const { route } = this.state;

    return (
      <div>
        <Title />

        { route === 'landing'
          ? <LogIn login={this.handleLoginClick} />
          : ( route === 'signin'
              ? <Form submit={this.handleSubmit} />
              : ( 
                  <div>
                      <Navbar logout={this.handleLogoutClick} />
                      <Profile />
                   </div>

                )
            )
        }

      </div>
    );
  }
      
}

export default App;