
console.log("js loaded")


function idTracks() {
    console.log("button was clicked");
    window.location.href = 'tracks';
}


window.addEventListener('resize', function() {
    if (this.window.innerWidth < 700){
        console.log("mobel response")
    }
})


