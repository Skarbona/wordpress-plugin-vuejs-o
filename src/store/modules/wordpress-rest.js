import axios from 'axios';

const state = {

    testValue: 'Testowa wartość, aby sprawdzić czy wszystko działa',
    portfolioData: []

};

const getters = {
    getTestValue: (state) => {
        return state.testValue;
    },
    getPortfolioData: (state) => {
        console.log(state.portfolioData);
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
                console.log(success);
                commit('showPortfolio',success)
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
