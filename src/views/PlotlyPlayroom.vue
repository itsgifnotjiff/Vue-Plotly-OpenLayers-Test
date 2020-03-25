<template>
  <div>
    <h1>Plotly Playroom</h1>
    <v-container>
      <Plotly :data="data1" :layout="layout1" :display-mode-bar="true"></Plotly>
    </v-container>

    <v-container>
      <Plotly :data="data" :layout="layout" :config="config" :display-mode-bar="true"></Plotly>
    </v-container>
  </div>
  
</template>

<script>
  import { Plotly } from 'vue-plotly'
  import Tester from './plotly-test'

  export default {
    components: {
      Plotly
    },
    data() {
      return {
        data: Tester.data,
        layout: Tester.layout,
        config: Tester.config,
        data1:[{
        x: [1,2,3,4],
        y: [10,15,13,17],
        type:"scatter"
        }],
        layout1:{
          title: "My graph"
        }
      }
    }
  }
  
</script>