var Speech = require('watson-html5-speech-recognition');
const say = require('say');


var speech = new Speech.SpeechToText({
  watsonTokenUrl: '/api/speech-to-text/token'
});
window.SpeechToText = speech;
window.say = say;
