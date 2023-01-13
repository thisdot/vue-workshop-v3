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
// TODO: Replace this with pinia
// import { mapGetters } from 'vuex';
import LogMixin from '@/mixins/Log.mixin';

export default {
  name: 'Home',
  mixins: [LogMixin],
  components: { Static },
  computed: {
    // Deviation start: use pinia here instead of vuex
    isLoggedIn() {
      return true;
    },
    // ...mapGetters(['isLoggedIn']),
    // Deviation end
  },
  created() {
    this.log('Logging from inside Home View');
  },
};
</script>
