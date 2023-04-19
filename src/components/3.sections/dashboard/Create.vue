<template>
  <div class="create">
    <h3>Create an Article</h3>
    <label for="title">Title</label>
    <input
      v-model="article.title"
      type="text"
      id="title"
      placeholder="My Awesome article"
    />
    <label for="content">Content</label>
    <textarea
      id="content"
      v-model="article.content"
      placeholder="Some amazing article content"
    />
    <button @click="submit">Create & Redirect</button>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useArticleStore } from '../../../stores';

export default {
  name: 'Create',
  data() {
    return {
      article: {
        title: '',
        content: '',
      },
    };
  },
  components: {},
  methods: {
    ...mapActions(useArticleStore, ['addArticle']),
    submit() {
      this.addArticle(this.article);
      this.$router?.push('/dashboard');
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/global.scss';

.create {
  margin-top: 1rem;

  label {
    display: block;
    font-weight: bold;
    margin-top: 1rem;
  }

  input,
  textarea {
    width: 100%;
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
  }

  textarea {
    resize: vertical;
    min-height: 10rem;
  }

  button {
    display: block;
    margin-top: 15px;
    border: 1px solid $primary;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    text-decoration: none;
  }
}
</style>
