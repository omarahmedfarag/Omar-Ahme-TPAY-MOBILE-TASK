import { createStore } from "vuex";
import axios from "axios";
// Create a new store instance.
const store = createStore({
  state() {
    return {
      data: [],
    };
  },
  mutations: {
    async fetchData(state) {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
            params: {tag: '3d.mmorpg.fantasy.pvp', platform: 'pc'},
            headers: {
              'x-rapidapi-key': '351bcb2bd2mshd16cdb4c373a632p12e054jsn9834cac5b6fa',
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
          };
          const res=await axios.request(options);
          state.data=res.data;
    },
  },
  getters: {
    getAllGames (state) {
      return state.data;
    }
  }
});

export default store;
