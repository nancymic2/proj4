
window.onload=function(){
	
	sizeit();

}

window.onresize=function(){
	sizeit();
}


function sizeit() {
// onload or on change check the width of the window and get from the data attribute in the image tag the appropriate image
// on small screens, only the smallest image will download, followed by medium, then large
// images on all pages are served based on this function. however the photo credit page gets a larger image on a small screen as it looks better in a single column
//images names *Cred are the small version. medium is *Med



	var imgsrc=document.getElementsByClassName('serveImg');
	for (var i=0; i<imgsrc.length; i++) {

		if (window.matchMedia('(max-width: 400px)').matches) {
			var smallest=imgsrc[i].getAttribute('data-small');
			imgsrc[i].src=smallest;
		
		}

		else if (window.matchMedia('(max-width: 765px)').matches) {
			var med=imgsrc[i].getAttribute('data-med');
			imgsrc[i].src=med;
		
		}

		else {
			var imglarge=imgsrc[i].getAttribute('data-large');
			imgsrc[i].src=imglarge;
			document.getElementById('smallnav22').style.display="none";
		}
    }

   
}



