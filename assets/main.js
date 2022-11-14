async function getFlags() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return data;
}

async function main() {
  let flags = await getFlags();
  console.log(flags);

  let counter = document.querySelector("#counter");
  let timeCounter = 5;
  setInterval(function () {
    if (timeCounter == 0) {
      return;
    }
    timeCounter--;
    counter.innerHTML = `${timeCounter}`;
  }, 1000);

  function getRandomNumber(start, end) {
    return Math.trunc(Math.random() * (end - start) + start); //OKAY
  }
let country = 0;
function getCountry() {
    country = flags[getRandomNumber(0, 250)];
    let flagImage = document.querySelector("#flag");
    flagImage.setAttribute("src", country.flags.png);
  
}
  getCountry();
  
  let textBox = document.querySelector("#textBox");
  let button = document.querySelector("#button");
  let score = document.querySelector('#score');
  let buttonSkip = document.querySelector ('#buttonSkip')
  let point =0;

buttonSkip.addEventListener ('click', function() {
    if (timeCounter==0) {
        return;
    }
    getCountry();
})
  button.addEventListener ("click", function() {
    if (timeCounter==0) {
        return;
    }
    if (!textBox.value) {
        return;
    }
    if (textBox.value.toLowerCase()==country.name.common.toLowerCase()) {
    score.innerHTML = `Score:${++point}`
    
    }
    getCountry()
    textBox.value = ""
  }) 
}

main();
