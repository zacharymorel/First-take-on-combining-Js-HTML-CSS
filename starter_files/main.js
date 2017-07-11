const kittenButton = document.getElementById('kitten_button')
const neoButton = document.getElementById('tokyo_button')
const heavyMetalButton = document.getElementById('metal_button')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const kittenHead1 = 'Kittens'
const kittenText = 'A kitten, also known as a kitty or kitty cat, is a juvenile cat. After being born, kittens are totally dependent on their mother for survival and they do not normally open their eyes until after seven to ten days.'
const neoHead1 = 'Neo Tokyo'
const neoText = 'The Neo Tokyo aesthetic has permeated some of the biggest films and novels of the last 40 years, including Blade Runner and Akira.'
const heavyMetalh1 = 'Heavy Metal'
const heavyMetalText = 'Heavy metal (or simply metal) is a genre of rock music that developed in the late 1960s and early 1970s, largely in the United Kingdom and the United States.'






function kittenTheme(){
  body.id = 'kittens'
  h1.textContent = kittenHead1
  p.textContent = kittenText
}

function neoTheme(){
  body.id = 'tokyo'
  h1.textContent = neoHead1
  p.textContent = neoText
}

function heavyMetalTheme(){
  body.id = 'metal'
  h1.textContent = heavyMetalh1
  p.textContent = heavyMetalText
}

kittenButton.addEventListener('click', kittenTheme)

neoButton.addEventListener('click', neoTheme)

heavyMetalButton.addEventListener('click', heavyMetalTheme)
