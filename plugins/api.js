// import Vue from "vue";
import * as Services from '@/services'
export default ({ $axios }, inject) => {
  const baseAxios = $axios.create({
    baseURL: 'http://localhost:8080/',
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  // Initialize API factories
  const factories = {
    card : Services.Cards(baseAxios),
  }

  // Inject $api
  inject('api', factories)
};
