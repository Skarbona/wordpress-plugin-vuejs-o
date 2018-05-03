import axios from 'axios';

const state = {


    portfolioData: [],


};

const getters = {

    getPortfolioData: (state) => {
       // console.log(state.portfolioData);
        return state.portfolioData;
    }

};

const mutations = {

    showPortfolio(state,data) {
        state.portfolioData = data;
    },

};

const actions = {
    getPortfolio({commit}){

        axios.get(wp_rest_api.base_url + 'avada_portfolio?per_page=100')
            .then( success => {
                //console.log(success);
                commit('showPortfolio',success.data)
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
