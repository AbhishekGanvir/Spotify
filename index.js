document.getElementById('refreshDiv').addEventListener('click', function() {
  location.reload(); // Reload the page
});

function showAlert() {
  alert("Feel free to explore the website without any log in or sign up.");
}



// playlist songs
function setupPlaylist(playlistId, audioPlayerId, controls) {
    const songs = playlistId === 1
      ? [
          { title: "Here With Me", src: "audio/defective pieces/d4vd - Here With Me.mp3" },
          { title: "I Love You So", src: "audio/defective pieces/The Walters - I Love You So.mp3" },
          { title: "blue", src: "audio/defective pieces/yung kai - blue.mp3" },
        ]
      : [
          { title: "Main Tera", src: "audio/daal chawal/Pritam, Arijit Singh - Main Tera Main Tera.mp3" },
          { title: "Kaise Mujhe", src: "audio/daal chawal/Kaise Mujhe - Benny Dayal.mp3" },
          { title: "Tu Jaane Na", src: "audio/daal chawal/Atif Aslam, Pritam - Tu Jaane Na.mp3" },
        ];
  
    let currentSongIndex = 0;
    let isPlaying = false;
  
    const audioPlayer = document.getElementById(audioPlayerId);
    const playPauseButton = controls.playPause;
    const prevButton = controls.prev;
    const nextButton = controls.next;
    const shuffleButton = controls.shuffle;
    const songList = controls.songList;
  
    function loadSong(index) {
      audioPlayer.src = songs[index].src;
      resetSongStyles();
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
  
    // Load the initial song
    loadSong(currentSongIndex);
  
    // Add event listeners
    playPauseButton.addEventListener("click", playPauseSong);
    nextButton.addEventListener("click", nextSong);
    prevButton.addEventListener("click", prevSong);
    shuffleButton.addEventListener("click", shuffleSong);
  
    // Seek bar functionality
    const seekBar = controls.seekBar;
  
    audioPlayer.addEventListener("timeupdate", () => {
      const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      seekBar.value = progress || 0;
    });
  
    seekBar.addEventListener("input", () => {
      const newTime = (seekBar.value / 100) * audioPlayer.duration;
      audioPlayer.currentTime = newTime;
    });
  
    // Setup song list clicks
    setupSongListClicks();
  }
  
  // Initialize both playlists
  setupPlaylist(1, "audio-player-1", {
    playPause: document.querySelector(".outer-card #play-pause"),
    prev: document.querySelector(".outer-card #prev"),
    next: document.querySelector(".outer-card #next"),
    shuffle: document.querySelector(".outer-card #shuffle"),
    songList: document.querySelector(".outer-card #song-list"),
    seekBar: document.querySelector(".outer-card #seek-bar"),
  });
  
  setupPlaylist(2, "audio-player-2", {
    playPause: document.querySelector(".outer2-card #play-pause"),
    prev: document.querySelector(".outer2-card #prev"),
    next: document.querySelector(".outer2-card #next"),
    shuffle: document.querySelector(".outer2-card #shuffle"),
    songList: document.querySelector(".outer2-card #song-list"),
    seekBar: document.querySelector(".outer2-card #seek-bar"),
  });
  




//Artist songs
let currentAudio = null; // To track the currently playing audio
let currentButton = null; // To track the currently active button

// Add event listeners to all play-svg buttons
let numberofartistsongs = document.querySelectorAll(".play-svg").length;

for (let i = 0; i < numberofartistsongs; i++) {
    document.querySelectorAll(".play-svg")[i].addEventListener("click", function () {
        let artistName = this.querySelector("img").alt; // Get artist name from alt attribute

        if (currentButton === this && currentAudio && !currentAudio.ended) {
            // Pause the current audio if the same button is clicked again
            if (!currentAudio.paused) {
                currentAudio.pause();
                toggleButtonIcon(this, "play"); // Switch to play icon
            } else {
                currentAudio.play();
                toggleButtonIcon(this, "pause"); // Switch to pause icon
            }
        } else {
            // If a different button is clicked or audio has ended
            if (currentAudio) {
                currentAudio.pause(); // Pause the previous audio
                toggleButtonIcon(currentButton, "play"); // Reset the previous button
            }

            makeSound(artistName, this); // Play the new audio
        }
    });
}

function makeSound(key, button) {
    let audioPath;

    switch (key) {
        case "Mazzy Star":
            audioPath = 'audio/Mazzy Star - Fade Into You.mp3';
            break;
        case "Shreya Ghoshal":
            audioPath = 'audio/Shreya Ghoshal, Neelesh Misra - Suna Suna.mp3';
            break;
        case "Atif Aslam":
            audioPath = 'audio/Atif Aslam, Pritam - Pehli Nazar Mein.mp3';
            break;
        case "Lana Del Rey":
            audioPath = 'audio/Lana Del Rey - Music To Watch Boys To.mp3';
            break;
        case "KK":
            audioPath = 'audio/KK - Ajab Si.mp3';
            break;
        case "The Weekend":
            audioPath = 'audio/The Weeknd, Ariana Grande - Save Your Tears (Remix) (with Ariana Grande) - Bonus Track.mp3';
            break;
        default:
            console.log("Invalid key: " + key);
            return;
    }

    // Create a new Audio object
    if (currentAudio) {
        currentAudio.pause(); // Stop any current audio
    }
    currentAudio = new Audio(audioPath);
    currentAudio.play();

    currentButton = button; // Update the current button
    toggleButtonIcon(button, "pause"); // Switch to pause icon

    // Reset the state when the audio ends
    currentAudio.addEventListener("ended", () => {
        toggleButtonIcon(button, "play");
        currentAudio = null; // Clear the audio reference
        currentButton = null; // Clear the button reference
    });
}

function toggleButtonIcon(button, state) {
    const imgElement = button.querySelector("img");
    if (state === "play") {
        imgElement.src = "./svg/spotify play.svg"; // Replace with play icon path
        imgElement.alt = "Play";
    } else if (state === "pause") {
        imgElement.src = "./svg/spotify pause.svg"; // Replace with pause icon path
        imgElement.alt = "Pause";
    }
}

function buttonAnimation(currentkey) {
    let activeButton = document.querySelector(`img[alt='${currentkey}']`);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(() => activeButton.classList.remove("pressed"), 100); // Remove animation after 100ms
    }
}
