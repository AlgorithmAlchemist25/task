let ytplayer;

let timerStarted = false;

const form =
document.getElementById("leadForm");

function onYouTubeIframeAPIReady(){

    ytplayer = new YT.Player("player",{

        height:"500",

        width:"900",

        videoId:"RJTCAL1DRro",

        events:{
            onStateChange:onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event){

    if(
        event.data === YT.PlayerState.PLAYING &&
        !timerStarted
    ){

        timerStarted = true;

        setTimeout(() => {

            form.style.display = "block";

        },6000);
    }
}

document
.getElementById("closeForm")
.addEventListener("click",() => {

    form.style.display = "none";
});