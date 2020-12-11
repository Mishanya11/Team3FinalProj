import { Loader } from "@googlemaps/js-api-loader"
const loader = new Loader({
  apiKey: "AIzaSyDrBA-BFDn-pRnv1tdx-iQMNCFSAsX3kFg",
  version: "weekly",
  ...additionalOptions,
});
loader.load().then(() => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});

const endpoint = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json";
const stuff = [];

fetch (endpoint)
.then(blob => blob.json())
.then(data => stuff.push(...data))

function findMatches(wordtoMatch, stuff){ 
  return stuff.filter(resta =>{
    const regex = new RegExp(wordtoMatch, 'gi');
    return resta.category.match(regex) || resta.name.match(regex)
});

}

let map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 37.775, lng: -122.434 },
    mapTypeId: "satellite",
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });
}

function getPoints() {
  return [
    new google.maps.LatLng(38.9821313173, -76.9378171116)
  ]
}