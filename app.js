//Register ServiceWorker door Arno
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("sw.js")
            .then((reg) => console.log("Service worker: Registered"))
            .catch((err) => console.log(`Service Worker: Error: ${err}`));
    });
}

//Darkmode Toggle door Arno
$("#sunIcon, #moonIcon").on("click", function() {
    console.log($(this).attr("id"));
    if ($(this).attr("id") == "moonIcon") {
        $(":root").attr("data-theme", "dark");
        $("#logo").addClass("dark");
    } else {
        $(":root").removeAttr("data-theme");
        $("#logo").removeClass("dark");
    }
    if ($(this).hasClass("selectedThemeIcon") == false) {
        $("#sunIcon, #moonIcon").removeClass("selectedThemeIcon");
        $(this).toggleClass("selectedThemeIcon");
    }
});

//Smooth Scrolling by Danny
$('#main-nav a').on('click', function(e) {
        if (this.hash !== "") {
            event.preventDefault();

            const hash = this.hash;

            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    })
    //Cursisten grid door Arno

//Cursisten Section Door Matthias
// document.getElementById("cursBtn").onclick = function () {
//   var el = document.getElementById("cursistenContainer");
//   if (el.style.display != "block") {
//     el.style.display = "block";
//   } else {
//     el.style.display = "none";
//   }
// };