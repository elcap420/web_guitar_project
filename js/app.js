//issue : user clicks image goes to a dead end page.
//Solution : create an overlay with the large image (LightBox).
//add overlay

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");


//add image to overlay
$overlay.append($image);

//add caption
$overlay.append($caption);

//add overlay to body
$("body").append($overlay);


// capture click event on an image link
$("#imageGallery a").click(function(event){
  event.preventDefault();

var imageLoc = $(this).attr("href");
//update overlay with larger image with alt attribute.
  $image.attr("src", imageLoc);

//Show overlay and image contents
  $overlay.show();

  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//anonymous class to hide overlay until next image is selected
$overlay.click(function(){
$overlay.hide();
})

