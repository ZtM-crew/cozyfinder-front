import React from 'react';


class TomTomMap extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            map: null
        }
    }


    componentDidMount() {

        let {lat, long} = this.props

        const script = document.createElement('script');

        script.src = process.env.PUBLIC_URL + '/map_sdk/tomtom.min.js';
        document.body.appendChild(script);
        script.async = true;
        script.onload = () => {

            this.setState({map: window.tomtom.L.map('map', {
                    source: 'vector',
                    key: 'HepOBha6a6Qpm1KKkLvT88hpHEmOKSed',
                    center: [lat, long],
                    basePath: '/map_sdk',
                    zoom: 14

            })});
        }

    }

    componentDidUpdate(prevProps) {

        if(prevProps.lat !== this.props.lat || prevProps.long !== this.props.long) {
            this.state.map.setView([this.props.lat, this.props.long], 14);
        }
    }


    render() {

        return <div id='map'></div>

    }
}

export default TomTomMap;
