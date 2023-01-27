import { defineStore } from 'pinia';
import getArticles from '../assets/articles';

const getRandomArticleId = (length) => Math.floor(Math.random() * length) + 1;

export const useArticleStore = defineStore('article', {
  state: () => ({
    articles: [],
    archivedArticles: [],
  }),
  getters: {
    getArticle: (state) => (id) =>
      state.articles.find((article) => article.id === parseInt(id)),
    randomArticle: (state) => {
      if (state.articles.length === 0) return;
      const randomArticleId = getRandomArticleId(state.articles.length);
      return state.articles.find((article) => article.id === randomArticleId);
    },
  },
  actions: {
    async getArticles() {
      const articles = await getArticles();

      this.articles = articles || this.articles;
    },
    archiveArticle(article_id) {
      const articleIndex = this.articles.findIndex(
        (article) => article.id == article_id
      );

      if (articleIndex < 0) return;

      const article = this.articles[articleIndex];

      this.articles.splice(articleIndex, 1);
      this.archivedArticles = [...this.articles, article];
      return true;
    },
    addArticle(article) {
      article = { id: this.articles.length + 1, ...article };
      this.articles = [...this.articles, article];
    },
  },
});
