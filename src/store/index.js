import vue from 'vue';
import Vuex from 'vuex';

vue.use(Vuex);

const state = {
    mind_data: []
};

const getters = {
    get_mind_data(state) {
        return state.mind_data;
    }
};

const mutations = {
    set_mind_data(state, value) {
        state.mind_data = value;
    },
};

const actions = {
    set_mind_data(context, value) {
        context.commit('set_mind_data', value);
    },
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store;
