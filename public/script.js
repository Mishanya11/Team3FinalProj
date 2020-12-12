//Server Call
jsonList = [];

fetch('/api', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
})
  .then((fromServer) => fromServer.json())
  .then((jsonFromServer) => jsonList.push(...jsonFromServer))
  .catch((err) => {
    console.log(err);
  });

//Functions

function findMatches(wordToMatch, crimeList) {
  return crimeList.filter(crime => {
      const regex = new RegExp(wordToMatch, 'gi');
      return crime.clearance_code_inc_type.match(regex) || crime.date.match(regex)
  });
}

function runThisAfterEvent(input, jsonFromServer) {
  sessionStorage.setItem('crimeList', JSON.stringify(jsonFromServer));
  // Process your crime list
  const matchArray = findMatches(input, jsonFromServer);

  ul = document.querySelector('ul')
  ul.innerHTML = '';

  matchArray.forEach((el, i) => {
    let li = document.createElement('li');
    let li2 = document.createElement('li2');
    let li3 = document.createElement('li3');
    let li4 = document.createElement('li4');
    let li5 = document.createElement('li5');


    li.innerHTML = (`<span class ="address2">${el.street_number}</span><br>`);
    li2.innerHTML = (`<span class ="address">${el.street_address}</span><br>`);
    li3.innerHTML = (`<span class = "crime">${el.clearance_code_inc_type}</span><br>`);
    li4.innerHTML = (`<span class = "date">${el.date}</span><br>`);
    li5.innerHTML = (`<span class = "incidentID">${el.incident_case_id}</span><br>`);
    li.append(li2);
    li.append(li3);
    li.append(li4);
    li.append(li5);

    ul.append(li);
  });
}

document.body.addEventListener('input', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  input = document.querySelector('input').value;
  if(input == '') {
    ul = document.querySelector('ul')
    ul.innerHTML = '';
  } else {
    runThisAfterEvent(input,jsonList)
  }
});

/*
var heatMapPoints = [];
json.features.forEach(function find_id(stuff) {
  count_crime = stuff.count(stuff.clearance_code_inc_type);
  heatMapPoints.push([stuff.location.latitude, stuff.location.longitude, count_crime]);
});
console.log(heatMapPoints);
var heat = L.heatLayer(heatMapPoints, {radius: 25}).addTo(map);

*/