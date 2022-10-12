// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progress;
let myProgressBar = document.getElementById('progressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'))






let songs = [
    {songName: "0.mp3", filePath: "songs/1.mp3", coverPath: "cover.jpg"},
    {songName: "1.mp3", filePath: "songs/2.mp3", coverPath: "cover.jpg"},
    
    {songName: "3.mp3", filePath: "songs/3.mp3", coverPath: "cover.jpg"},
    {songName: "4.mp3", filePath: "songs/4.mp3", coverPath: "cover.jpg"},
    {songName: "5.mp3", filePath: "songs/5.mp3", coverPath: "cover.jpg"},
    {songName: "6.mp3", filePath: "songs/6.mp3", coverPath: "cover.jpg"},
    {songName: "7.mp3", filePath: "songs/7.mp3", coverPath: "cover.jpg"},
    {songName: "7.mp3", filePath: "songs/8.mp3", coverPath: "cover.jpg"}
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].inerText = songs[i].songName;
})
// audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause')
        masterPlay.classList.add('fa-play')
    }
})


audioElement.addEventListener('progress',()=>{
    console.log("TIMEUPDATE");    
    // update seekbar  
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100
})
const makeAllPlays = (element)=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play')
        element.classList.remove('fa-pause')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays()
        songIndex = parseInt(e.target.id)
        // console.log(e.target);
        e.target.classList.remove('fa-play')
        e.target.classList.add('fa-pause')
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex = 0
    }
    else{

        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{

        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
})