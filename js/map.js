// Define map locations

// Simple map
mapboxgl.accessToken = 'pk.eyJ1IjoicGxhbmVtYWQiLCJhIjoiemdYSVVLRSJ9.g3lbg_eN0kztmsfIPxa9MQ';
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/planemad/cijcefp3q00elbskq4cgvcivf', //stylesheet location
  hash: true
});

// Add geocoder https://github.com/mapbox/mapbox-gl-geocoder/blob/master/API.md
map.addControl(new mapboxgl.Geocoder({'position':'top-right'}));

map.on('style.load', function(e) {

  map.on('click', function(e) {
    map.featuresAt(e.point, {
      layer: ['osmlint circle'],
      radius: 4
    }, function(err, features) {

      // Code lifted from https://github.com/geohacker/geojson-josm-url/blob/master/index.js
      var baseURL = "http://localhost:8111/load_object?new_layer=true&objects=";
      var prefix = Object.keys(features[0].properties).indexOf('_osm_way_id') == -1 ? 'n' : 'w';
      var osmID = features[0].properties._osm_way_id || features[0].properties._osm_node_id;

      window.open(baseURL + prefix + osmID);
    });
  });

});
