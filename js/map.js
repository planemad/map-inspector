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

// Define a layer collection for easy styling
var mapLayerCollection = {
  'myneta-loksabha': ['myneta-loksabha fill-0', 'myneta-loksabha fill-1', 'myneta-loksabha fill-2', 'myneta-loksabha fill-3', 'myneta-loksabha fill-4', 'myneta-loksabha fill-5', 'myneta-loksabha fill-6', 'myneta-loksabha fill-7', 'myneta-loksabha mask', 'myneta-loksabha selected'],
  'myneta-loksabha mask': ['myneta-loksabha mask']
};

map.on('style.load', function(e) {

  map.on('click', function(e) {
    map.featuresAt(e.point, {
      layer: ['osmlint circle'],
      radius: 4
    }, function(err, features) {

      var osmId;
      var josmUrl;

      if( '_osm_way_id' in features[0].properties )
        osmId = features[0].properties['_osm_way_id']
      if( '_osm_node_id' in features[0].properties )
        osmId = features[0].properties['_osm_node_id']

      console.log(osmId)
      // window.open(josmUrl);
    });
  });

});
