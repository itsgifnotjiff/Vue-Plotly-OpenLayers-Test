<template>
  <div class="time-series-example">
    <v-container>
      <p class="text-center display-2 font-weight-bold">Time Series Example Page</p>
      <v-select
        v-model="selectedModels"
        :items="modelNames"
        :menu-props="{ bottom: true, offsetY: true }"
        dense
        outlined
        hide-details
        color="light-green accent-4"
        item-color="light-green accent-4"
        multiple
        class="mt-3"
        label="Choose a model"
      ></v-select>

      <v-row justify="space-around" align="center">
        <v-col cols="11" sm="5">
          <v-menu
            ref="startTimeMenu"
            v-model="startTimeMenu"
            :close-on-content-click="false"
            :nudge-right="30"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="startTime"
                label="Pick Start Time"
                prepend-icon="access_time"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="startTimeMenu"
              v-model="startTime"
              full-width
              color="light-green accent-4"
              :max="endTime"
              @click:minute="$refs.menu.save(startTime)"
            ></v-time-picker>
          </v-menu>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="11" sm="5">
          <v-menu
            ref="endTimeMenu"
            v-model="endTimeMenu"
            :close-on-content-click="false"
            :nudge-right="30"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="endTime"
                label="Pick End Time"
                prepend-icon="access_time"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="endTimeMenu"
              v-model="endTime"
              full-width
              color="light-green accent-4"
              :min="startTime"
              @click:minute="$refs.menu.save(endTime)"
            ></v-time-picker>
          </v-menu>
        </v-col>
      </v-row>

      <v-row justify="space-around" align="center">
        <v-col cols="11" sm="5">
          <v-menu
            ref="startDateMenu"
            v-model="startDateMenu"
            :close-on-content-click="false"
            :nudge-right="30"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="startDate"
                label="Pick Start Date"
                prepend-icon="today"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-if="startDateMenu"
              v-model="startDate"
              full-width
              color="light-green accent-4"
              :max="endDate"
              @click:minute="$refs.menu.save(startDate)"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="11" sm="5">
          <v-menu
            ref="endDateMenu"
            v-model="endDateMenu"
            :close-on-content-click="false"
            :nudge-right="30"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="endDate"
                label="Pick End Date"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-if="endDateMenu"
              v-model="endDate"
              full-width
              color="light-green accent-4"
              :min="startDate"
              @click:minute="$refs.menu.save(endDate)"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <ul>
        <li>Selected Models : {{ selectedModels }}</li>
        <li>Start Time : {{ startTime }} <br> End Time : {{ endTime }}</li>
        <li>Start Date : {{ startDate }} <br> End Date : {{ endDate }}</li>
      </ul>
      <v-container>
        <Plotly :data="timeSeriesData" :layout="timeSeriesLayout" :config="timeSeriesConfig" :display-mode-bar="true"></Plotly>
      </v-container>
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
        mode: 'stack',
        modelNames: ['Firework', 'European', 'Model X'],
        selectedModels: [],
        startTime: null,
        endTime: null,
        startTimeMenu: false,
        endTimeMenu: false,
        startDate: null,
        endDate: null,
        startDateMenu: false,
        endDateMenu: false,
        timeSeriesData: Tester.data,
        timeSeriesLayout: Tester.layout,
        timeSeriesConfig: Tester.config
      }
    }
  }
</script>