const pianoKeys = document.querySelectorAll(".piano-keys .key"),//dichiaro la variabile per prendere tutti i tasti
volumeSlider = document.querySelector(".volume-slider input"), //regolatore del volume ( fatto dopo non all'inizio)
keysCheckbox = document.querySelector(".keys-checkbox input");
let allKeys = [],
audio = new Audio(`tunes/a.wav`); // Va a prendere la cartella delle note tunes (
const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // Regola le note
    audio.play(); // fa scattare l'audio (ma va regolato)
    const clickedKey = document.querySelector(`[data-key="${key}"]`); // Ottonere l'evento key cliccato
    clickedKey.classList.add("active"); // si aggiunge la classe active all'elemento
    setTimeout(() => { // questo invece l'aggiunge con i 150ms (si può vedere sotto)
        clickedKey.classList.remove("active");
    }, 150);
}
pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); // si aggiunge il valore data-key all'array 'allKeys'
    // chiamare la funzione passando dal valore data-key
    key.addEventListener("click", () => playTune(key.dataset.key));
});
const handleVolume = (e) => {
    audio.volume = e.target.value; // regolatore dell'audio 
}
const showHideKeys = () => {
    // toggle per nascondere i tasti nella tastiera del piano
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}
const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key); 
    // condizione
}
keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);