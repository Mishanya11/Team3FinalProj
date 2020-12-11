const endpoint = "https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json";
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