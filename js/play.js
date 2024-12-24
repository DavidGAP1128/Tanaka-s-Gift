let aux = null;

function playTrack(trackId) {
    document.querySelectorAll('audio').forEach(audio => audio.pause());

    document.querySelectorAll('.gif-container').forEach(gif => gif.classList.remove('visible'));

    // Reproduce el audio correspondiente
    const audio  = document.getElementById(`audio${trackId}`);
    if (audio) {

        if(aux != trackId){
            audio.currentTime = 0; 
        }
        audio.play();
        aux = trackId;
        // Muestra el GIF correspondiente
        const gif = document.getElementById(`gif${trackId}`);
        if (gif) {
            gif.classList.add('visible');
        }
    }
}

function pauseTrack(trackId) {
    // Pausa el audio correspondiente
    const audio = document.getElementById(`audio${trackId}`);
    if (audio) {
        audio.pause();
    }
    
    // Oculta el GIF correspondiente
    const gif = document.getElementById(`gif${trackId}`);
    if (gif) {
        gif.classList.remove('visible');
    }
}
