<template>
  <div>
    <vl-map 
      :load-tiles-while-animating="true" 
      load-tiles-while-interacting="true"
      data-projection="EPSG:4326" 
      style="height: 500px">

      <vl-view 
        :zoom.sync="zoom" 
        :center.sync="center" 
        :rotation.sync="rotation"
        >
      </vl-view>

      <!-- <vl-geoloc @update:position="geolocPosition = $event">
        <template slot-scope="geoloc">
          <vl-feature v-if="geoloc.position" id="position-feature">
            <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
            <vl-style-box>
              <v-icon>home</v-icon>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc> -->

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <vl-layer-tile id="geomet">
        <vl-source-image-wms
          url='https://geo.weather.gc.ca/geomet'
          layer-name='RADAR_1KM_RSNO'
          server-type= 'mapserver'
          >
        </vl-source-image-wms>
      </vl-layer-tile>
    </vl-map>
  </div>
</template>

<script>
	export default {
    data () {
      return { 
        zoom: 4,
        center: [-90, 50],
        rotation: 0,
        url: 'https://geo.weather.gc.ca/geomet',
        params: {'LAYERS': 'RADAR_1KM_RSNO'},
        layers: ['RADAR_1KM_RSNO'],
        layerName: 'RADAR_1KM_RSNO',
        matrixSet: 'EPSG:4326',
        styleName: 'default',
        ratio: 1,
        serverType: 'mapserver',
        cmp: 'vl-source-wms',
        attribution: 'Fucking Hell',
        format: 'image/png'
      }
    }
  }
</script>
