<template>
  <Static title="Exercise three">
    <router-view />
  </Static>
</template>

<script>
// #Exercise 4
// Summary: This exercise is aimed at introducing you to Pinia
// Story: An an user I would like to have all my jokes being handled and stored in my Pinia store.
//        I would also like to have the ability to "add" new jokes.

// This exercise will feature:
// - Pinia module
// - use of getter / action and state
// - Pinia Integration in the component

//Steps
// - Create a new file within the store/modules folder
// - Load the new module within the store/index.js
// - Create an action / state to fetch the jokes
// - Change the ExerciseTwo to trigger the action
// - Change exerciseTwo to load jokes from the store
// - Use this file to create a simple component to "ADD jokes"
// - Call required Pinia Action to "add" joke to the state

//EXTRA
// - Use v-model with Pinia to add a new joke
// - Add a watched in the ExerciseTwo to trigger a "log" when Jokes changes
// - Change the values in the chrome/firefox debugger
</script>

<style></style>
