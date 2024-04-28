console.log("welcome")

let songindex=-1;
let audioelement = new Audio("songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));


let songs =[
    {songname:"Ram_siya_ram" , filepath:"songs/1.mp3" , coverpath:"covers/jay_shree_rama.jpg"},
    {songname:"Krishna_flute" , filepath:"songs/2.mp3" , coverpath:"covers/little_krishna.jpg"},
    {songname:"Satranga" , filepath:"songs/3.mp3" , coverpath:"covers/landscape.jpg"},
    {songname:"Gulabi_sadi" , filepath:"songs/4.mp3", coverpath:"covers/flowers.jpg"},
    {songname:"O_maahi" , filepath:"songs/5.mp3", coverpath:"covers/shiva_parvathi.jpg"} ,
    {songname:"South" , filepath:"songs/6.mp3", coverpath:"covers/tom_and_jerry.jpg"},
    {songname:"Animal" , filepath:"songs/7.mp3" , coverpath:"covers/gojo_satoru.jpg"},

    
]

songitems.forEach((element,i)=>{
   
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
    
})
//audioelement.play();

masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioelement.addEventListener('timeupdate',()=>{
    //console.log("timeupdate");

    progress = parseInt((audioelement.currentTime/audioelement.duration) * 100);
    //console.log(progress);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime= myprogressbar.value * audioelement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from( document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from( document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `songs/${songindex+1}.mp3`;
        mastersongname.innerText = songs[songindex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        makeAllPlays();

       // console.log(audioelement.src)

    })
})


document.getElementById('next').addEventListener('click', () => {
    if(songindex>=6){
        songindex = 0
    }
    else{
        songindex +=1;
    }
    audioelement.src = `songs/${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    document.getElementById(`songitemplay${songindex}`).classList.remove('fa-play-circle');
    document.getElementById(`songitemplay${songindex}`).classList.add('fa-pause-circle');
})




document.getElementById('previous').addEventListener('click', () => {
    if(songindex<=0){
        songindex = 6
    }
    else{
        songindex -=1;
    }
    audioelement.src = `songs/${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    document.getElementById(`songitemplay${songindex}`).classList.remove('fa-play-circle');
    document.getElementById(`songitemplay${songindex}`).classList.add('fa-pause-circle');
})