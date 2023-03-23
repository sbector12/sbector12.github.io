let myMap = L.map("map").setView([0, 0], 1);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    // Attribution is obligatory as per copyright!
	maxZoom: 20
}).addTo(myMap);

//Countries
var Colombia=L.marker([5.35 , -72.4]).addTo(myMap);
var Iceland=L.marker([64.9631, 19.0208]).addTo(myMap);
var India=L.marker([20.5937, 78.9629]).addTo(myMap);

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
var Massachusetts=L.marker([42.230171, -71.530106]).addTo(myMap);
var Michigan=L.marker([43.326618, -84.536095]).addTo(myMap);
var Missouri=L.marker([38.456085, -92.288368]).addTo(myMap);
var Nevada=L.marker([38.313515, -117.055374]).addTo(myMap);
var NH=L.marker([43.452492, -71.563896]).addTo(myMap);
var NJ=L.marker([40.298904, -74.521011]).addTo(myMap);
var NY=L.marker([42.165726, -74.948051]).addTo(myMap);
var Ohio=L.marker([40.388783, -82.764915]).addTo(myMap);
var Pennsylvania=L.marker([40.590752, -77.209755]).addTo(myMap);
var Tennessee=L.marker([35.747845, -86.692345]).addTo(myMap);
var Texas=L.marker([31.054487, -97.563461]).addTo(myMap);
var Virginia=L.marker([37.769337, -78.169968]).addTo(myMap);
var WV=L.marker([38.491226, -80.954453]).addTo(myMap);
