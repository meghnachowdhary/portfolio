alert('Hello');

// Button //
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
// Greetings //
  function Greetings(){
    let visitorName1 = prompt ("Please enter your name","<name goes here>");

    if (visitorName1!= null) {
    
      document.getElementById("info").innerHTML =
      "     Greetings ! " + visitorName1 + " Get In Touch";

    }
  }




