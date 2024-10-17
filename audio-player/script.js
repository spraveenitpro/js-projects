const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const progressKnob = document.querySelector('.progress-knob')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

// Song title
const songs = ['hey', 'summer', 'ukulele']

// Keep track of songs
let songIndex = 2;

// Initially load song into DOM
loadSong(songs[songIndex]);

// Update Song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex])
    playSong()
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0
    }
    loadSong(songs[songIndex]);
    playSong()
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
    progressKnob.style.left = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

// Drag functionality
let isDragging = false;

function startDrag(e) {
    isDragging = true;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}

function drag(e) {
    if (isDragging) {
        const containerRect = progressContainer.getBoundingClientRect();
        const containerWidth = containerRect.width;
        let x = e.clientX - containerRect.left;

        // Constrain x within the container bounds
        x = Math.max(0, Math.min(x, containerWidth));

        const progressPercent = (x / containerWidth) * 100;
        progress.style.width = `${progressPercent}%`;
        progressKnob.style.left = `${progressPercent}%`;

        // Update audio time
        const duration = audio.duration;
        audio.currentTime = (progressPercent / 100) * duration;
    }
}

function stopDrag() {
    isDragging = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
}

// Event Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')
    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

//Change song events
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)
progressContainer.addEventListener('click', setProgress)
audio.addEventListener('ended', nextSong)

// Drag event listeners
progressKnob.addEventListener('mousedown', startDrag);
