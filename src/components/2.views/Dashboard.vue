<template>
  <Authenticated page-sub-title="Dashboard">
    <DashboardDefault />
  </Authenticated>
</template>

<script>
// @ is an alias to /src
import Authenticated from '@/components/1.layouts/Authenticated.vue';
import DashboardDefault from '@/components/3.sections/dashboard/Default.vue';

export default {
  nam: 'Dashboard',
  components: { Authenticated, DashboardDefault },
};
</script>

<style lang="scss" scoped></style>
