<template>
  <article>
    <h1 style="color: black">This is your list of jokes</h1>
    <div v-if="jokes.length === 0">Hm.. thinking of some jokes..</div>
    <section v-else>
      <ExerciseOne v-for="joke in jokes" :key="joke.id" :v-bind="joke" />
    </section>
  </article>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchJokes } from '@/assets/jokes.js';
import ExerciseOne from './ExerciseOne_solution';

const jokes = ref([]);

onMounted(async () => {
  await fetchJokes();
});
</script>

<style></style>
