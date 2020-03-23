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
    <div ref="plotlyEl"></div>
  </div>
</template>

<script>
  import plotlyData from '../assets/data.js';
  import Plotly from 'plotly.js-dist';

  export default {
    data () {
      return { 
        plotlyData,
        zoom: 2,
        center: [0, 0],
        rotation: 0,
        geolocPosition: undefined,
        
      }
    },
    mounted() {
      const el = this.$refs.plotlyEl;
      // let target_div = document.getElementById('tester');
let exampleData = [];
let data_experiment_x = [];
let data_experiment_y = [];
let list_names_plots = [];
let list_names_models = [];
let list_line_layouts = 
[
	{
		symbol: "diamond-open",
		color: 'rgb(0, 24, 143)',
		size: 5,
		line: {
			symbol: ["diamond-open"],
			color: 'rgb(0, 24, 143)',
			width: 2
		}
	},
	{
		
		color: 'rgb(0, 188, 242)',
		size: 10,
		line: {
			color: 'rgb(0, 188, 242)',
			width: 2
		}
	},
	{
		
		color: 'rgb(0, 178, 148)',
		size: 10,
		line: {
			color: 'rgb(0, 178, 148)',
			width: 2
		}
	},
	{
		symbol: "triangle-up-open",
		color: 'rgb(0, 158, 73)',
		size: 5,
		line: {
			color: 'rgb(0, 158, 73)',
			width: 2
		}
	},
	{
		color: 'rgb(100, 235, 52)',
		size: 10,
		line: {
			color: 'rgb(100, 235, 52)',
			width: 2
		}
	},
	{
		color: 'rgb(255, 241, 0)',
		size: 10,
		line: {
			color: 'rgb(255, 241, 0)',
			width: 2
		}
	},
	{
		symbol: "y-up",
		color: 'rgb(255, 140, 0)',
		size: 5,
		line: {
			color: 'rgb(255, 140, 0)',
			width: 2
		}
	},
	{
		color: 'rgb(232, 17, 35)',
		size: 10,
		line: {
			color: 'rgb(232, 17, 35)',
			width: 2
		}
	},
	{
		color: 'rgb(236, 0, 140)',
		size: 10,
		line: {
			color: 'rgb(236, 0, 140)',
			width: 2
		}
	},
	{
		symbol: "circle",
		color: 'rgb(104, 33, 122)',
		size: 5,
		line: {
			color: 'rgb(104, 33, 122)',
			width: 2
		}
	}

];

for( model in data )
{
	list_names_models.push( model );
	for(region in data[ model ])
	{
		list_names_plots.push( model + " " + region )
		var xs = [];
		var ys = [];
		for(item in data[model][region])
		{
			var dateString = data[model][region][item].x.split("-");
			xs[item] = new Date(dateString[0],dateString[1]);
			ys[item] = parseFloat(data[model][region][item].y);
		}	
		data_experiment_x.push(xs);
		data_experiment_y.push(ys);
	}
	
}

for( i = 0 ; i < data_experiment_x.length ; i++ )
{
	exampleData.push
	(
		{ 	
			type: 'scatter',
			name: list_names_plots[i],
			x:data_experiment_x[i],
			y:data_experiment_y[i],
			mode: 'lines+markers',
			line: {shape: 'spline'}
		}
	)
}

for( i = 0 ; i < exampleData.length ; i++ )
{
	if ( i == 0 || i == 1 || i == 2 )
	{
		exampleData[i]["marker"] = list_line_layouts[0];

	} else if ( i == 3 || i == 4 || i == 5 )
	{
		exampleData[i]["marker"] = list_line_layouts[3];

	} else if ( i == 6 || i == 7 || i == 8 )
	{
		exampleData[i]["marker"] = list_line_layouts[6];

	} else if ( i == 9 || i == 10 || i == 11 )
	{
		exampleData[i]["marker"] = list_line_layouts[9];
	}
}

const config = 
{
	showLink: false,
	editable: false,
	displayModeBar: true,
	displaylogo: false,
	modeBarButtonsToRemove: ['sendDataToCloud'],
	responsive: true,
	toImageButtonOptions: 
	{
		format: 'png', // one of png, svg, jpeg, webp
		filename: 'plot',
		height: document.getElementById('tester').offsetHeight,
		width: document.getElementById('tester').offsetWidth,
		scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
	}
};

let layout = 
{
	autosize: true,
	title:'Super Cool Title',
	xaxis: { title: 'Date' , tickformat: '%B-%Y' , tickmode: "linear" , tick0: "2017-01" , tickangle: "45" , dtick: 30 * 24 * 60 * 60 * 1000 },
	yaxis: { title: '\(\pm\)' },
	margin: { l: 60 , r: 300 , b: 120 , t: 30 , pad: 5 },
	template: "plotly_dark"
}

Plotly.newPlot(el,exampleData,layout,config);
    }
  }
</script>