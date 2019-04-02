import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import LogIn from './components/LogIn/LogIn';
import Profile from './components/Profile/Profile';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import SearchBar from './components/SearchBar/SearchBar';





class App extends Component {
  constructor(props){
    super(props);
    this.handleLoginClick= this.handleLoginClick.bind(this);
    this.handleLogoutClick= this.handleLogoutClick.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);


    this.state = {
      route: 'landing',
      searchField: ''
    };

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

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value})
  }







  render() {
    const { route } = this.state;

    let SEARCHBAR = <SearchBar searchChange={this.onSearchChange} />;

    return (
      <div>
        <Title />



        { route === 'landing'
          ? <div>
              <LogIn login={this.handleLoginClick} />
              {SEARCHBAR}
            </div>
          : ( route === 'signin'
              ? <Form submit={this.handleSubmit} />
              : ( 
                  <div>
                      <Navbar logout={this.handleLogoutClick} />
                      <Profile />
                      {SEARCHBAR}
                   </div>

                )
            )
        }



      </div>
    );
  }
      
}

export default App;
