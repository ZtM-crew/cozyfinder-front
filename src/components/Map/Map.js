import React from 'react';
import TomTomMap from './TomTomMap/TomTomMap';
import './Map.css';
import List from './List/List';


class Map extends React.Component {


    render() {

        const {loc, value, details} = this.props;

        return(
            <div style={{position: 'relative', overflow:'auto'}}>
                {/*<List searchRes={this.props.searchRes}/>*/}
                <TomTomMap loc={loc} value={value} details={details}/>
            </div>
        )
    }
}

export default Map;