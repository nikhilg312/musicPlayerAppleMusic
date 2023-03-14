console.log("Welcome to My Playlist");

let songs=[
    {songname: "Industry ET", filepath:"industryET.mp3" ,coverpath:"ab67616d0000b27359d20d2586b02beaefd9bd32.jpeg"},
    {songname: "Sing For The Moment", filepath:"singforthemoment.mp3" ,coverpath:"singforthemoment.jpeg"},
    {songname: "Feel Nothing", filepath:"feelnothing.mp3" ,coverpath:"feelnothing.jpeg"},
    {songname: "Do I Wanna Know?", filepath:"doiwannaknow.mp3" ,coverpath:"doi.jpeg"},
    {songname: "Lose Yourself", filepath:"loseyourself.mp3" ,coverpath:"singforthemoment.jpeg"},
    {songname: "Never Love Again", filepath:"neverloveagain.mp3" ,coverpath:"singforthemoment.jpeg"},
    {songname: "Mask Off", filepath:"maskoff.mp3" ,coverpath:"maskoff.jpeg"},
    {songname: "Take Me To Church", filepath:"takemetochurch.mp3" ,coverpath:"tmtc.jpeg"},
    {songname: "Way Down We Go", filepath:"waydownwego.mp3" ,coverpath:"WayDownWeGo.jpeg"}
]
let SongIndex=0;
let index=0;
let audioElement=new Audio();
audioElement.src=songs[index].filepath;
audioElement.currentTime=0;
let MasterPlay=document.getElementById('MasterPlay');
let MasterPlay2=document.getElementById('MasterPlay2')
let ProgressBar=document.getElementById('ProgressBar');
let next=document.getElementById('next');
let back=document.getElementById('back');
let rando=document.getElementById('shuffle');
let songitems=Array.from(document.getElementsByClassName('songitem'));

if(audioElement.currentTime==100)
{
    index=index+1;
    audioElement.src=songs[index].filepath;
    audioElement.currentTime=0;
    audioElement.play();
}
MasterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        MasterPlay.classList.remove('fa-circle-play');
        MasterPlay.classList.add('fa-circle-pause');
        MasterPlay2.classList.remove('fa-play');
        MasterPlay2.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        MasterPlay2.classList.remove('fa-pause');
        MasterPlay2.classList.add('fa-play');
        MasterPlay.classList.remove('fa-circle-pause');
        MasterPlay.classList.add('fa-circle-play');
    }

})
MasterPlay2.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();

        MasterPlay.classList.remove('fa-circle-play');
        MasterPlay.classList.add('fa-circle-pause');
        MasterPlay2.classList.remove('fa-play');
        MasterPlay2.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        MasterPlay2.classList.remove('fa-pause');
        MasterPlay2.classList.add('fa-play');
        MasterPlay.classList.remove('fa-circle-pause');
        MasterPlay.classList.add('fa-circle-play');
    }

})
songitems.forEach((element,i)=>{
    element.getElementsByClassName('f1')[0].src=songs[i].coverpath;
    element.getElementsByClassName('se')[0].innerText=songs[i].songname;
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseFloat((audioElement.currentTime/audioElement.duration)*100)
    ProgressBar.value=progress
    if(progress==100)
    {
        index=index+1;
        audioElement.src=songs[index].filepath;
        audioElement.currentTime=0;
        audioElement.play();
        
    }
})
ProgressBar.addEventListener('change' ,()=>{
    audioElement.currentTime=ProgressBar.value*audioElement.duration/100
})

//audioElement.play()
Array.from(document.getElementsByClassName('se')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        index=parseInt(e.target.id);
        audioElement.src=songs[index].filepath;
        audioElement.currentTime=0;
        audioElement.play();
        MasterPlay.classList.remove('fa-circle-play');
        MasterPlay.classList.add('fa-circle-pause');

        MasterPlay2.classList.remove('fa-play');
        MasterPlay2.classList.add('fa-pause');
    })
})
back.addEventListener('click',()=>
{
    if(index<=0)
    {
        index=0;
    }
    else
    {
        index=index-1;
    }

    audioElement.src=songs[index].filepath;
    audioElement.currentTime=0;
    audioElement.play();
})
next.addEventListener('click',()=>
{
    if(index>=8)
    {
        index=0;
    }
    else
    {
        index=index+1;
    }

    audioElement.src=songs[index].filepath;
    audioElement.currentTime=0;
    audioElement.play();
})
rando.addEventListener('click',()=>
{
    index=4;

    audioElement.src=songs[index].filepath;
    audioElement.currentTime=0;
    audioElement.play();
})
