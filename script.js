console.log("Welcome to Euphony!");

//Initialise the variables
let songIndex=0;
let audioElement=new Audio("Mera Safar.mp3");
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("progressBar");
let gif=document.getElementById("gif");

let songs=[
    {songName:"Mera Safar",filePath:"Mera Safar.mp3",coverPath:"ms.jpg"},
    {songName:"khwaab",filePath:"khwaab.mp3",coverPath:"2.jpg"},
    {songName:"muskurahhte",filePath:"muskurahhte.mp3",coverPath:"3.jpg"},
    {songName:"chaand baliya",filePath:"chaand baliya.mp3",coverPath:"4.jpg"},
    {songName:"channa ve",filePath:"channa ve.mp3",coverPath:"5.jpg"},
    {songName:"pakeej",filePath:"pakeej.mp3",coverPath:"6.jpg"},
    {songName:"jane kyun",filePath:"jane kyun.mp3",coverPath:"dost.jpg"},
    {songName:"aise kyun",filePath:"aise kyun.mp3",coverPath:"ase kyun.jpg"},
    {songName:"tuta phul wahan",filePath:"tuta phul wahan.mp3",coverPath:"10.jpg"},
    {songName:"uff teri ada",filePath:"uff teri ada.mp3",coverPath:"10.jpg"}
]

 //audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.opacity.style=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.opacity.style=0;
    }
});
// Listen to events
audioElement.addEventListener('timeupdate',()=>{
    
    //Update seekBar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress;


})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
        
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        })
    
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
    element.addEventListener('click',(e)=>{
        makeAllPlays();
//console.log(e.target);
index=parseInt(e.target.id);
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
//audioElement.src='songs\[songIndex].mp3';
audioElement.src='Mera Safar.mp3';
audioElement.currentTime=0;
audioElement.play();
    })

    
})

