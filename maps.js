let myMap = L.map("map").setView([0, 0], 1);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    // Attribution is obligatory as per copyright!
	maxZoom: 20
}).addTo(myMap);

//Countries
var BosniaHerzegovina=L.marker([44.00 , 18.00]).addTo(myMap).bindPopup("Bosnia and Herzegovina");
var Colombia=L.marker([5.35 , -72.4]).addTo(myMap).bindPopup("Colombia");
var Croatia=L.marker([45.1667 , 15.5]).addTo(myMap).bindPopup("Croatia");
var France=L.marker([46.0 , 2.0]).addTo(myMap).bindPopup("France");
var Georgia=L.marker([42.0 , 43.5]).addTo(myMap).bindPopup("Georgia");
var Iceland=L.marker([64.9631, -19.0208]).addTo(myMap).bindPopup("Iceland");
var India=L.marker([20.5937, 78.9629]).addTo(myMap).bindPopup("India");
var Mexico=L.marker([23.0, -102.0]).addTo(myMap).bindPopup("Mexico");
var Monaco=L.marker([43.7333, 7.4]).addTo(myMap).bindPopup("Monaco");
var Montenegro=L.marker([42.0, 19.0]).addTo(myMap).bindPopup("Montenegro");
var SanMarino=L.marker([43.7667, 12.4167]).addTo(myMap).bindPopup("San Marino");
var VaticanCity=L.marker([41.9, 12.45]).addTo(myMap).bindPopup("Vatican City");


//Provinces
var Manitoba=L.marker([56.415211, -98.739075]).addTo(myMap).bindPopup("Manitoba, Canada");
var NB=L.marker([46.498390, -66.159668]).addTo(myMap).bindPopup("New Brunswick, Canada");
var NS=L.marker([45.000000, -63.000000]).addTo(myMap).bindPopup("Nova Scotia, Canada");
var Ontario=L.marker([50.000000, -85.000000]).addTo(myMap).bindPopup("Ontario, Canada");
var PEI=L.marker([46.250000, -63.000000]).addTo(myMap).bindPopup("Prince Edward Island, Canada");
var Quebec=L.marker([53, -70]).addTo(myMap).bindPopup("Quebec, Canada");


//States
var Arizona=L.marker([33.729759, -111.431221]).addTo(myMap).bindPopup("Arizona, USA");
var Arkansas=L.marker([34.969704, -92.373123]).addTo(myMap).bindPopup("Arkansas, USA");
var California=L.marker([36.116203, -119.681564]).addTo(myMap).bindPopup("California, USA");
var Colorado=L.marker([39.059811, -105.311104]).addTo(myMap).bindPopup("Colorado, USA");
var Connecticut=L.marker([41.597782, -72.755371]).addTo(myMap).bindPopup("Connecticut, USA");
var Delaware=L.marker([39.318523, -75.507141]).addTo(myMap).bindPopup("Delaware, USA");
var DC=L.marker([38.897438, -77.026817]).addTo(myMap).bindPopup("Washington, D.C., USA");
var Florida=L.marker([27.766279, -81.686783]).addTo(myMap).bindPopup("Florida, USA");
var Illinois=L.marker([40.349457, -88.986137]).addTo(myMap).bindPopup("Illinois, USA");
var Indiana=L.marker([39.849426, -86.258278]).addTo(myMap).bindPopup("Indiana, USA");
var Kentucky=L.marker([37.668140, -84.670067]).addTo(myMap).bindPopup("Kentucky, USA");
var Louisiana=L.marker([31.169546, -91.867805]).addTo(myMap).bindPopup("Louisiana, USA");
var Maine=L.marker([44.693947, -69.381927]).addTo(myMap).bindPopup("Maine, USA");
var Maryland=L.marker([39.063946, -76.802101]).addTo(myMap).bindPopup("Maryland, USA");
var Massachusetts=L.marker([42.230171, -71.530106]).addTo(myMap).bindPopup("Massachusetts, USA");
var Michigan=L.marker([43.326618, -84.536095]).addTo(myMap).bindPopup("Michigan, USA");
var Missouri=L.marker([38.456085, -92.288368]).addTo(myMap).bindPopup("Missouri, USA");
var Nevada=L.marker([38.313515, -117.055374]).addTo(myMap).bindPopup("Nevada, USA");
var NH=L.marker([43.452492, -71.563896]).addTo(myMap).bindPopup("New Hampshire, USA");
var NJ=L.marker([40.298904, -74.521011]).addTo(myMap).bindPopup("New Jersey, USA (Home)");
var NY=L.marker([42.165726, -74.948051]).addTo(myMap).bindPopup("New York, USA");
var Ohio=L.marker([40.388783, -82.764915]).addTo(myMap).bindPopup("Ohio, USA");
var Pennsylvania=L.marker([40.590752, -77.209755]).addTo(myMap).bindPopup("Pennsylvania, USA");
var Tennessee=L.marker([35.747845, -86.692345]).addTo(myMap).bindPopup("Tennessee, USA");
var Texas=L.marker([31.054487, -97.563461]).addTo(myMap).bindPopup("Texas, USA");
var Virginia=L.marker([37.769337, -78.169968]).addTo(myMap).bindPopup("Virginia, USA");
var WV=L.marker([38.491226, -80.954453]).addTo(myMap).bindPopup("West Virginia, USA");
