


const songs = [
    { title: "Here With Me", src: "audio/defective pieces/d4vd - Here With Me.mp3" },
    { title: "I Love You So", src: "audio/defective pieces/The Walters - I Love You So.mp3" },
    { title: "blue", src: "audio/defective pieces/yung kai - blue.mp3" },
  ];
  
  let currentSongIndex = 0;
  let isPlaying = false;
  
  const audioPlayer = document.getElementById("audio-player");
  const playPauseButton = document.getElementById("play-pause");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const shuffleButton = document.getElementById("shuffle");
  const songList = document.getElementById("song-list");
  
  function loadSong(index) {
    audioPlayer.src = songs[index].src;
    songList.children[index].style.fontWeight = "bold";
    songList.children[index].style.color = "#3498db";
  }
  
  function resetSongStyles() {
    Array.from(songList.children).forEach((item) => {
      item.style.fontWeight = "normal";
      item.style.color = "#7f8c8d";
    });
  }
  
  function playPauseSong() {
    if (isPlaying) {
      audioPlayer.pause();
      playPauseButton.textContent = "▶";
    } else {
      audioPlayer.play();
      playPauseButton.textContent = "❚❚";
    }
    isPlaying = !isPlaying;
  }
  
  function nextSong() {
    resetSongStyles();
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) audioPlayer.play();
  }
  
  function prevSong() {
    resetSongStyles();
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) audioPlayer.play();
  }
  
  function shuffleSong() {
    resetSongStyles();
    currentSongIndex = Math.floor(Math.random() * songs.length);
    loadSong(currentSongIndex);
    if (isPlaying) audioPlayer.play();
  }
  
  // Load initial song
  loadSong(currentSongIndex);
  
  // Event listeners
  playPauseButton.addEventListener("click", playPauseSong);
  nextButton.addEventListener("click", nextSong);
  prevButton.addEventListener("click", prevSong);
  shuffleButton.addEventListener("click", shuffleSong);
  
  // seek bar
  const seekBar = document.getElementById("seek-bar");

audioPlayer.addEventListener("timeupdate", () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    seekBar.value = progress || 0;
});

seekBar.addEventListener("input", () => {
    const newTime = (seekBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = newTime;
});

//Enable song title clicks
function setupSongListClicks() {
  Array.from(songList.children).forEach((item, index) => {
      item.addEventListener("click", () => {
          resetSongStyles();
          currentSongIndex = index;
          loadSong(currentSongIndex);
          if (!isPlaying) {
              playPauseSong(); // Automatically play the song if paused
          } else {
              audioPlayer.play(); // If already playing, just play the selected song
          }
      });
  });
}

// Call the function after defining it
setupSongListClicks();




//playlist 2



//const songs = [
  { title: "Main Tera", src: "audio/daal chawal/Pritam, Arijit Singh - Main Tera Main Tera.mp3" },
  { title: "Kaise Mujhe ", src: "audio/daal chawal/Kaise Mujhe - Benny Dayal.mp3" },
  { title: "Tu Jaane Na", src: "audio/daal chawal/Atif Aslam, Pritam - Tu Jaane Na.mp3" },
];

let currentSongIndex = 0;
let isPlaying = false;

const audioPlayer = document.getElementById("audio-player");
const playPauseButton = document.getElementById("play-pause");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const shuffleButton = document.getElementById("shuffle");
const songList = document.getElementById("song-list");

function loadSong(index) {
  audioPlayer.src = songs[index].src;
  songList.children[index].style.fontWeight = "bold";
  songList.children[index].style.color = "#3498db";
}

function resetSongStyles() {
  Array.from(songList.children).forEach((item) => {
    item.style.fontWeight = "normal";
    item.style.color = "#7f8c8d";
  });
}

function playPauseSong() {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseButton.textContent = "▶";
  } else {
    audioPlayer.play();
    playPauseButton.textContent = "❚❚";
  }
  isPlaying = !isPlaying;
}

function nextSong() {
  resetSongStyles();
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  if (isPlaying) audioPlayer.play();
}

function prevSong() {
  resetSongStyles();
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  if (isPlaying) audioPlayer.play();
}

function shuffleSong() {
  resetSongStyles();
  currentSongIndex = Math.floor(Math.random() * songs.length);
  loadSong(currentSongIndex);
  if (isPlaying) audioPlayer.play();
}

// Load initial song
loadSong(currentSongIndex);

// Event listeners
playPauseButton.addEventListener("click", playPauseSong);
nextButton.addEventListener("click", nextSong);
prevButton.addEventListener("click", prevSong);
shuffleButton.addEventListener("click", shuffleSong);

// seek bar
const seekBar = document.getElementById("seek-bar");

audioPlayer.addEventListener("timeupdate", () => {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  seekBar.value = progress || 0;
});

seekBar.addEventListener("input", () => {
  const newTime = (seekBar.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = newTime;
});

//Enable song title clicks
function setupSongListClicks() {
Array.from(songList.children).forEach((item, index) => {
    item.addEventListener("click", () => {
        resetSongStyles();
        currentSongIndex = index;
        loadSong(currentSongIndex);
        if (!isPlaying) {
            playPauseSong(); // Automatically play the song if paused
        } else {
            audioPlayer.play(); // If already playing, just play the selected song
        }
    });
});
}

// Call the function after defining it
setupSongListClicks(); //


