
const state = {
  restaurants: [{
    id: 1,
    picUrl: 'https://picsum.photos/600/400',
    name: 'Neki restoran',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 5,
    quality: 5,
  },
  {
    id: 2,
    picUrl: 'https://picsum.photos/600/400',
    name: 'Neki restoran',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 4,
    quality: 4.0,
  },
  {
    id: 3,
    picUrl: 'https://picsum.photos/600/400',
    name: 'Neki restoran',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 4,
    quality: 4.0,
  },
  ],
};

const getters = {
  restaurants: (_state) => _state.restaurants,
};

const actions = {

};

const mutations = {

};

export default {
  state,
  getters,
  actions,
  mutations,
};
