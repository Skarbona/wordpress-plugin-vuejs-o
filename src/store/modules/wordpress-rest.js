import axios from 'axios';

const state = {


    portfolioData: [],
    dostepnoscData: [],


};

const getters = {

    getPortfolioData: (state) => {
       // console.log(state.portfolioData);
        return state.portfolioData;
    },
    getDostepnoscData: (state) => {
        // console.log(state.portfolioData);
        return state.dostepnoscData;
    }


};

const mutations = {

    showPortfolio(state,data) {
        state.portfolioData = data;
    },
    showDostepnosc(state,data) {
        state.dostepnoscData = data;
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
                console.log(success.data);
                commit('showDostepnosc',success.data)
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
