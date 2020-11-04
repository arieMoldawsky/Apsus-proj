export const keepService = {
  // askApi,
  getKeeps,
  getKeepById,
  getKeepByIdx,
  getKeepIdxById,
  addKeep,
  updateKeep,
  removeKeep,
  saveToStorage,
  initKeeps,
  // createKeeps,
}


const KEEPS_KEY = 'missKeepDB';

var gKeeps;

function initKeeps() {
  if (loadFromStorage(KEEPS_KEY)) gKeeps = loadFromStorage(KEEPS_KEY);
  else {
    gKeeps = keeps
    saveToStorage(KEEPS_KEY, gKeeps)
  }
}

function getKeeps() {
  return JSON.parse(JSON.stringify(gKeeps));
}

function getKeepById(keepId, source = gKeeps) {
  const keep = source.find(keep => keep.id === keepId);
  return JSON.parse(JSON.stringify(keep));
}

function getKeepByIdx(idx, source = gKeeps) {
  return JSON.parse(JSON.stringify(source[idx]));
}

function getKeepIdxById(keepId, source = gKeeps) {
  return source.findIndex(keep => keep.id === keepId);
}

function addKeep(keep) {
  gKeeps.unshift(keep);
  saveToStorage(KEEPS_KEY, gKeeps);
  return Promise.resolve(gKeeps);
}

function removeKeep(keepId) {
  const idx = getKeepIdxById(keepId);;
  gKeeps.splice(idx, 1);
  saveToStorage(KEEPS_KEY, gKeeps);
  return Promise.resolve(gKeeps);
}

function updateKeep(updatedKeep) {
  const idx = getKeepIdxById(updatedKeep.id);
  gKeeps.splice(idx, 1, updateKeep);
  saveToStorage(KEEPS_KEY, gKeeps);
  return Promise.resolve(gKeeps);
}

function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

const keeps = [
  {
    id: 'ndjy38',
    title: 'Travel Plans',
    type: 'note',
    txt: 'Nice joke!!! not gonna happen soon buddy!',
    color: '#ff7f7f',
    pinned: false
  },
  {
    id: 'fjR61s',
    title: 'Lunch',
    type: 'note',
    txt: 'Ktzitzot and havita',
    color: '#f9ff60',
    pinned: true
  },
  {
    id: '1Fh60k',
    type: 'img',
    url: 'https://foodallergycanada.ca/wp-content/uploads/egg-2.jpg',
    color: '#ffffff',
    pinned: true
  },
  {
    id: 'sSg6k2',
    title: 'Havita',
    type: 'link',
    url: 'https://www.bbcgoodfood.com/recipes/basic-omelette',
    color: '#ffffff',
    pinned: false
  },
]



// function askApi(term = 'guitars') {
  // return Promise.resolve(loadFromStorage(API_CACHE_KEY)
  // .then(res => {
  // if (res) return res;
  // else return (axios.get(`https://www.googleapis.com/keeps/v1/volumes?q=${term}&filter=paid-ekeeps`))
  // return Promise.resolve(axios.get(`https://www.googleapis.com/keeps/v1/volumes?q=${term}&filter=paid-ekeeps`))
  //   .then(res => formatApiRes(res.data.items))
  //   .then(formatted => {
  //     saveToStorage(API_CACHE_KEY, formatted);
  //     return formatted;
  //   });
  // }))
// }

