// Async Await

// async before a function will return a promise - always
// Recall that resolved promises use .then for the next step

// Async Await - Numbers API example

// event listener for button click
document.querySelector('.btn').addEventListener('click', asyncCall);

function asyncCall() {
  console.log('asyncCalled() called');
  getData().then(
    results =>
      (document.querySelector('.responseContent').innerText = results.text)
  );
}
async function getData() {
  console.log('getData() called');
  // await can be used inside async functions
  // waits until promised is resolved
  // we will wait for the response of the fetch call
  const response = await fetch('http://numbersapi.com/random/year?json');
  // after the fetch call returns our promise,
  // wait until it has been resolved
  const data = await response.json();
  // return data and because async always returns promise
  // when the function is called via a click
  // when the function is resolved we will display results in the DOM
  return data;
}
