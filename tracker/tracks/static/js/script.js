console.log("script has loaded")




function idTracks() {
    console.log("button was clicked");
    window.location.href = 'tracks';
}



window.addEventListener('resize', function() {
    if (this.window.innerWidth < 700){
        console.log("mobel response")
    }
    else {
        console.log("pc response")
    }
})


window.addEventListener('resize', function() {
    if (this.window.innerWidth < 700) {
        document.querySelectorAll('[data-aos="fade-right"]').forEach(function(element) {
            element.setAttribute('data-aos', 'fade-down');
        });
        document.querySelectorAll('[data-aos="fade-left"]').forEach(function(element) {
            element.setAttribute('data-aos', "fade-down");
        })
    } else {
        document.querySelectorAll('[data-aos="fade-down"]').forEach(function(element) {
            element.setAttribute('data-aos', 'fade-right');
        });
    }
});


AOS.init({
    offset: 225,
    duration: 1500,
  });