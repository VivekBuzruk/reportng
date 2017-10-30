function toggleElement(elementId, displayStyle)
{
    var element = document.getElementById(elementId);
    var current = element.currentStyle
                ? element.currentStyle['display']
                : document.defaultView.getComputedStyle(element, null).getPropertyValue('display');
    element.style.display = (current == 'none' ? displayStyle : 'none');
}

function toggle(toggleId)
{
    var toggle = document.getElementById ? document.getElementById(toggleId) : document.all[toggleId];
    toggle.textContent = toggle.innerHTML == '\u25b6' ? '\u25bc' : '\u25b6';
}

function imageExists(imageUrl, url1, url2, callback) {
	var img = new Image();

	img.onload = function() { callback(true, url1); };
	img.onerror = function() { callback(false, url2); };
	img.src = imageUrl;
}
function getImageUrl(imageUrl, url1, url2) {
	imageExists(imageUrl, url1, url2, function(exists, url) {
		window.open(url,"_blank","","");
		return true;
	});
	return true;
}
function getImageUrl2(imageUrl, url1, url2) {
	var image = new Image();
	image.src = imageUrl;
	if (!image.complete) {
		window.open(url2,"_blank","","");
		return true;
	} else if (image.height === 0) {
		window.open(url2,"_blank","","");
		return true;
	}
	window.open(url1,"_blank","","");
	return true;
}