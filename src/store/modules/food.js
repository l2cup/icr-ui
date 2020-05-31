
const state = {
  foods: [{
    id: 1,
    picUrl: 'https://picsum.photos/600/400',
    name: 'Neka hrana',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 510,
    ratings: 5,

  },
  {
    id: 2,
    picUrl: 'https://picsum.photos/600/400',
    name: 'Neka hrana',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 430,
    ratings: 4,

  },
  {
    id: 3,
    picUrl: 'https://picsum.photos/600/400',
    name: 'Neka hrana',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 320,
    ratings: 4,

  },
  ],

};

const getters = {
  foods: (_state) => _state.foods,

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
