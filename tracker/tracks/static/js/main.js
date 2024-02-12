
console.log("js updated")


function idTracks() {
    console.log("button was clicked");
    window.location.href = 'tracks';
}


window.addEventListener('resize', function() {
    if (this.window.innerWidth < 700){
        console.log("mobel response")
    }
})

AOS.init({
    offset: 225,
    duration: 1500,
  });


