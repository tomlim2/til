---
layout: post-base
title: Javascript promises Quizs
meta: promises 퀴즈 오답 노트
category: Javascript
tags: [Javascript]
source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
---

### Fufilled, Failed, Pending

### What state will this promise be in after 0 seconds?

```js
fetch('coffee.jpg')
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.blob();
})
.then(myBlob => {
  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});
```

```js
async function myFetch() {
  let response = await fetch('coffee.jpg');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let myBlob = await response.blob();

  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

myFetch()
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});
```

```js
async function myFetch() {
  let response = await fetch('coffee.jpg');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.blob();

}

myFetch().then((blob) => {
  let objectURL = URL.createObjectURL(blob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}).catch(e => console.log(e));
```

## example2

```js
const dataMuseUrl = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';

const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = dataMuseUrl + queryParams + wordQuery;

  try{
    const response =  await fetch(endpoint);
    if(response.ok){
      let jsonResponse = await response.json();
			renderWordResponse(jsonResponse);
    }
  }
  catch(error){
    console.log(error);
  }
}

const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

const apiKey = '<Your API Key>';
const rebrandlyEndpoint = 'https://api.rebrandly.com/v1/links';

const shortenButton = document.querySelector('#shorten');

const shortenUrl = async () =>{
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});

  try{
    const response =  await fetch(rebrandlyEndpoint, {
      method: 'POST',
      body: data,
      headers: {
        "Content-type": "application/json",
        'apikey': apiKey
      }
    })
    if(response.ok){
      const jsonResponse = await response.json();
			renderByteResponse(jsonResponse);
    }
  }
  catch(error){
    console.log(error);
  }
}

const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
```

```js
async function getData() {
  try {
    let response = await fetch('https://api-to-call.com/endpoint', { 
      method: 'POST', 
      body: JSON.stringify({id: 200}), 
      dataType: 'json'
  });
  let jsonResponse = await response.json();
  return jsonResponse;
  } catch (error) {
    console.log(error);
  }
}
 
```

## Resource

- [Cooperative asynchronous JavaScript: Timeouts and intervals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
- [Choosing the right approach](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)
- [Code Academy](codecademy.com)
