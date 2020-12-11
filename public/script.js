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
            <span class ="address">${resta.street_address}
            <span class = "crime">${resta.clearance_code_inc_type}</span>
            <span class = "date">${resta.date}</span>
        </li>
        `;
    }).join('');
    results.innerHTML = html;
}
const searchInput = document.querySelector('input');
const results = document.querySelector(".results");

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

var heatMapPoints = [];
json.features.forEach(function(incident_case_id) {
  count_crime = stuff.count(incident_case_id.clearance_code_inc_type);
  heatMapPoints.push([incident_case_id.location.latitude, incident_case_id.location.longitude, count_crime]);
});
var heat = L.heatLayer(heatMapPoints, {radius: 25}).addTo(map);