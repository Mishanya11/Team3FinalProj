<<<<<<< HEAD
const endpoint = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json";
=======
//it's either this one

const endpoint = "https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json";
>>>>>>> 4a5f65c0813bbdc41acaf4951e3fe0dbbb1c3267
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

//or this one. with this one u change the link in server.js fetch to our api link
//and then obviously u wud change the 'submit' event listener to the 'reset' event listener
document.body.addEventListener('submit', async (e) => {
    e.preventDefault(); // this stops whatever the browser wanted to do itself.
    const form = $(e.target).serializeArray();
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((fromServer) => fromServer.json())
      .then((jsonFromServer) => runThisWithResultsFromServer(jsonFromServer))
      .catch((err) => {
        console.log(err);
      });
  });
