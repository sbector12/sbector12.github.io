let myMap = L.map("map").setView([0, 0], 1);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
// Attribution is obligatory as per copyright!
  maxZoom: 20
}).addTo(myMap);

//States
let Arizona = L.circle([34.0489, -111.0937], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
let Arkansas = L.marker([34.5574, -92.2863]).addTo(map);
let California = L.marker

