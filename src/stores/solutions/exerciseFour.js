import { defineStore } from 'pinia';
import { getJoke, getJokes } from '../../assets/jokes';

export const useJokeStore = defineStore('joke', {
  state: {
    jokes: [],
  },
  getters: {
    getJoke: (state) => (id) => state.jokes.find((joke) => joke.id === id), //to use a getter, we need to make sure that jokes are always retrieved on load!
  },
  actions: {
    async getJokes() {
      const jokes = await getJokes();
      this.jokes = jokes;
    },
    async getJoke(joke_id) {
      const joke = await getJoke(joke_id); //we can use this approach in the case in which we do not want to retrieve the full list on load
      return joke;
    },
  },
});
