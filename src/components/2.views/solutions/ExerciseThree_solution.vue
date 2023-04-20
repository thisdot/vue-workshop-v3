<template>
  <article>
    <h1 style="color: black">This is your list of jokes</h1>
    <div v-if="jokes.length === 0">Hm.. thinking of some jokes..</div>
    <section v-else>
      <ExerciseOne v-for="joke in jokes" :key="joke.id" :joke="joke" />
    </section>
  </article>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchJokes } from '@/assets/jokes.js';
import ExerciseOne from './ExerciseOne.vue';

// Composition function (Composable)
const useJokes = () => {
  const jokes = ref([]);

  const fetchAndSetJokes = async () => {
    jokes.value = await fetchJokes();
  };

  return {
    jokes,
    fetchAndSetJokes,
  };
};

const { jokes, fetchAndSetJokes } = useJokes();

onMounted(async () => {
  await fetchAndSetJokes();
});
</script>

<style></style>
