import axios from 'axios';

const state = {


    portfolioData: [],
    mapName: 'google-map',
    dostepnoscData: [],
    mapyData: [],
    map: null,
    bounds: null,
    markers: [],
    labels: [],


};

const getters = {

    getPortfolioData: (state) => {
       // console.log(state.portfolioData);
        return state.portfolioData;
    },
    getDostepnoscData: (state) => {
        // console.log(state.portfolioData);
        return state.dostepnoscData;
    },
    getMapyData: (state) => {
        // console.log(state.portfolioData);
        return state.mapyData;
    },
    getLabelsData: (state) => {
        // console.log(state.portfolioData);
        return state.mapyLabels;
    }


};

const mutations = {

    showPortfolio(state,data) {
        state.portfolioData = data;
    },
    showDostepnosc(state,data) {
        state.dostepnoscData = data;
    },
    showMapy(state,data) {

        for(let lokalizacje of data) {

            state.mapyData.push({
                latitude: lokalizacje.acf.adres.lat,
                longitude: lokalizacje.acf.adres.lng
            });

            state.labels.push(lokalizacje.title.rendered)


        }

        state.bounds = new google.maps.LatLngBounds();
        const element = document.getElementById(state.mapName);
        const mapCentre = state.mapyData[0];

        const options = {
            center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude),
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#c9c9c9"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                }
            ]
        };
        var labelIndex = 0;
        this.map = new google.maps.Map(element, options);
        state.mapyData.forEach((coord) => {
            const position = new google.maps.LatLng(coord.latitude, coord.longitude);
            const marker = new google.maps.Marker({
                position,
                map: this.map,
                icon: '/wp-content/plugins/chiliit/ikona.png',
                title: state.labels[labelIndex++]
            });
            state.markers.push(marker);
            this.map.fitBounds(state.bounds.extend(position))
        });

    },


};

const actions = {
    getPortfolio({commit}){
        axios.get(wp_rest_api.base_url + 'avada_portfolio?_embed')
            .then( success => {
                //console.log(success.data);
                commit('showPortfolio',success.data)
            })
            .catch( error => console.log(error))
        },
    getDostepnosc({commit}){
        axios.get(wp_rest_api.base_url + 'dostepnosc-api?_embed')
            .then( success => {
                //console.log(success.data);
                commit('showDostepnosc',success.data)
            })
            .catch( error => console.log(error))
    },
    getMapy({commit}){
        axios.get(wp_rest_api.base_url + 'lokalizacja-api?_embed')
            .then( success => {
                //console.log(success.data);
                commit('showMapy',success.data)




            })
            .catch( error => console.log(error))
    }




};

export default {

    namespaced:true,
    state,
    getters,
    mutations,
    actions
}
