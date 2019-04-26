import React from 'react';
import './Map.css';


/**
 * Map API below. Its initial state GPS location is from the App.js state.
 *
 * Current bug: App updating the new GPS location to its state, Map state takes it but does not refresh the MAP component
 * with the new data. Bug may be in the componentWillUpdate() function.
 **/

class Map extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            latitude: this.props.lat,
            longitude: this.props.long
        }

    }



    componentDidMount() {

        let {latitude, longitude} = this.state

        const script = document.createElement('script');

        // let lat = this.props.lat
        // let long = this.props.long

        script.src = process.env.PUBLIC_URL + '/map_sdk/tomtom.min.js';
        document.body.appendChild(script);
        script.async = true;
        script.onload = function () {

            window.tomtom.L.map('map', {
                source: 'vector',
                key: 'HepOBha6a6Qpm1KKkLvT88hpHEmOKSed',
                center: [latitude, longitude],
                basePath: '/map_sdk',
                zoom: 16

            });

        }


    }

    componentWillUpdate() {

        let {latitude, longitude} = this.state

        let lat = this.props.lat
        let long = this.props.long


        if(latitude != lat) {


            this.setState({latitude: lat})
            this.setState({longitude: long})

            //setstate not working


            console.log('map', this.state)
            console.log('props', this.props.long, long)

        }


    }



    render() {

        return <div id = 'map'></div>

    }
}

export default Map;
