<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/ECCCLogo.png"
          transition="scale-transition"
          width="400"
        />
      </div>

      <v-spacer></v-spacer>
        <v-btn outlined to="/">
            <v-icon>home</v-icon>
        </v-btn>
        <v-btn outlined to="/about">
            <v-icon>help_outline</v-icon>
        </v-btn>
        <v-btn outlined to="/vuetify_playroom">
          Vuetify <v-icon>style</v-icon>
        </v-btn>
        <v-btn outlined to="/plotly_playroom">
          Plotly <v-icon>scatter_plot</v-icon>
        </v-btn>
        <v-btn outlined to="/openlayers_playroom">
          OpenLayers 6 <v-icon>map</v-icon>
        </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>    
    </v-content>

    
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  // components: {
  //   HelloWorld
  // },

  data: () => ({
    //
  }),
};
</script>


