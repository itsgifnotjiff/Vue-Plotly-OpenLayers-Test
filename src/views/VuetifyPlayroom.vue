<template>
  <v-container>
  <h1>Vuetify Components</h1>
  <hr>
    <h3>Sparkline</h3>
  <v-sparkline
      :fill="fill"
      :gradient="gradient"
      :line-width="width"
      :padding="padding"
      :smooth="radius || false"
      :value="value"
      auto-draw
    ></v-sparkline>
  <hr>
  <h3>Select</h3>
  <v-select
        v-model="mode"
        :items="modelNames"
        dense
        outlined
        hide-details
        class="mt-3"
        label="Model Names"
      ></v-select>
  <br><br>
  <hr>
  <h3>Time Picker</h3>
  <br><br>
  <v-row justify="space-around" align="center">
    <v-col style="width: 290px; flex: 0 1 auto;">
      <h2>Start :</h2>
      <v-time-picker></v-time-picker>
    </v-col>
    <v-col style="width: 290px; flex: 0 1 auto;">
      <h2>End :</h2>
      <v-time-picker></v-time-picker>
    </v-col>
  </v-row>
  <hr>
  <h3>Date picker :</h3>
  <v-row justify="center">
    <v-date-picker v-model="picker"></v-date-picker>
  </v-row>
  <hr>
  <h3>Snackbars</h3>
  <br><br>
  <div class="text-center">
    <v-btn
      dark
      color="orange darken-2"
      @click="snackbar = true"
    >
      Open Snackbar
    </v-btn>

    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}
      <v-btn
        color="blue"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
  <hr>
  <h3>Steppers</h3>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Select something
      <small>Subtitle if needed</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card  class="mb-12">
        <v-select
        v-model="mode"
        :items="modelNames"
        dense
        outlined
        hide-details
        class="mt-3"
        label="Model Names"
      ></v-select>
      </v-card>
      <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">Switches</v-stepper-step>

    <v-stepper-content step="2">
      <v-card  class="mb-12">
        <v-sheet class="pa-5">
          <v-switch v-model="switch1" inset :label="`Switch 1: ${switch1.toString()}`"></v-switch>
          <v-switch v-model="switch2" inset :label="`Switch 2: ${switch2.toString()}`"></v-switch>
        </v-sheet>
      </v-card>
      <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Treeview of selections</v-stepper-step>

    <v-stepper-content step="3">
      <v-card class="mb-12">
        <v-treeview
          selectable
          selected-color="blue"
          :items="itemsForCheckBox"
        ></v-treeview>
      </v-card>
      <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">Different sort of inputs</v-stepper-step>
    <v-stepper-content step="4">
      <v-card class="mb-12">
        <v-file-input multiple label="File input"></v-file-input>
         <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Last name"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
      <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
  <hr>
  <h3>Weather Card</h3>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">San Francisco</v-list-item-title>
        <v-list-item-subtitle>Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="6">
          23&deg;C
        </v-col>
        <v-col cols="6">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sun.png"
            alt="Sunny image"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>48%</v-list-item-subtitle>
    </v-list-item>

    <v-slider
      v-model="time"
      :max="6"
      :tick-labels="labels"
      class="mx-4"
      ticks
    ></v-slider>

    <v-list class="transparent">
      <v-list-item
        v-for="item in forecast"
        :key="item.day"
      >
        <v-list-item-title>{{ item.day }}</v-list-item-title>

        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-subtitle class="text-right">
          {{ item.temp }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn text>Full Report</v-btn>
    </v-card-actions>
  </v-card>
  <hr>
  <h3>Filters</h3>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          dark
          color="blue darken-3"
          class="mb-1"
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="search"
            label="Search"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="search"
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="sortDesc"
              mandatory
            >
              <v-btn
                large
                depressed
                color="blue"
                :value="false"
              >
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn
                large
                depressed
                color="blue"
                :value="true"
              >
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item
                  v-for="(key, index) in filteredKeys"
                  :key="index"
                >
                  <v-list-item-content :class="{ 'blue--text': sortBy === key }">{{ key }}:</v-list-item-content>
                  <v-list-item-content class="align-end" :class="{ 'blue--text': sortBy === key }">{{ item[key.toLowerCase()] }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="ml-1"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>


  <hr>
  <h3>Calendar</h3>
  <v-row>
    <v-col
      sm="12"
      lg="3"
      class="mb-4 controls"
    >
      <v-btn
        fab
        small
        absolute
        left
        color="primary"
        @click="$refs.calendar.prev()"
      >
        <v-icon>keyboard_arrow_left</v-icon>
      </v-btn>
      <v-btn
        fab
        small
        absolute
        right
        color="primary"
        @click="$refs.calendar.next()"
      >
        <v-icon>keyboard_arrow_right</v-icon>
      </v-btn>
      <br><br><br>
      <v-select
        v-model="type"
        :items="typeOptions"
        label="Type"
        hide-details
        outlined
        dense
      ></v-select>
      <v-checkbox
        v-model="dark"
        label="Dark"
        hide-details
      ></v-checkbox>
      <v-checkbox
        v-model="shortIntervals"
        label="Short intervals"
        hide-details
      ></v-checkbox>
      <v-checkbox
        v-model="shortMonths"
        label="Short months"
        hide-details
      ></v-checkbox>
      <v-checkbox
        v-model="shortWeekdays"
        label="Short weekdays"
        hide-details
      ></v-checkbox>
      <v-select
        v-model="color"
        :items="colorOptions"
        class="mt-3"
        label="Color"
        hide-details
        outlined
        dense
      ></v-select>
      <v-menu
        ref="startMenu"
        v-model="startMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="start"
        transition="scale-transition"
        min-width="290px"
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="start"
            class="mt-3"
            label="Start Date"
            dense
            readonly
            outlined
            hide-details
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="start"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="startMenu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.startMenu.save(start)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-menu
        v-if="hasEnd"
        ref="endMenu"
        v-model="endMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="end"
        transition="scale-transition"
        min-width="290px"
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="end"
            class="mt-3"
            label="End Date"
            dense
            readonly
            outlined
            hide-details
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="end"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="endMenu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.endMenu.save(end)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-menu
        ref="nowMenu"
        v-model="nowMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="now"
        transition="scale-transition"
        min-width="290px"
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="now"
            class="mt-3"
            label="Today"
            dense
            readonly
            outlined
            hide-details
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="now"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="nowMenu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.nowMenu.save(now)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-select
        v-model="mode"
        :items="modeOptions"
        dense
        outlined
        hide-details
        class="mt-3"
        label="Event Overlap Mode"
      ></v-select>
      <v-select
        v-model="weekdays"
        :items="weekdaysOptions"
        dense
        outlined
        hide-details
        class="mt-3"
        label="Weekdays"
      ></v-select>
      <v-text-field
        v-if="type === 'custom-weekly'"
        v-model="minWeeks"
        dense
        outlined
        hide-details
        class="mt-3"
        label="Minimum Weeks"
        type="number"
      ></v-text-field>
      <v-select
        v-if="hasIntervals"
        v-model="intervals"
        :items="intervalsOptions"
        dense
        outlined
        hide-details
        class="mt-3"
        label="Intervals"
      ></v-select>
      <v-select
        v-if="type === 'custom-daily'"
        v-model="maxDays"
        :items="maxDaysOptions"
        dense
        outlined
        hide-details
        class="mt-3"
        label="# of Days"
      ></v-select>
      <v-select
        v-if="hasIntervals"
        v-model="styleInterval"
        :items="styleIntervalOptions"
        dense
        outlined
        hide-details
        class="mt-3"
        label="Styling"
      ></v-select>
    </v-col>
    <v-col
      sm="12"
      lg="9"
      class="pl-4"
    >
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="start"
          :type="type"
          :start="start"
          :end="end"
          :min-weeks="minWeeks"
          :max-days="maxDays"
          :now="now"
          :dark="dark"
          :weekdays="weekdays"
          :first-interval="intervals.first"
          :interval-minutes="intervals.minutes"
          :interval-count="intervals.count"
          :interval-height="intervals.height"
          :interval-style="intervalStyle"
          :show-interval-label="showIntervalLabel"
          :short-intervals="shortIntervals"
          :short-months="shortMonths"
          :short-weekdays="shortWeekdays"
          :color="color"
          :events="events"
          :event-overlap-mode="mode"
          :event-overlap-threshold="45"
          :event-color="getEventColor"
          @change="getEvents"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
  const weekdaysDefault = [0, 1, 2, 3, 4, 5, 6]

  const intervalsDefault = {
    first: 0,
    minutes: 60,
    count: 24,
    height: 48,
  }

  const stylings = {
    default (interval) {
      console.log(interval);
      return undefined
    },
    workday (interval) {
      const inactive = interval.weekday === 0 ||
        interval.weekday === 6 ||
        interval.hour < 9 ||
        interval.hour >= 17
      const startOfHour = interval.minute === 0
      const dark = this.dark
      const mid = dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'

      return {
        backgroundColor: inactive ? (dark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.05)') : undefined,
        borderTop: startOfHour ? undefined : '1px dashed ' + mid,
      }
    },
    past (interval) {
      return {
        backgroundColor: interval.past ? (this.dark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.05)') : undefined,
      }
    },
  }

  export default {
    data: () => ({
      dark: false,
      startMenu: false,
      start: '2020-03-23',
      endMenu: false,
      end: '2020-03-27',
      nowMenu: false,
      minWeeks: 1,
      now: null,
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
      type: 'month',
      typeOptions: [
        { text: 'Day', value: 'day' },
        { text: '4 Day', value: '4day' },
        { text: 'Week', value: 'week' },
        { text: 'Month', value: 'month' },
        { text: 'Custom Daily', value: 'custom-daily' },
        { text: 'Custom Weekly', value: 'custom-weekly' },
      ],
      mode: 'stack',
      modeOptions: [
        { text: 'Stack', value: 'stack' },
        { text: 'Column', value: 'column' },
      ],
      modelNames: ['Si Jun', 'is','reading','this'],
      weekdays: weekdaysDefault,
      weekdaysOptions: [
        { text: 'Sunday - Saturday', value: weekdaysDefault },
        { text: 'Mon, Wed, Fri', value: [1, 3, 5] },
        { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
        { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
      ],
      intervals: intervalsDefault,
      intervalsOptions: [
        { text: 'Default', value: intervalsDefault },
        { text: 'Workday', value: { first: 16, minutes: 30, count: 20, height: 48 } },
      ],
      maxDays: 7,
      maxDaysOptions: [
        { text: '7 days', value: 7 },
        { text: '5 days', value: 5 },
        { text: '4 days', value: 4 },
        { text: '3 days', value: 3 },
      ],
      styleInterval: 'default',
      styleIntervalOptions: [
        { text: 'Default', value: 'default' },
        { text: 'Workday', value: 'workday' },
        { text: 'Past', value: 'past' },
      ],
      color: 'primary',
      colorOptions: [
        { text: 'Primary', value: 'primary' },
        { text: 'Secondary', value: 'secondary' },
        { text: 'Accent', value: 'accent' },
        { text: 'Red', value: 'red' },
        { text: 'Pink', value: 'pink' },
        { text: 'Purple', value: 'purple' },
        { text: 'Deep Purple', value: 'deep-purple' },
        { text: 'Indigo', value: 'indigo' },
        { text: 'Blue', value: 'blue' },
        { text: 'Light Blue', value: 'light-blue' },
        { text: 'Cyan', value: 'cyan' },
        { text: 'Teal', value: 'teal' },
        { text: 'Green', value: 'green' },
        { text: 'Light Green', value: 'light-green' },
        { text: 'Lime', value: 'lime' },
        { text: 'Yellow', value: 'yellow' },
        { text: 'Amber', value: 'amber' },
        { text: 'Orange', value: 'orange' },
        { text: 'Deep Orange', value: 'deep-orange' },
        { text: 'Brown', value: 'brown' },
        { text: 'Blue Gray', value: 'blue-gray' },
        { text: 'Gray', value: 'gray' },
        { text: 'Black', value: 'black' },
      ],
      shortIntervals: true,
      shortMonths: false,
      shortWeekdays: false,
      picker: new Date().toISOString().substr(0, 10),
      snackbar: false,
      text: 'My timeout is set to 2000.',
      timeout: 2000,
      fill: false,
      gradient: ['#f72047', '#ffd200', '#1feaea'],
      padding: 8,
      radius: 16,
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      width: 2,
      e6: 1,
      switch1: true,
      switch2: false,
      itemsPerPageArray: [4, 8, 12],
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: 'name',
      keys: [
        'Name',
        'Calories',
        'Fat',
        'Carbs',
        'Protein',
        'Sodium',
        'Calcium',
        'Iron',
      ],
      items: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%',
        },
      ],
      itemsForCheckBox: [
        {
          id: 1,
          name: 'Applications :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
        },
        {
          id: 5,
          name: 'Documents :',
          children: [
            {
              id: 6,
              name: 'vuetify :',
              children: [
                {
                  id: 7,
                  name: 'src :',
                  children: [
                    { id: 8, name: 'index : ts' },
                    { id: 9, name: 'bootstrap : ts' },
                  ],
                },
              ],
            },
            {
              id: 10,
              name: 'material2 :',
              children: [
                {
                  id: 11,
                  name: 'src :',
                  children: [
                    { id: 12, name: 'v-btn : ts' },
                    { id: 13, name: 'v-card : ts' },
                    { id: 14, name: 'v-window : ts' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 15,
          name: 'Downloads :',
          children: [
            { id: 16, name: 'October : pdf' },
            { id: 17, name: 'November : pdf' },
            { id: 18, name: 'Tutorial : html' },
          ],
        },
        {
          id: 19,
          name: 'Videos :',
          children: [
            {
              id: 20,
              name: 'Tutorials :',
              children: [
                { id: 21, name: 'Basic layouts : mp4' },
                { id: 22, name: 'Advanced techniques : mp4' },
                { id: 23, name: 'All about app : dir' },
              ],
            },
            { id: 24, name: 'Intro : mov' },
            { id: 25, name: 'Conference introduction : avi' },
          ],
        },
      ],
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
      time: 0,
      forecast: [
        { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
        { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
        { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
      ],

    }),
    computed: {
      intervalStyle () {
        return stylings[this.styleInterval].bind(this)
      },
      hasIntervals () {
        return this.type in {
          week: 1, day: 1, '4day': 1, 'custom-daily': 1,
        }
      },
      hasEnd () {
        return this.type in {
          'custom-weekly': 1, 'custom-daily': 1,
        }
      },
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== `Name`)
      },
    },
    methods: {
      viewDay ({ date }) {
        this.start = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      showIntervalLabel (interval) {
        return interval.minute === 0
      },
      getEvents ({ start, end }) {
        const events = []

        const min = new Date(`${start.date}T00:00:00`)
        const max = new Date(`${end.date}T23:59:59`)
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.rnd(days, days + 20)

        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0
          const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = new Date(firstTimestamp - (firstTimestamp % 900000))
          const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
          const second = new Date(first.getTime() + secondTimestamp)

          events.push({
            name: this.names[this.rnd(0, this.names.length - 1)],
            start: this.formatDate(first, !allDay),
            end: this.formatDate(second, !allDay),
            color: this.colors[this.rnd(0, this.colors.length - 1)],
          })
        }

        this.events = events
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
      formatDate (a, withTime) {
        return withTime
          ? `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
          : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
      },
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
    },
  }
</script>

<style scoped>
.controls {
  position: relative;
}
</style>