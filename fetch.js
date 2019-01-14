// Fetch API - (built into Javascript)
// Use Fetch to retrieve data from Numbers API - http://numbersapi.com

document.querySelector('.btn').addEventListener('click', retrieveData);

function retrieveData() {
  // fetch returns promises
  // response from promise .then
  // error from promise .catch
  fetch('http://numbersapi.com/random/year?json')
    .then(response => {
      return response.json();
    })
    // fetch returns a promise that it will retrieve the data from the numbers API - When we console log the json, it returns a promise that needs to be resolved
    .then(
      data => (document.querySelector('.responseContent').innerHTML = data.text)
    )
    .catch(
      error => (document.querySelector('.responseContent').innerHTML = error)
    );
}
