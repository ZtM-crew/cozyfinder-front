import React from 'react';
import TomTomMap from './TomTomMap/TomTomMap'
import './Map.css';

class Map extends React.Component {


    render() {

        const {lat, long} = this.props;

        //console.log('Map', lat, long)

        return(
           <TomTomMap lat={lat} long={long} />
        )
    }
}

export default Map;