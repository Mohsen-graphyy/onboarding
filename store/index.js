import vuex from "vuex";
import * as modules from "./modules/mainpage";
import * as cardlist from "./modules/cardlist";

const createStore = () => {
  return new vuex.Store({
    modules: {
      mainpage: modules,
      cardlist : cardlist
    },
  });
};

export default createStore;
