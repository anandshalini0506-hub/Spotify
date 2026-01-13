console.log("Welcome to Spotify!!!");
//Initializing the variables
let songIndex=0;
let audioElement=new Audio('assets/audio/Deva_Shree_Ganesha_2012.mp3');
let masterPlay=document.getElementById('masterPlay');
let progressbar=document.getElementById('progressbar');
let songs=[
    {songName:"Salaam-e-ishq", fileName:"assets/audio/Deva_Shree_Ganesha_2012.mp3", coverImage:"assets/images/ganeshji.jpg"},
    {songName:"Salaam-e-ishq", fileName:"assets/audio/Deva_Shree_Ganesha_2012.mp3", coverImage:"assets/images/ganeshji.jpg"},
    {songName:"Salaam-e-ishq", fileName:"assets/audio/Deva_Shree_Ganesha_2012.mp3", coverImage:"assets/images/ganeshji.jpg"},
    {songName:"Salaam-e-ishq", fileName:"assets/audio/Deva_Shree_Ganesha_2012.mp3", coverImage:"assets/images/ganeshji.jpg"},
    {songName:"Salaam-e-ishq", fileName:"assets/audio/Deva_Shree_Ganesha_2012.mp3", coverImage:"assets/images/ganeshji.jpg"},
    {songName:"Salaam-e-ishq", fileName:"assets/audio/Deva_Shree_Ganesha_2012.mp3", coverImage:"assets/images/ganeshji.jpg"},
    {songName:"Salaam-e-ishq", fileName:"assets/audio/Deva_Shree_Ganesha_2012.mp3", coverImage:"assets/images/ganeshji.jpg"},
]

//handle play/pause button
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
})
//Listen to events
progressbar.addEventListener('timeupdate', ()=>{
    console.log('time update');
})