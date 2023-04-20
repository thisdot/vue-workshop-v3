import { defineStore } from 'pinia';

export const useJokeStore = defineStore('joke', {
  state: () => ({
    jokes: [],
  }),
  getters: {
    getJoke: (state) => (id) => state.jokes.find((joke) => joke.id === id), //to use a getter, we need to make sure that jokes are always retrieved on load!
  },
  actions: {
    addJoke(joke) {
      this.jokes.push(joke);
    },
    // Mention that actions can be async too
  },
});
