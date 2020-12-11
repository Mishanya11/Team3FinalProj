const endpoint = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json";
const stuff = [];

fetch (endpoint)
.then(blob => blob.json())
.then(data => stuff.push(...data))

function findMatches(wordtoMatch, stuff){ 
  return stuff.filter(crimes =>{
    const regex = new RegExp(wordtoMatch, 'gi');
    return crimes.category.match(regex) || crimes.name.match(regex)
});

}
function displayMatches() {
    const matchArray = findMatches(this.value, stuff);
    const html = matchArray.map(crimes => {
        return `
        <li>
            <span class = "name">${crimes.name}</span>
            <span class = "category">${crimes.category}</span>
            <span class ="address">${crimes.address_line_1}
            <span class = "address">${crimes.city}, ${crimes.state}, ${crimes.zip}</span>
        </li>
        `;
    }).join('');
    results.innerHTML = html;
}
const searchInput = document.querySelector('input');
const results = document.querySelector(".results");

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);