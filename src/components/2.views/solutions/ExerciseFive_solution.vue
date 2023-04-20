<template>
  <div class="joke-container">
    <h1>Add new joke</h1>

    <form>
      <input v-model="jokeTitle" placeholder="Joke title" />
      <textarea v-model="jokePunchline" placeholder="Punchline"></textarea>

      <button @click.prevent="addJokeToStore">Add joke</button>
    </form>

    <section>
      <h2>My Jokes</h2>

      <div v-if="jokes.length">
        <ExerciseOne v-for="joke in jokes" :key="joke.id" :joke="joke" />
      </div>
      <div v-else>
        <p>No jokes found. Please add some jokes. Thanks :)</p>
      </div>
    </section>
  </div>
</template>

<script>
import { useJokeStore } from '@/stores/exerciseFive';
import ExerciseOne from '@/components/2.views/ExerciseOne.vue';
import { mapState, mapActions } from 'pinia';

export default {
  name: 'Exercise 5',
  data() {
    return {
      jokeTitle: '',
      jokePunchline: '',
    };
  },
  components: {
    ExerciseOne,
  },
  computed: {
    ...mapState(useJokeStore, ['jokes']),
    jokeToAdd() {
      return {
        id: this.jokes.length + 1,
        story: this.jokeTitle,
        punchLine: this.jokePunchline,
      };
    },
  },
  methods: {
    ...mapActions(useJokeStore, ['addJoke']),
    addJokeToStore() {
      this.addJoke(this.jokeToAdd);

      // Reset the form
      this.jokeTitle = '';
      this.jokePunchline = '';
    },
  },
};

// #Exercise 5
// Summary: This exercise is aimed at introducing you to Pinia
// Story: An an user I would like to have all my jokes being handled and stored in my Pinia store.
//        I would also like to have the ability to "add" new jokes.

// This exercise will feature:
// - Pinia module
// - use of getter / action and state
// - Pinia Integration in the component

//Steps
// - Create a new file within the stores folder
// - Load the new module and re-export within the stores/index.js
// - Create an action / state to fetch the jokes
// - Change the ExerciseTwo to trigger the action
// - Change exerciseTwo to load jokes from the stores
// - Use this file to create a simple component to "ADD jokes"
// - Call required Pinia Action to "add" joke to the state

//EXTRA
// - Use v-model with Pinia to add a new joke
// - Add a watcher in the ExerciseTwo to trigger a "log" when Jokes changes
// - Change the values in the chrome/firefox debugger
</script>

<style lang="scss" scoped>
.joke-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    display: block;
  }

  input,
  textarea {
    width: 20rem;
  }

  button {
    margin-top: 2rem;
    width: 10rem;
  }

  section {
    border-radius: 8px;
    border: 1px solid black;
    padding: 2rem;
    width: 100%;
    max-width: 50rem;
    min-height: 50vh;
    margin: 2rem;
  }
}
</style>
