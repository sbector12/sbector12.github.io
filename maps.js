let myMap = L.map("map").setView([0, 0], 1);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    // Attribution is obligatory as per copyright!
	maxZoom: 20
}).addTo(myMap);

//Countries
var Colombia=L.marker([5.35 , -72.4]).addTo(myMap);

//States
var Arizona=L.marker([33.729759, -111.431221]).addTo(myMap);
var Arkansas=L.marker([34.969704, -92.373123]).addTo(myMap);
var California=L.marker([36.116203, -119.681564]).addTo(myMap);
var Colorado=L.marker([39.059811, -105.311104]).addTo(myMap);
var Connecticut=L.marker([41.597782, -72.755371]).addTo(myMap);
var Delaware=L.marker([39.318523, -75.507141]).addTo(myMap);
var DC=L.marker([38.897438, -77.026817]).addTo(myMap);
var Florida=L.marker([27.766279, -81.686783]).addTo(myMap);
var Illinois=L.marker([40.349457, -88.986137]).addTo(myMap);
var Indiana=L.marker([39.849426, -86.258278]).addTo(myMap);
var Kentucky=L.marker([37.668140, -84.670067]).addTo(myMap);
var Louisiana=L.marker([31.169546, -91.867805]).addTo(myMap);
var Maine=L.marker([44.693947, -69.381927]).addTo(myMap);
var Maryland=L.marker([39.063946, -76.802101]).addTo(myMap);
