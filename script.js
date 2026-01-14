console.log("Welcome to Spotify!!!");
//Initializing the variables
let songIndex=0;
let audioElement=new Audio('assets/audio/Deva_Shree_Ganesha_2012.mp3');
let masterPlay=document.getElementById('masterPlay');
let progressbar=document.getElementById('progressbar');
let gif=document.getElementById('gif');
let songs=[
    {songName:"Deva_Shree_Ganesha", fileName:"assets/audio/Deva_Shree_Ganesha_2012.mp3", coverImage:"assets/images/ganeshji.jpg"},
    {songName:"Love_Stereo_Again", fileName:"assets/audio/Love_Stereo_Again.mp3", coverImage:"assets/images/ganeshji.jpg"},
    {songName:"Ishq_Manzoor", fileName:"assets/audio/Ishq_Manzoor.mp3", coverImage:"assets/images/ganeshji.jpg"},
    {songName:"Ishq_Shava", fileName:"assets/audio/Ishq_Shava.mp3", coverImage:"assets/images/ganeshji.jpg"},
    {songName:"Mauja_Hi_Mauja", fileName:"assets/audio/Mauja_Hi_Mauja.mp3", coverImage:"assets/images/ganeshji.jpg"},
]

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

progressbar.addEventListener('change',()=>{
    audioElement.currentTime=progressbar.value*audioElement.duration/100;
})