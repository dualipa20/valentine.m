let noCount = 0;
const loveSentences = [
    "Are you sure? ❤️",
    "You're so mean!...",
    "Think about it again!",
    "Stupid!",
    "Give it a chance! ✨"
];

function handleNo() {
    const yesBtn = document.getElementById('yesButton');
    const monkeyImg = document.getElementById('monkey-img');
    const sentenceDisplay = document.getElementById('love-sentence');

    // 1. Grow the Yes button
    noCount++;
    const multiplier = noCount * 20;
    yesBtn.style.padding = `${15 + multiplier}px ${30 + multiplier}px`;
    yesBtn.style.fontSize = `${1.1 + (noCount * 0.5)}rem`;

    // 2. Change monkey to angry face temporarily
    monkeyImg.src = "https://media.tenor.com/RYenq-HwBOoAAAAM/monkey-monk-angry-angy-rawr-monke.gif"; // Angry/Disappointed monkey
    
    // 3. Show a love sentence
    const randomSentence = loveSentences[Math.floor(Math.random() * loveSentences.length)];
    sentenceDisplay.innerText = randomSentence;
}

function handleYes() {
    const monkeyImg = document.getElementById('monkey-img');
    const questionText = document.getElementById('question');
    const buttonsDiv = document.querySelector('.buttons');
    const sentenceDisplay = document.getElementById('love-sentence');

    // Final Success State
    monkeyImg.src = "https://media3.giphy.com/media/DohrzSCB07moM/giphy.gif"; // Happy Monkey
    questionText.innerText = "Yeeyyy!!! 🎉❤️";
    sentenceDisplay.innerText = "I knew you couldn't say no! 😘";
    buttonsDiv.style.display = "none";
}