// or "const mapboxgl = require('mapbox-gl');"

const locations = JSON.parse(document.getElementById('map').dataset.locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoibHVpcG9sZW9uIiwiYSI6ImNsenp5MGVmcjFpaWkyanB4NTYxdzhxc2gifQ.9u9mubP1yF4plGuq9kL1CQ';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  scrollZoom: false,
  style: 'mapbox://styles/luipoleon/cm001cwtg006i01pwgidcawdu', // style URL
});

const bounds = new mapboxgl.LngLatBounds();
console.log(locations);
locations.forEach((loc) => {
  // Create marker
  const el = document.createElement('div');
  el.className = 'marker';

  // Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Add popup
  new mapboxgl.Popup({
    offset: 30,
    closeOnClick: false,
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  // Extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100,
  },
});
