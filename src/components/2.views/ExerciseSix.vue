<template>
  <article>
    <h1 style="color: black">This is your list of jokes</h1>
    <div v-if="jokes.length === 0">Hm.. thinking of some jokes..</div>
    <section v-else>
      <ExerciseOne v-for="joke in jokes" :key="joke.id" :v-bind="joke" />
    </section>
  </article>
</template>

<script>
//# Exercise 6
// Summary: This exercise is aimed at introducing you to Vue Composition API
// Convert this component to use the composition API
import { fetchJokes } from '@/assets/jokes.js';
import ExerciseOne from './ExerciseOne_solution';

export default {
  name: 'ExerciseSix',
  components: {
    ExerciseOne,
  },
  data() {
    return {
      jokes: [],
    };
  },
  computed: {},
  async mounted() {
    this.jokes = await fetchJokes();
  },
};
</script>

<style></style>
