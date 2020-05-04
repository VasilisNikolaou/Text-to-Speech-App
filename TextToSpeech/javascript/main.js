// Get SpeechSynthesis object
const synth = window.speechSynthesis;

// DOM elements
const form = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');
const voiceSelect = document.querySelector('#voice-select');

// Voices array
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

form.addEventListener('submit', e => {

    e.preventDefault();

    if (synth.speaking) {
        console.error('Already speaking...');
        return;
    }

    if (textInput.value !== '') {
        const speakText = new SpeechSynthesisUtterance(textInput.value);
        const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

        //Loop through voices
        voices.forEach(voice => {
            if (voice.name === selectedVoice) {
                speakText.voice = voice;
            }
        });

        //Set pitch and rate
        speakText.pitch = pitch.value;
        speakText.rate = rate.value;

        //Speak
        synth.speak(speakText);
    }

});

// Listeners
rate.addEventListener('change', e => rateValue.textContent = rate.value);
pitch.addEventListener('change', e => pitchValue.textContent = pitch.value);








