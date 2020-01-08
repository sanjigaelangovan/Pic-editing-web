// Upload picture
var loadFile = function(event) {
  var image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
};

var angle = 0,
  scalex = 1,
  scaley = 1;

// Transform functions
function flipH() {
  scalex = scalex * (-1);
  document.getElementById('imageContainer').className = "flip" + scalex + scaley;
}

function flipV() {
  scaley = scaley * (-1);
  document.getElementById('imageContainer').className = "flip" + scalex + scaley;
}

function rotateR() {
  angle = (angle + 90) % 360;
  document.getElementById('imageContainer').className = "rotateR" + angle;
}

function rotateL() {
  angle = (angle + 90) % 360;
  document.getElementById('imageContainer').className = "rotateL" + angle;
}

// Filter function
function editImage() {

  var br = $("#brightRange").val(); // brightness
  var ct = $("#contrastRange").val(); // contrast
  var huer = $("#hueRange").val(); //hue
  var saturate = $("#saturationRange").val(); //saturate
  var opacity = $("#opacityRange").val(); //opacity
  var blur = $("#blurRange").val(); // blur
  var gs = $("#grayRange").val(); // greyscale
  var sepia = $("#sepiaRange").val(); //sepia

  var filter = 'grayscale(' + gs +
    '%) blur(' + blur +
    'px) brightness(' + br +
    '%) contrast(' + ct +
    '%) hue-rotate(' + huer +
    'deg) opacity(' + opacity +
    '%) saturate(' + saturate +
    '%) sepia(' + sepia + '%)';

  $("#imageContainer img").css("filter", filter);
  $("#imageContainer img").css("-webkit-filter", filter);

}

// Sliders change and picture is updated via editImage() function
$("input[type=range]").change(editImage).mousemove(editImage);

// Reset sliders back to their original values on press of 'reset'
function reset() {
  document.getElementById('imageContainer').className = "reset";
  document.getElementById('brightRange').value = 100;
  document.getElementById('contrastRange').value = 100;
  document.getElementById('hueRange').value = 0;
  document.getElementById('saturationRange').value = 100;
  document.getElementById('opacityRange').value = 100;
  document.getElementById('blurRange').value = 0;
  document.getElementById('grayRange').value = 0;
  document.getElementById('sepiaRange').value = 0;
  scalex = 1;
  scaley = 1;
  angle = 0;
}

function save() {
  alert("Image is saved");
}


/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content
    - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
