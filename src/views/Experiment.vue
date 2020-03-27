<template>
  <div id="app">
    <div class="controls">
      <v-btn icon @click="toggle"><v-icon>{{icon}}</v-icon></v-btn>
      <br>
      Time: {{ currentTimeISO }}
    </div>
    <div class="columns" style="border: red">
      <div class="column">
        <vl-map 
          ref="mapTwo" 
          data-projection="EPSG:4326">
          <vl-view 
            ref="viewTwo" 
            :zoom.sync="zoomTwo" 
            :center.sync="centerTwo"/>

          <vl-layer-tile>
            <vl-source-osm></vl-source-osm>
          </vl-layer-tile>

          <vl-layer-image>
            <vl-source-image-wms
              url="https://geo.weather.gc.ca/geomet"
              layers="RADAR_1KM_RSNO"
              server-type="mapserver"
              :time="currentTimeISO"
            />
          </vl-layer-image>
        </vl-map>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      zoomOne: 3,
      centerOne: [-70, 70],
      zoomTwo: 3,
      centerTwo: [-100, 45],
      syncFlag: false,
      currentTime: null,
      animationId: null,
      icon: 'play_arrow'
    };
  },
  computed: {
    currentTimeISO() {
      return this.currentTime
        ? this.currentTime.toISOString().split(".")[0] + "Z"
        : null;
    },
    buttonLabel() {
      return this.animationId ? "Stop" : "Play";
    }
  },
  watch: {
    syncFlag(val) {
      if (val) {
        this.$refs.mapTwo.setView(this.$refs.viewOne);
      } else {
        this.$refs.mapTwo.setView(this.$refs.viewTwo);
      }
    }
  },
  created() {
    this.parser = new DOMParser();
    this.setTime();
  },
  methods: {
    async getRadarStartEndTime() {
      let response = await fetch(
        "https://geo.weather.gc.ca/geomet/?lang=en&service=WMS&request=GetCapabilities&version=1.3.0&LAYERS=RADAR_1KM_RSNO"
      );
      let data = await response.text().then(data =>
        this.parser
          .parseFromString(data, "text/xml")
          .getElementsByTagName("Dimension")[0]
          .innerHTML.split("/")
      );
      return [new Date(data[0]), new Date(data[1])];
    },
    async setTime() {
      const data = await this.getRadarStartEndTime();
      if (this.currentTime === null) {
        this.currentTime = data[0];
      } else if (this.currentTime >= data[1]) {
        this.currentTime = data[0];
      } else {
        this.currentTime = new Date(
          this.currentTime.setMinutes(this.currentTime.getMinutes() + 10)
        );
      }
    },
    play() {
      this.stop();
      this.animationId = window.setInterval(this.setTime, 1000 / 5);
    },
    stop() {
      if (this.animationId !== null) {
        clearInterval(this.animationId);
        this.animationId = null;
      }
    },
    toggle() {
      if (this.animationId) {
        this.icon = 'play_arrow';
        this.stop();
      } else {
        this.icon = 'pause';
        this.play();
      }
    }
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

.columns {
  display: flex;
  width: 100%;
  height: 100%;
}

.columns .column {
  flex: 1 1 auto;
}
</style>
