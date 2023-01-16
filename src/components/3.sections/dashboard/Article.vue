<template>
  <div class="Article">
    <h3>{{ title }}</h3>
    <button @click.prevent="archive">Archive Article</button>
    <p>{{ content }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'pinia';
import { useArticleStore } from '@/stores';

export default {
  name: 'MyArticle',
  data() {
    return {
      article: null,
    };
  },
  computed: {
    ...mapState(useArticleStore, ['articles']),
    ...mapGetters(useArticleStore, ['getArticle']),
    title() {
      return this.article && this.article.title;
    },
    content() {
      return this.article && this.article.content;
    },
  },
  async created() {
    /* 
      Ensure that if the page is reloaded and we don't yet have articles loaded for the page, they get loaded in.
      When navigating from articles, this will be skipped and the experience will be fluid but if we load this page on its own, we need to make sure we have the articles loaded in.
    */
    if (!this.articles?.length) {
      await this.getArticles();
    }
    this.article = this.getArticle(this.$route.params.article_id);
  },
  methods: {
    ...mapActions(useArticleStore, ['archiveArticle', 'getArticles']),
    async archive() {
      this.archiveArticle(this.$route.params.article_id);
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  padding-top: 25px;
  text-transform: capitalize;
}

button {
  margin-top: 20px;
  padding: 5px 10px;
  cursor: pointer;
}

p {
  padding-top: 25px;
}
</style>
