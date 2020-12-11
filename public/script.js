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