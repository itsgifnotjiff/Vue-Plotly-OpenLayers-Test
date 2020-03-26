import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/plotly_playroom',
    name: 'Plotly Playroom',
    component: () => import('../views/PlotlyPlayroom.vue')
  },
  {
    path: '/vuetify_playroom',
    name: 'Vuetify Playroom',
    component: () => import('../views/VuetifyPlayroom.vue')
  },
  {
    path: '/openlayers_playroom',
    name: 'OpenLayers 6 Playroom',
    component: () => import('../views/OpenLayersPlayroom.vue')
  },
  {
    path: '/time_series_example',
    name: 'Time Series Example',
    component: () => import('../views/TimeSeriesExample.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
