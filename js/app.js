//issue : user clicks image goes to a dead end page.
//Solution : create an overlay with the large image (LightBox).
//add overlay

// var $overlay = $('<div id="overlay"></div>');
// var $image = $("<img>");
// var $caption = $("<p></p>");


// //add image to overlay
// $overlay.append($image);

// //add caption
// $overlay.append($caption);

// //add overlay to body
// $("body").append($overlay);
var imageArray = [];
var currentImageIndex;

$("#imageGallery a").each(function()
{
	imageArray.push(this);
	console.log(imageArray);
});

// capture click event on an image link
$("#imageGallery a").click(function(event){
 	event.preventDefault();
	var index = imageArray.indexOf(this);
	showOverlay(index);
	
});


//Adding prev and next feature to overlay
$("#overlay").click(function ($event){
	var next = $("#next")[0];
	var prev = $("#prev")[0];
	var isNext = $event.target === next || $.contains(next, $event.target);
	var isPrev = $event.target === prev || $.contains(prev, $event.target);
	console.log(!isNext && !isPrev);
	if(!isNext && !isPrev)
    {
		$("#overlay").removeClass("visible");
		$("#overlay").addClass("hidden");
	}
});



var testImageDimensons = function (linkImage)
{
	
	var disp = "";
	if(linkImage.naturalWidth > linkImage.naturalHeight)
	{
		disp = "landscape";
	}
	else
	{
		disp = "portrait";
	}
	$(linkImage).attr("data-display",disp);

}



var linkImages = $("#imageGallery a img");
linkImages.each(function(){
	testImageDimensons(this);
	
});


linkImages.load(function (event)
{
	testImageDimensons(this);
});



var showOverlay = function($index)
{
	if($index < 0 || $index > imageArray.length - 1)
	{
		return;
	}



	currentImageIndex = $index;
	var imageGalleryLink = $(imageArray[currentImageIndex]);
	var captionText = imageGalleryLink.children("img").attr("alt");//desription title
	var imageLoc = imageGalleryLink.attr("href");
	var display = imageGalleryLink.children("img").attr("data-display");
	$(".overlay-image").attr("data-display", display);
	$("#overlay").removeClass("hidden");
	$("#overlay").addClass("visible");
	$(".overlay-image").attr("src", imageLoc);
	$(".description-title").text(captionText);
	$(".description-text").text(imageGalleryLink.attr("data-description"));
};

$("#next").click(function()
{
showOverlay(currentImageIndex + 1);
});

$("#prev").click(function()
{
	showOverlay(currentImageIndex - 1);
});
	// //update overlay with larger image with alt attribute.
	// $image.attr("src", imageLoc);

	// //Show overlay and image contents
	// $overlay.show();

	
	// $caption.text(captionText);


	//anonymous class to hide overlay until next image is selected
// $overlay.click(function(){
// 	$overlay.hide();
// })

