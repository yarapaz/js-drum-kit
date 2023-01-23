'use strict';

//Order of events:
//1. Press the key on the keyboard
//2. Look for the sound to be played on the audio tags
//3. Add the "playing" class to the div representing that key on the keyboard to change its style

//DOM elements
const keys = document.querySelectorAll('.key');

//Functions
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stops function from running all together
  audio.currentTime = 0; //rewind audio to the start. If not it will only play it again, even when pressing multiple times, when the audio is over.

  audio.play(); //plays the audio

  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //skip it if it's not a transform and it is another kind of transition
  this.classList.remove('playing'); //this makes reference to whatever the addeventlistener has been applied to
}

//Events
//It recognises the event happening when pressing a key on window
window.addEventListener('keydown', playSound);
keys.forEach((eachKey) => {
  eachKey.addEventListener('transitionend', removeTransition);
});
