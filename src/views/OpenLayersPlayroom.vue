<template>
  <div>
    <vl-map 
      :load-tiles-while-animating="true" 
      :load-tiles-while-interacting="true"
      data-projection="EPSG:4326" 
      style="height: 400px">

      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <vl-geoloc @update:position="geolocPosition = $event">
        <template slot-scope="geoloc">
          <vl-feature v-if="geoloc.position" id="position-feature">
            <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
            <vl-style-box>
              <v-icon>home</v-icon>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </vl-map>
    <div style="padding: 20px">
      Zoom: {{ zoom }}<br>
      Center: {{ center }}<br>
      Rotation: {{ rotation }}<br>
      My geolocation: {{ geolocPosition }}
    </div>
	<!-- <div id="mapOL">
		Hi, i'm a map!
	</div> -->
  </div>
</template>

<script>
	import Map from 'ol/Map.js';
	import View from 'ol/View.js';
	import TileLayer from 'ol/layer/Tile.js'  
	import OSM from "ol/source/OSM"

	export default {
	data () {
		return { 
		zoom: 2,
		center: [0, 0],
		rotation: 0,
		geolocPosition: undefined,
		
		}
	},
	/* eslint-disable no-unused-vars */

	mounted() {
		let map = new Map({
			target: 'mapOL',
			layers: [
				new TileLayer({source: new OSM()})
			],
			view: new View({
				center: [0, 0],
				zoom: 2
				})
			})
		}
	}
	/* eslint-enable no-unused-vars */

	
</script>
