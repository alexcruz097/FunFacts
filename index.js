const generateBTN = document.querySelector(".generate-btn");
const fact = document.querySelector(".header");
const body = document.querySelector("body");
//start http
function getRandomFacts(url) {
  //start a new XMLHttpRequest
  let xhr = new XMLHttpRequest();
  // my callback function
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      fact.innerHTML =
        `
     <h1>${data.text}</h1>

     `
    }
  }
  // open http
  xhr.open("GET", url);
  //send http

  xhr.send();
}

//generate random colors
generateBTN.addEventListener("click", function () {
  let first = Math.floor(Math.random() * 256);
  let second = Math.floor(Math.random() * 256);;
  let third = Math.floor(Math.random() * 256);

  getRandomFacts(`https://uselessfacts.jsph.pl/random.json?language=en`)
  body.style.backgroundColor  = `rgb(${first},${second},${third})`;
});
