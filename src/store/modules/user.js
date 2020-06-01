import axios from 'axios';

const state = {
  user: {
    username: '',
    loggedIn: false,
  },
};

const getters = {
  user: (_state) => _state.user,

};

const actions = {

  async login({ commit }, username, password) {
    const form = {
      username,
      password,
    };
    const res = await axios.post('http://localhost:1234/login', form);
    commit('setUser', username);
    return res;
  },
};

const mutations = {
  // eslint-disable-next-line
  setUser: (_state, username) => {
    // eslint-disable-next-line
    _state.user.loggedIn = true;
    // eslint-disable-next-line
    _state.user.username = username;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,

};
