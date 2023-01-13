<template>
  <div class="Article">
    <h3>{{ title }}</h3>
    <button @click.prevent="archive">Archive Article</button>
    <p>{{ content }}</p>
  </div>
</template>

<script>
// TODO: Replace this with pinia
// import { mapActions } from 'vuex';

export default {
  name: 'MyArticle',
  data() {
    return {
      article: null,
    };
  },
  computed: {
    title() {
      return this.article && this.article.title;
    },
    content() {
      return this.article && this.article.content;
    },
  },
  created() {
    this.article = this.$store.getters.getArticle(
      this.$route.params.article_id
    );
  },
  methods: {
    // Deviation start: use pinia here instead of vuex
    archiveArticle() {},
    // ...mapActions(['archiveArticle']),
    // Deviation end
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
