//Imports
import Vue from 'vue';
import Vuex from 'vuex'
import wordpressRest from './modules/wordpress-rest';

//Use
Vue.use(Vuex);

//Main Export
export default new Vuex.Store({

    modules: {
        wordpressRest
    }

});

