const word = document.querySelector('.letter')
const keyboardArea = document.querySelector('.keyboard')
const hintText = document.querySelector('.hintBtn')
const hintTag = document.querySelector('.hintTag')
const hintArrow = document.querySelector('.hintArrow')
const healthBar = document.querySelector('.progressLine')

const wordList = [{word: 'Elephant', hint: 'Animals'}, {word: 'Guitar', hint: 'Musical Instruments'}, {word: 'Pineapple', hint: 'Fruits'}, {word: 'Astronaut', hint: 'Professions'}, {word: 'Bicycle', hint: 'Transportation'}, {word: 'Rainbow', hint: 'Weather'}, {word: 'Detective', hint: 'Professions'}, {word: 'Watermelon', hint: 'Fruits'}, {word: 'Dragonfly', hint: 'Insects'}, {word: 'Football', hint: 'Sports'}, {word: 'Octopus', hint: 'Animals'}, {word: 'Piano', hint: 'Musical Instruments'}, {word: 'Strawberry', hint: 'Fruits'}, {word: 'Scientist', hint: 'Professions'},
{word: 'Helicopter', hint: 'Transportation'}, {word: 'Thunderstorm', hint: 'Weather'}, {word: 'Butterfly', hint: 'Insects'}, {word: 'Basketball', hint: 'Sports'}, {word: 'Giraffe', hint: 'Animals'}, {word: 'Saxophone', hint: 'Musical Instruments'}, {word: 'Orange', hint: 'Fruits'}, {word: 'Engineer', hint: 'Professions'}, {word: 'Motorcycle', hint: 'Transportation'}, {word: 'Blizzard', hint: 'Weather'}, {word: 'Bettle', hint: 'Insects'}, {word: 'Tennis', hint: 'Sports'}, {word: 'Rhino', hint: 'Animals'}, {word: 'Violin', hint: 'Musical Instruments'}, {word: 'Mango', hint: 'Fruits'}, {word: 'Doctor', hint: 'Professions'}]

const keyLetters = ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'W', 'X', 'C', 'V', 'B', 'N']

keyLetters.forEach((item) => {
    keyboardArea.innerHTML += `<button class="keyword">${item}</button>`
})

const gameEvent = wordList[Math.floor(Math.random()*wordList.length)]
const blankLetters = Math.ceil(gameEvent.word.length*0.4)
const wrongAttempts= Math.floor(gameEvent.word.length*0.5)
let count = 0
Array.from(gameEvent.word).forEach((item) => {
    if (count <= blankLetters && count % 2 === 0){
        word.innerHTML += `<div class="wordLetter"><div>`
    }
    else word.innerHTML += `<div class="wordLetter">${item}<div>`
    count += 1;
})
if (gameEvent.word === 'Thunderstorm') word.style.width = "45%"

hintText.addEventListener('mouseover', (e) => {
    hintTag.style.display = 'flex'
    hintArrow.style.display = 'block'
    hintTag.innerHTML = gameEvent.hint
})
hintText.addEventListener('mouseleave', (e) => {
    hintTag.style.display = 'none'
    hintArrow.style.display = 'none'
})

while (wrongAttempts >= 0 && healthBar >= 0){

}


