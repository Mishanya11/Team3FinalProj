const endpoint = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json";
const crimes = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => crimes.push(...data))

function findMatches(wordToMatch, crimes) {
    return crimes.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi')
        return place.street_address.match(regex) || place.date.match(regex)
    });
}

function displayMatches(){
    const matchArray = findMatches(this.value, restaurants);
    const html = matchArray.map(place => {
        return `
            <li>
                <span class="street_address">${place.street_address}<br></span>
                <span class="clearance_code_inc_type">${place.clearance_code_inc_type}<br></span>
                <span class="date">${place.date}<br></span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}
function displayMatches() {
    const matchArray = findMatches(this.value, stuff);
    const html = matchArray.map(resta => {
        return `
        <li>
            <span class = "name">${resta.name}</span>
            <span class = "category">${resta.category}</span>
            <span class ="address">${resta.address_line_1}
            <span class = "address">${resta.city}, ${resta.state}, ${resta.zip}</span>
        </li>
        `;
    }).join('');
    results.innerHTML = html;
}
const searchInput = document.querySelector('input');
const results = document.querySelector(".results");

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);