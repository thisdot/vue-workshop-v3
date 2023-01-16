<template>
  <Static title="Home">
    <div v-if="!isLoggedIn">
      <p>Please login</p>
      <nav>
        <router-link to="/login">Login</router-link>
        <router-link to="/about" class="link">About</router-link>
      </nav>
    </div>
    <div v-else>
      <p>Welcome</p>
      <router-link to="/dashboard" class="link">Go to Dashboard</router-link>
    </div>
  </Static>
</template>

<script>
// @ is an alias to /src
import Static from '@/components/1.layouts/Static.vue';
import { mapGetters } from 'pinia';
import { useUserStore } from '@/stores';
import LogMixin from '@/mixins/Log.mixin';

export default {
  name: 'Home',
  mixins: [LogMixin],
  components: { Static },
  computed: {
    ...mapGetters(useUserStore, ['isLoggedIn']),
  },
  created() {
    this.log('Logging from inside Home View');
  },
};
</script>
