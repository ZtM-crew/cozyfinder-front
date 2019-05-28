import React from 'react';


class TomTomMap extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            map: null
        }
    }


    componentDidMount() {

        let {loc} = this.props

        const script = document.createElement('script');

        script.src = process.env.PUBLIC_URL + '/map_sdk/tomtom.min.js';
        document.body.appendChild(script);
        script.async = true;
        script.onload = () => {

            this.setState({map: window.tomtom.L.map('map', {
                    source: 'vector',
                    key: 'HepOBha6a6Qpm1KKkLvT88hpHEmOKSed',
                    center: loc,
                    basePath: '/map_sdk',
                    zoom: 14

            }) });
        }



    }

    componentDidUpdate(prevProps) {

        if(prevProps.loc !== this.props.loc) {
            this.state.map.setView(this.props.loc, 16);
            this.addMarker()

        }
    }

    addMarker() {

        const name = this.props.details[0]
        const value = (this.props.details[1] === 'Currently not available') ? this.props.details[1] : `$${this.props.details[1]}`

        const info = `<h2>${name}</h2><p style="font-size: 15px">Average value: ${value}</p>`

        window.tomtom.L.marker(this.props.loc)
            .addTo(this.state.map)
            .bindPopup(info).openPopup()
    }



    render() {

        return <div id='map'></div>

    }
}

export default TomTomMap;
