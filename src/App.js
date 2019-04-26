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
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.searchButton = this.searchButton.bind(this);



        this.state = {
            route: 'landing',
            searchField: '',

            // Filter states
            bed: 0,
            bath: 0,
            type: 'any',
            garage: 'no',
            //-----------

            // Maps
            latitude: 40.716906,
            longitude: -73.988429



        };

        /** If Bed or Bath value = 0, means no additional filtering, input limited between 1 to 50 **/

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
        //console.log(this.state)
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

    async searchButton() {

        /** When the button clicked it back end sends all the neighbourhood data of New York. If any of the
         * received name equal to the one in the searchfield, its GPS location will recorded in the State **/

        const {searchField} = this.state;

        const response = await fetch('http://localhost:3000/search/new york');
        const data = await response.json();


        for(let i=0; i<data['resultList'].length; i++){
            if(searchField === data['resultList'][i]['name']['_text'].toLowerCase()) {
                const lat = data['resultList'][i]['latitude']['_text']
                const long = data['resultList'][i]['longitude']['_text']

                console.log(data['resultList'][i]['name']['_text'], lat, long)


                this.setState({latitude: lat})
                this.setState({longitude: long})
            }
            //console.log(data['resultList'][i]['name']['_text'])     //listing all the New York neighbourhoods name
        }
        console.log(this.state)

    }


    render() {
        const { route, latitude, longitude } = this.state;

        let SEARCHBAR = <SearchBar searchChange={this.onSearchChange}
                                   bedInput={this.bedInput}
                                   bathInput={this.bathInput}
                                   typeChange = {this.typeChange}
                                   garageChange = {this.garageChange}
                                   searchButton = {this.searchButton}
        />;

        let MAP = <Map lat={latitude} long={longitude}/>;

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
