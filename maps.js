let myMap = L.map("map").setView([0, 0], 1);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
// Attribution is obligatory as per copyright!
  maxZoom: 20
}).addTo(myMap);

//Countries
//let Colombia= L.marker([4.570868, -74.297333]).addTo(myMap);
//let Iceland = L.marker([64.963051, -19.020835]).addTo(myMap);

