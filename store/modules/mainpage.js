export const namespaced = true;

export const state = () => ({
    isClicked: false,
  });
  
  export const mutations = {
    SET_IS_CLICKED(state) {
      console.log('before in mutation'+ state.isClicked);
      state.isClicked = true;
      console.log('after in mutation'+ state.isClicked);
    },
  };
  
  export const actions = {
    setIsClicked({ commit }) {
      commit("SET_IS_CLICKED");
    },
  };