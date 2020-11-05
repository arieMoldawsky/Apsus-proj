export const utilService = {
  makeId,
  makeLorem,
  getRandomInt,
  saveToStorage,
  loadFromStorage
}

function makeId(length = 6) {
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

function makeLorem(length = 20) {
  var lorem = 'The ';
  const words = [
    "The sky", "above", "the port", "was", "the color of television", "tuned", "to", "a dead channel", ".", "All", "this happened", "more or less", ".", "I", "had", "the story", "bit by bit", "from various people", "and", "as generally", "happens", "in such cases", "each time", "it", "was", "a different story", ".", "It", "was", "a pleasure", "to", "burn"
  ]
  for (var i = 0; i < length; i++) {
    lorem += words[getRandomInt(0, words.length)]
    if (i !== length-1) lorem += ' '
  }
  return lorem
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}