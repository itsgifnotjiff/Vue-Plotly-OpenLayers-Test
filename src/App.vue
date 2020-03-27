<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="./assets/ECCCLogo.png"
            transition="scale-transition"
            width="400"/>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" >
        <v-btn
          x-large
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          color="light-green accent-2">
          <v-icon dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-menu bottom :offset-y="offsetY" >
        <template v-slot:activator="{ on: menu }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn
                x-large
                color="light-green accent-2"
                v-on="{ ...tooltip, ...menu }"
              ><v-icon>dynamic_feed</v-icon> Example Pages</v-btn>
            </template>
            <span>Examples</span>
          </v-tooltip>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in dropdownItems"
            :key="index"
            :to="item.path"
          >
            <v-list-item-title>
              <v-icon>{{ item.icon }}</v-icon> {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      </v-toolbar-items>

      


    </v-app-bar>

    <v-content>
      <router-view/>    
    </v-content>

    <v-bottom-navigation>
      <v-img
            class="shrink mr-2"
            contain
            src="./assets/ECCCLogo.png"
            transition="scale-transition"
            width="400"/>

      <v-btn href="https://www.canada.ca/en/environment-climate-change/services/science-technology/centres/quebec.html#cmc">
        <span>CMC-Dorval</span>
        <v-icon>cloud</v-icon>
      </v-btn>

      <v-btn href="https://github.com/itsgifnotjiff/Vue-Plotly-OpenLayers-Test">
        <span>GitHub Code</span>
        <v-icon>code</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        appTitle: 'Some App Title',
        sidebar: false,
        offsetY: true,
        menuItems: [
            { title: 'Home', path: '/', icon: 'home' },
            { title: 'About', path: '/about', icon: 'help_outline' },
            { title: 'Vuetify ', path: '/vuetify_playroom', icon: 'style' },
            { title: 'Plotly ', path: '/plotly_playroom', icon: 'scatter_plot' },
            { title: 'OpenLayers 6 ', path: '/openlayers_playroom', icon: 'map' }
            
        ],
        dropdownItems: [
            { title: ' Time Series ' , path: 'time_series_example' , icon: 'timeline'},
            { title: ' Experiment ' , path: 'experiment' , icon: 'all_inclusive'},
            { title: ' Home Placeholder ' , path: '/' , icon: 'home'}
        ]
      }
    }
  };
</script>


