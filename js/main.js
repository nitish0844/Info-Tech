function initMap() {
  // your location
  const loc = { lat: 10.75455, lng: 78.824127 };
  //Centered map on location
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc,
  });
  //the marker, positioned at location
  const marker = new google.maps.marker({ position: loc, map: map });
}
/*_________________________________________________________*/
//sticky menu background
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.8;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

/*----------------------------------------------------------*/

// smooth scrolling

$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 50,
      },
      800
    );
  }
});
