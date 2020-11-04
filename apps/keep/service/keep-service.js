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
  const loaded = loadFromStorage(KEEPS_KEY);
  if (!loaded || !loaded.length) {
    gKeeps = keeps;
    saveToStorage(KEEPS_KEY, gKeeps);
  } else gKeeps = loaded;
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

function updateKeep(keep) {
  const idx = getKeepIdxById(keep.id);
  gKeeps.splice(idx, 1, keep);
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
    type: 'keep-note',
    isPinned: false,
    info: {
      title: 'Travel Plans',
      txt: 'Nice joke!!! not gonna happen soon buddy!',
    },
    style: {
      backgroundColor: '#888888',
    },
  },
  {
    id: 'fjR61s',
    type: 'keep-note',
    isPinned: true,
    info: {
      title: 'Lunch',
      txt: 'Ktzitzot and havita',
    },
    style: {
      backgroundColor: '#888888',
    },
  },
  {
    id: '1Fh60k',
    type: 'keep-img',
    color: '#888888',
    isPinned: true,
    info: {
      url: 'https://foodallergycanada.ca/wp-content/uploads/egg-2.jpg',
    },
    style: {
      backgroundColor: '#888888',
    },
  },
  {
    id: 'sSg6k2',
    type: 'keep-link',
    isPinned: false,
    info: {
      title: 'Havita',
      url: 'https://www.bbcgoodfood.com/recipes/basic-omelette',
    },
    style: {
      backgroundColor: '#888888',
    },
  },
  {
    id: 'kf7N5s',
    type: 'keep-todos',
    isPinned: false,
    info: {
      title: 'Havita',
      todos: [
        {id: 'ld3F67', txt: 'Make Ktzitzot', doneAt: null},
        {id: 's6EE4g', txt: 'Make Havita', doneAt: 1604481989}
      ],
    },
    style: {
      backgroundColor: '#888888',
    },
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

