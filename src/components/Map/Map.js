import React from 'react';
import './Map.css';


class Map extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const script = document.createElement('script');

        script.src = process.env.PUBLIC_URL + '/map_sdk/tomtom.min.js';
        document.body.appendChild(script);
        script.async = true;
        script.onload = function () {

            window.tomtom.L.map('map', {
                source: 'vector',
                key: 'HepOBha6a6Qpm1KKkLvT88hpHEmOKSed',
                center: [40.716906, -73.988429],
                basePath: '/map_sdk',
                zoom: 12

            });

        }
    }

    render() {

        return <div id = 'map'></div>

    }
}

export default Map;
