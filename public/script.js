const endpoint = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json";
const stuff = [];

fetch (endpoint)
.then(blob => blob.json())
.then(data => stuff.push(...data))

function findMatches(wordtoMatch, stuff){ 
  return stuff.filter(resta =>{
    const regex = new RegExp(wordtoMatch, 'gi');
    return resta.clearance_code_inc_type.match(regex) || resta.date.match(regex)
});

}
function displayMatches() {
    const matchArray = findMatches(this.value, stuff);
    const html = matchArray.map(resta => {
        return `
        <li>
            <span class ="address2">${resta.street_number}</span>
            <span class ="address">${resta.street_address}</span>
            <span class = "crime">${resta.clearance_code_inc_type}</span>
            <span class = "date">${resta.date}</span>
            <span class = "incidentID">${resta.incident_case_id}</span>
        </li>
        `;
    }).join('');
    results.innerHTML = html;
}
const searchInput = document.querySelector('input');
const results = document.querySelector(".results");

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

function find_id(stuff){
  return stuff.incident_case_id;
}

var heatMapPoints = [];
json.features.forEach(function find_id(stuff) {
  count_crime = stuff.count(stuff.clearance_code_inc_type);
  heatMapPoints.push([stuff.location.latitude, stuff.location.longitude, count_crime]);
});
console.log(heatMapPoints);
var heat = L.heatLayer(heatMapPoints, {radius: 25}).addTo(map);