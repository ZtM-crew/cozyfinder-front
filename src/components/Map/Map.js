import React from 'react';
import TomTomMap from './TomTomMap/TomTomMap';
import './Map.css';
import List from './List/List';


class Map extends React.Component {


    render() {

        const {lat, long} = this.props;

        console.log('Map', lat, long)

        return(
            <div style={{position: 'relative', overflow:'auto'}}>
                {/*<List searchRes={this.props.searchRes}/>*/}
                <TomTomMap lat={lat} long={long} />
            </div>
        )
    }
}

export default Map;