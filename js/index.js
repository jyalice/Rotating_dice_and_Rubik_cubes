// Set background images for the first Rubik's cube.
var arr = document.querySelectorAll ("#cube1 .box-page");
for(var n = 0; n < arr.length; n++) {
	for (var r=0; r<3; r++) {
		for(var c=0; c<3; c++) {
			var divs = document.createElement ("div");
			divs.style.cssText = "width: 100px; height: 100px; border: 2px solid #c43b4b; box-sizing: border-box; position: absolute; background-image: url(images/" + n + ".jpg); background-size: 300px 300px;";
			divs.style.left = c * 100 + "px";
			divs.style.top = r * 100 + "px";
			divs.style.backgroundPositionX = -c * 100 + "px";
			divs.style.backgroundPositionY = -r * 100 + "px";
			arr[n].appendChild (divs);
		}
	}
}
// Set background images for the second Rubik's cube.
var arr = document.querySelectorAll ("#cube2 .box-page");
for(var n = 0; n < arr.length; n++) {
	for (var r=0; r<3; r++) {
		for (var c=0; c<3; c++) {
			var divs = document.createElement ("div");
			divs.style.cssText = "width:100px;height:100px; border:2px solid blue; box-sizing:border-box; position: absolute; background-image:url(images/"+n+".jpg);background-size:300px 300px;";
			divs.style.left = c * 100 + "px";
			divs.style.top = r * 100 + "px";
			divs.style.backgroundPositionX = -c * 100 + "px";
			divs.style.backgroundPositionY = -r * 100 + "px";
			arr[n].appendChild (divs);
		}
	}
}
// When small rotating dices / buttons are clicked, the webpage will be scrolled to corresponding parts.
var timer = null;
btnDice.onclick = function() {
	// To ensure there is no timer working.
	if (timer == null) {
    	timer = setInterval (function() {
    		// The further it is from the top, the faster it is scrolled.
            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
            document.documentElement.scrollTop -= scrollT/5;
            document.body.scrollTop -= scroll/5;
            if (scrollT == 0) {
                clearInterval (timer);
                timer = null;
            }
        }, 30);
	}     
}
btnCube1.onclick = function() {
	if (timer == null) {   	
		timer = setInterval (function() {
			// The further it is from the target position, the faster it is scrolled.
            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
            document.documentElement.scrollTop -= (scrollT - 1000) / 5;
            document.body.scrollTop -= (scrollT - 1000) /5;
            // The target position should be a range, not a fixed value; otherwise a endless loop may occur.
            if (scrollT < 1010 && scrollT > 990){
                clearInterval (timer);
                timer = null;
            }
        }, 30);
	}	
}
btnCube2.onclick = function() {
	if (timer == null){
		timer = setInterval (function() {
            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
            document.documentElement.scrollTop -= (scrollT - 2150) / 5;
            document.body.scrollTop -= (scrollT - 2150) /5;
            if (scrollT < 2160 && scrollT > 2140){
                clearInterval (timer);
                timer = null;
            }
        }, 30);
	}	
}
