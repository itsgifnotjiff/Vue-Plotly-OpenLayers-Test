<template>
  <div>
    <h1>OpenLayers 6 and Geomet Playground</h1>
    <v-container>
      <v-row align-content="end">
        <v-col>
          <vl-map 
            :load-tiles-while-animating="true" 
            load-tiles-while-interacting="true"
            :data-projection="matrixSet" 
            style="height: 400px"
            :attribution="attribution">

            <vl-view 
              :zoom="zoom" 
              :center="center" 
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
                  >
                </vl-source-image-wms>
              </vl-layer-image>
            </vl-layer-tile>

          </vl-map>
        </v-col>
        <v-col>
          <vl-map 
            :load-tiles-while-animating="true" 
            load-tiles-while-interacting="true"
            :data-projection="matrixSet" 
            style="height: 400px">

            <vl-view 
              :zoom="zoom" 
              :center="center" 
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
        </v-col>
      </v-row>
       <v-row>
        <v-col>
          <vl-map 
            :load-tiles-while-animating="true" 
            load-tiles-while-interacting="true"
            :data-projection="matrixSet" 
            style="height: 400px">

            <vl-view 
              :zoom="zoom" 
              :center="center" 
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
        </v-col>
        <v-col>
          <vl-map 
            :load-tiles-while-animating="true" 
            load-tiles-while-interacting="true"
            :data-projection="matrixSet" 
            style="height: 400px">

            <vl-view 
              :zoom="zoom" 
              :center="center" 
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
        url: 'https://geo.weather.gc.ca/geomet',
        matrixSet: 'EPSG:4326',
        styleName: 'default',
        ratio: 1,
        serverType: 'mapserver',
        format: 'image/png'
      }
    }
  }
</script>
