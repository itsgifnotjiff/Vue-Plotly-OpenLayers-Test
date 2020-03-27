<template>
  <div id="app">
    <v-container fluid class="text-center">
      <v-btn slot="activator" @click="show = !show"></v-btn>
    </v-container>
    <v-card v-if="show">
      <v-card-title>Title</v-card-title>
      <v-card-subtitle>Subtitle</v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    }
  }
</script>
