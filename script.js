// Controlling CSS and Attributes from JS

//document.getElementById("some-id").style; //Accses the CS rule for "some-id"

//document.getElementById("some-id").style.border = "2px solid black";

//document.getElementById("some-image").src = "images/newpic.jpg" // Changes an image

//document.getElementById("some-a-tag").href = "http://newlink.com"; // change the hyperlink

//Changing an Image vs Adding a new Image
//To add an imag e where there was not one before, you need a container for the image in HTML
//Containers are empty paragraphs <p>, <h1>, <div> elements.
//For example in HTML: <div id ="image-container"> </div>

//document.getElementById("image-container").innerHTML =
//"<img src='images/pic.jpg' >";

// Apple vs Android
document.getElementById("android").addEventListener("click", ChangeToAndroid);

function ChangeToAndroid() {
  document.getElementById("AndroidImage").src = "images/Android-Logo.jpg";
  document.getElementById("Debate").innerHTML = "Android Home";
  document.getElementById("Debate").style.background = "#a4c93b";
  document.getElementById("Debate").href = "https://www.android.com/";
  document.getElementById("html").style.background = "#a4c93b";
  document.getElementById("body").style.fontFamily = "roboto";
  document.getElementById("android").classList.add("redborder");
  document.getElementById("apple").classList.remove("redborder");
}

document.getElementById("apple").addEventListener("click", ChangeToApple);

function ChangeToApple() {
  document.getElementById("AndroidImage").src = "images/Apple-Logo.jpg";
  document.getElementById("Debate").innerHTML = "Apple Home";
  document.getElementById("Debate").style.background = "#b6bcca";
  document.getElementById("Debate").href = "https://www.apple.com/&#39;";
  document.getElementById("html").style.background = "#b6bcca";
  document.getElementById("body").style.fontFamily = "'Brygada 1918', serif";
  document.getElementById("apple").classList.add("redborder");
  document.getElementById("android").classList.remove("redborder");
}
