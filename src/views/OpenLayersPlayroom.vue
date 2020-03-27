<template>
  <div>
    <v-card>
      <v-row align="center" justify="space-around">
        <v-switch 
          v-model="syncSwitch" 
          label="Sync / Unsync"
          color="light-green accent-4">
        </v-switch>  
        <v-btn icon large>
          <v-icon>skip_previous</v-icon>
        </v-btn>
        <v-btn icon large @click="toggle">
          <v-icon>{{icon}}</v-icon>
        </v-btn>
        <v-btn icon large>
          <v-icon>loop</v-icon>
        </v-btn>
        <v-btn icon large>
          <v-icon>skip_next</v-icon>
        </v-btn>
      </v-row>
    </v-card>
    <v-container fluid class="pa-0">
      <v-row>
        <v-col>
          <v-card>
            <v-card-title class="overline py-1">
              {{ mapTitleOne }} Time: {{ currentTimeISO }}
              <v-spacer></v-spacer>
              <v-btn icon small @click="mapOneShowCard = !mapOneShowCard"><v-icon>help</v-icon></v-btn>
            </v-card-title>
            <vl-map 
              :data-projection="matrixSet" 
              style="height: 315px"
              ref="mapOne">

              <vl-view 
                ref="viewOne"
                :zoom.sync="zoomMapOne" 
                :center.sync="centerMapOne" 
                >
              </vl-view>

              <vl-layer-tile>
                <vl-source-osm></vl-source-osm>
              </vl-layer-tile>

              <vl-layer-tile>
                <vl-layer-image>
                  <vl-source-image-wms
                    :url='url'
                    layers='RADAR_1KM_RSNO'
                    :style="styleName"
                    :server-type= 'serverType'
                    :time="currentTimeISO">
                  </vl-source-image-wms>
                </vl-layer-image>
              </vl-layer-tile>

            </vl-map>
          </v-card>
        </v-col>
        <v-card class="ma-1 pa-1" left v-if="mapOneShowCard">
          <v-card-title>Title</v-card-title>
          <v-card-subtitle>Subtitle</v-card-subtitle>
        </v-card>
        <v-col>
          <v-card>
            <v-card-title class="overline py-1">
              {{ mapTitleOne }}
              <v-spacer></v-spacer>
              <v-btn icon small><v-icon>help</v-icon></v-btn>
            </v-card-title>            
            <vl-map 
              :load-tiles-while-animating="true" 
              :data-projection="matrixSet" 
              style="height: 315px"
              ref="mapTwo">
              

              <vl-view 
                ref="viewTwo"
                :zoom.sync="zoomMapTwo" 
                :center.sync="centerMapTwo" 
                >
              </vl-view>

              <vl-layer-tile>
                <vl-source-osm></vl-source-osm>
              </vl-layer-tile>

              <vl-layer-tile>
                <vl-layer-image>
                  <vl-source-image-wms
                    :url='url'
                    layers='CURRENT_CONDITIONS'
                    :style="styleName"
                    :server-type= 'serverType'
                    >
                  </vl-source-image-wms>
                </vl-layer-image>
              </vl-layer-tile>

            </vl-map>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title class="overline py-1">
              {{ mapTitleOne }}
              <v-spacer></v-spacer>
              <v-btn icon small><v-icon>help</v-icon></v-btn>
            </v-card-title> 
            <vl-map 
              :load-tiles-while-animating="true" 
              :data-projection="matrixSet" 
              style="height: 315px"
              ref="mapThree">
              

              <vl-view 
                :zoom="zoomMapThree" 
                :center="centerMapThree" 
                ref="viewThree"
                >
              </vl-view>

              <vl-layer-tile>
                <vl-source-osm></vl-source-osm>
              </vl-layer-tile>

              <vl-layer-tile>
                <vl-layer-image>
                  <vl-source-image-wms
                    :url='url'
                    layers='HRDPS.CONTINENTAL_TT'
                    :style="styleName"
                    :server-type= 'serverType'
                    >
                  </vl-source-image-wms>
                </vl-layer-image>
              </vl-layer-tile>
            </vl-map>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title class="overline py-1">
              {{ mapTitleOne }}
              <v-spacer></v-spacer>
              <v-btn icon small><v-icon>help</v-icon></v-btn>
            </v-card-title> 
            <vl-map 
              :load-tiles-while-animating="true" 
              :data-projection="matrixSet" 
              style="height: 315px"
              ref="mapFour">

              <vl-view 
                :zoom="zoomMapFour" 
                :center="centerMapFour"
                ref="viewFour" 
                >
              </vl-view>

              <vl-layer-tile>
                <vl-source-osm></vl-source-osm>
              </vl-layer-tile>

              <vl-layer-tile>
                <vl-layer-image>
                  <vl-source-image-wms
                    :url='url'
                    layers='HRDPS.CONTINENTAL_HU'
                    :style="styleName"
                    :server-type= 'serverType'
                    >
                  </vl-source-image-wms>
                </vl-layer-image>
              </vl-layer-tile>
            </vl-map>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
	export default {
    data () {
      return { 
        zoom: 5,
        center: [-75, 45],
        zoomMapOne: 5,
        centerMapOne: [-75, 45],
        mapTitleOne: 'Soon to be GetFeatured',
        zoomMapTwo: 5,
        centerMapTwo: [-75, 45],
        zoomMapThree: 5,
        centerMapThree: [-75, 45],
        zoomMapFour: 5,
        centerMapFour: [-75, 45],
        url: 'https://geo.weather.gc.ca/geomet',
        matrixSet: 'EPSG:4326',
        styleName: 'default',
        ratio: 1,
        serverType: 'mapserver',
        format: 'image/png',
        syncSwitch: false,
        mapOneShowCard: false,
        currentTime: null,
        animationId: null,
        icon: 'play_arrow'
      }
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
    },
    watch: {
      syncSwitch(val) {
        if(val) {
          this.$refs.mapTwo.setView(this.$refs.viewOne);
          this.$refs.mapThree.setView(this.$refs.viewOne);
          this.$refs.mapFour.setView(this.$refs.viewOne);
        } else {
          this.$refs.mapTwo.setView(this.$refs.viewTwo);
          this.$refs.mapThree.setView(this.$refs.viewThree);
          this.$refs.mapFour.setView(this.$refs.viewFour);
        }
      }
    },
    created() {
      this.parser = new DOMParser();
      this.setTime();
    },
  }
</script>

