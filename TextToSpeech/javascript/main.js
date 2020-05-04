// Get SpeechSynthesis object
const synth = window.speechSynthesis;

// DOM Elements
const form = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchVlaue = document.querySelector('#pitch-value');
const voiceSelect = document.querySelector('#voice-select');

// Voices Array
let voices = [];

// Function to populate select element with voices
function getVoices() {
    voices = synth.getVoices();

    voices.forEach(voice => {

        const option = document.createElement('option');

        option.textContent = `${voice.name} (${voice.lang})`;

        if (voice.default) {
            option.textContent += ' -- DEFAULT';
        }

        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);

        voiceSelect.appendChild(option);

    });
}

setTimeout(() => getVoices(), 100);



