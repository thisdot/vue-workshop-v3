<template>
  <Authenticated page-sub-title="Dashboard" @logout="handleLogout">
    <nav>
      <router-link to="/dashboard" class="link">Articles</router-link>
      <router-link to="/dashboard/create" class="link">Create New</router-link>
    </nav>
    <router-view />
  </Authenticated>
</template>

<script>
// @ is an alias to /src
import Authenticated from '@/components/1.layouts/Authenticated.vue';
import { mapActions } from 'pinia';
import { useUserStore, useArticleStore } from '@/stores';

export default {
  name: 'Dashboard',
  components: { Authenticated },
  async created() {
    await this.getArticles();
  },
  methods: {
    ...mapActions(useUserStore, ['logout']),
    ...mapActions(useArticleStore, ['getArticles']),
    async handleLogout() {
      await this.logout();
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped></style>
