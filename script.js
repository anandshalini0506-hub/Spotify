console.log("Welcome to Spotify!!!");
//Initializing the variables
let songIndex=0;
let audioElement=new Audio('assets/audio/Deva_Shree_Ganesha_2012.mp3');
let masterPlay=document.getElementById('masterPlay');
let progressbar=document.getElementById('progressbar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Deva Shree Ganesha", fileName:"assets/audio/Deva_Shree_Ganesha_2012.mp3", coverImage:"assets/images/ganeshji.jpg"},
    {songName:"Love Stereo Again", fileName:"assets/audio/Love_Stereo_Again.mp3", coverImage:"assets/images/love_stereo.jpg"},
    {songName:"Ishq Manzoor", fileName:"assets/audio/Ishq_Manzoor.mp3", coverImage:"assets/images/ishqmanzoor.jpg"},
    {songName:"Ishq Shava", fileName:"assets/audio/Ishq Shava.mp3", coverImage:"assets/images/ishqshava.jpg"},
    {songName:"Mauja Hi Mauja", fileName:"assets/audio/Mauja_Hi_Mauja.mp3", coverImage:"assets/images/mauja.jpg"},
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverImage;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//handle play/pause button
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('time update');
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressbar.value=progress;
})

progressbar.addEventListener('input',()=>{
    audioElement.currentTime=progressbar.value*audioElement.duration/100;
})

const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();

        songIndex = parseInt(e.currentTarget.id);

        e.currentTarget.classList.remove('fa-circle-play');
        e.currentTarget.classList.add('fa-circle-pause');

        audioElement.src = songs[songIndex].fileName;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        progressbar.value = 0;

        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = songs[songIndex].fileName;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    progressbar.value = 0;

    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = songs[songIndex].fileName;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    progressbar.value = 0;

    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
