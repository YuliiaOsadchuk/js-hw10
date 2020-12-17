const letters = document.querySelectorAll(".letter-block");
const audio = new Audio();
letters.forEach((letter)=>letter.addEventListener('click', function(event){
    audio.src = `./sound/${event.target.id}.mp3`;
    audio.play();
}))

document.addEventListener('keydown', function(event){
    audio.src = `./sound/${event.code}.mp3`;
    audio.play();
})