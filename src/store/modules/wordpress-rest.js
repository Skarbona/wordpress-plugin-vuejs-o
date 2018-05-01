import axios from 'axios';

const state = {

   testValue: 'Testowa wartość, aby sprawdzić czy wszystko działa'

};

const getters = {
    getTestValue: (state) => {
        return state.testValue;
    }
};

export default {

    namespaced:true,
    state,
    getters
}
