import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import LogIn from './components/LogIn/LogIn';
import Profile from './components/Profile/Profile';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import SearchBar from './components/SearchBar/SearchBar';
import Map from './components/Map/Map';



class App extends Component {

  constructor(props){
    super(props);
    this.handleLoginClick= this.handleLoginClick.bind(this);
    this.handleLogoutClick= this.handleLogoutClick.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);



    this.state = {
      route: 'landing',
      searchField: '',

      // Filter states
      bed: 0,
      bath: 0,
      type: 'any',
      garage: 'no',
      //-----------





    };

    // If Bed or Bath value = 0, means no additional filtering, input limited between 1 to 50


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
  };

  bedInput = (e) => {
    this.setState({ bed: e.target.value});

  };

  bathInput = (e) => {
    this.setState({ bath: e.target.value});

  };

  typeChange = (e) => {
    this.setState({type: e.target.value});

  };

  garageChange = (e) => {
    this.setState({garage: e.target.value});

  };











  render() {
    const { route } = this.state;

    let SEARCHBAR = <SearchBar searchChange={this.onSearchChange}
                               bedInput={this.bedInput}
                               bathInput={this.bathInput}
                               typeChange = {this.typeChange}
                               garageChange = {this.garageChange}
    />;

    let MAP = <Map />;

    return (
      <div>
        <Title />



        { route === 'landing'
          ? <div>
              <LogIn login={this.handleLoginClick} />
              {SEARCHBAR}
              {MAP}
            </div>
          : ( route === 'signin'
              ? <Form submit={this.handleSubmit} />
              : ( 
                  <div>
                      <Navbar logout={this.handleLogoutClick} />
                      <Profile />
                      {SEARCHBAR}
                      {MAP}
                   </div>

                )
            )
        }



      </div>
    );
  }
      
}

export default App;
