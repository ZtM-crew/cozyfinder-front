import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import LogIn from './components/LogIn/LogIn';
import Profile from './components/Profile/Profile';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import SearchBar from './components/SearchBar/SearchBar';
import Map from './components/Map/Map';
import List from './components/List/list';

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
            keypress: null,

            // Filter states
            bed: 0,
            bath: 0,
            type: 'any',
            garage: 'no',
            //-----------

            // Maps
            details: [],
            loc: [40.716906,-73.988429],
            error: 0

        }

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

        switch(event.keyCode){
            case 13:
                return this.searchButton();
            case 46:
                event.target.value = null;
                break;
            default:
                break;
        }


        //console.log(event.keyCode)

    };

    bedInput = (e) => {this.setState({ bed: e.target.value})};

    bathInput = (e) => {this.setState({ bath: e.target.value})};

    typeChange = (e) => {this.setState({type: e.target.value})};

    garageChange = (e) => {this.setState({garage: e.target.value})};


    async searchButton() {

        /** When the button clicked it back-end sends all the neighbourhood data of New York. If any of the
         * received name equal to the one in the searchfield, its GPS location will recorded in the State **/

        const {searchField} = this.state;

        /**
         Fetch URL connected to Heroku by default, if you want to run the backend as local,
         replace only the domains and keep the path:
         Example: fetch('http://localhost:3000/search/new york')
         **/

        const FETCH_URI = 'https://cozy-back.herokuapp.com/search/new york';
        //const FETCH_URI = 'http://localhost:3000/search/new york';

        const response = await fetch(FETCH_URI);

        const data = await response.json();


        /** Searching for the location provided by the user in the searchfield **/
        /** Database includes locations name as capitalized, to avoid errors need to capitalized the user input too  **/
        /** result will include the neighbourhood object if there is a match **/

        let result = data['resultList'].find(el => el['name']['_text'] === this.capitalize(searchField))

        /** As the search is successful the following statement gets the necessary datas from the object
         * and updates the state to send them to the corresponding components
         * Ex: gps location, neighborhood name and value
         * In a case there is no match, user will be notified
         **/

        if(result !== undefined) {

            const gps = [ result['latitude']['_text'], result['longitude']['_text'] ]
            const name = result['name']['_text']
            const price = (result['zindex']) ? result['zindex']['_text'] : 'Currently not available'

            this.setState({details: [name, price]})
            this.setState({loc: gps})
            this.setState({error: 0})


        }else{
            console.log('Location not found')
            this.setState({error: 1})
        }




    }


    capitalize(str) {

        /** Taking the string from the searchfield, separate them by words, makes every word's first letter uppercase
         * and lowercase the rest, finally put them together. **/

        let split = str.split(' ')
        for(let i=0; i<split.length; i++){
            split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1).toLowerCase()
        }
        return split.join(' ')
    }


    render() {
        const { route, loc, value, details, error } = this.state;

        let SEARCHBAR = <SearchBar searchChange={this.onSearchChange}
                                   bedInput={this.bedInput}
                                   bathInput={this.bathInput}
                                   typeChange = {this.typeChange}
                                   garageChange = {this.garageChange}
                                   searchButton = {this.searchButton}
                                   error={error}

        />;

        let MAP = <Map loc={loc} value={value} details={details}/>;

        return (
            <div>
                <Title />
                {SEARCHBAR}
                {MAP}
            </div>
        );

        // return (
        //     <div>
        //         <Title />
        //
        //
        //         { route === 'landing'
        //             ? <div>
        //                 <LogIn login={this.handleLoginClick} />
        //                 {SEARCHBAR}
        //                 {MAP}
        //             </div>
        //             : ( route === 'signin'
        //                     ? <Form submit={this.handleSubmit} />
        //                     : (
        //                         <div>
        //                             <Navbar logout={this.handleLogoutClick} />
        //                             <Profile />
        //                             {SEARCHBAR}
        //                             {MAP}
        //                         </div>
        //
        //                     )
        //             )
        //         }
        //
        //
        //
        //     </div>
        // );
    }

}

export default App;
