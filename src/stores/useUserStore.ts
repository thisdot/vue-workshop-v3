import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    username: localStorage.getItem('vue-training-username') || '',
    peferredLanguage: 'en',
  }),
  getters: {
    isLoggedIn: (state) => !!state.username,
  },
  actions: {
    login(username: string) {
      return new Promise((resolve) => {
        setTimeout(() => {
          localStorage.setItem('vue-training-username', username);

          this.username = username;

          resolve(username);
        }, 500);
      });
    },
    async logout() {
      localStorage.removeItem('vue-training-username');
      this.username = '';
    },
  },
});
