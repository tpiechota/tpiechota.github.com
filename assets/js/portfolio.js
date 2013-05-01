$(document).ready(function() {

	// Create a function 
	function getSize() {
		
		// Get the width and height of the window
		/*var winHeight = $(window).height();
		var winWidth = $(window).width();
		
		// Change the divs to that width and height
		$('[data-full="true"]').css({'width' : winWidth+'px', 'height' : winHeight+'px'});
		
		// An exception for iPods and iPhones
		if(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
			$('[data-full="true"]').css({'width' : winWidth+'px', 'height' : winHeight+70+'px'});
			$('#home').css({'width' : winWidth+'px', 'height' : winHeight+'px'});
		}


		// Remove classes
		$('#menu a').removeClass('active');
		
		// Check what page we're on in the document using the height and
		// scroll postion (That's $(window).scrollTop())
		
		var currentPage = $(window).scrollTop() + 60;
		
		if(currentPage < winHeight) {
			// Add correct classes, repeat for different sizes
			$('#menu a[href="#home"]').addClass('active');
		} else if(currentPage > winHeight && currentPage < ((winHeight*2) + 140)) {
			$('#menu a[href="#about"]').addClass('active');
		} else if(currentPage > ((winHeight*2) + 140) && currentPage < ((winHeight*3) + 210)) {
			$('#menu a[href="#portfolio"]').addClass('active');
		} else if(currentPage > ((winHeight*3) + 210) && currentPage < ((winHeight*4) + 280)) {
			$('#menu a[href="#blog"]').addClass('active');
		} else if(currentPage > ((winHeight*4) + 280) && currentPage < ((winHeight*5) + 350)) {
			$('#menu a[href="#contact"]').addClass('active');
		}*/
	}	
		
		
	// When the user clicks a #header anchor
	/*$('#header ul li a' && '#header a').click(function() {
		// Get the hash of the anchor
		var hash = $(this).attr('href');
		// Get the offset (i.e. what height it is at on the document) plus 2 
		var offset = $(hash).offset().top+2;
		
		// Animate the document to scroll down slowly
		$('html,body').animate({scrollTop: offset},'slow', function() {
			// When the scrolling is done, change the hash accordingly.
			window.location.hash = hash;
		});
		// Override default behaviour (so clicking the link wont automatically jump to the hash
		return false;	
	});*/
	
	// When the user is scrolling
	/*$(window).scroll(function() {
		// Assuming they aren't scrolling beyond the document (mobile issue)
		if($(window).scrollTop() < $(window).height()*4.5) {
			// Change the header position so it's always attached to the top of the document
			$('#header').stop().animate({'top' : $(window).scrollTop()+'px'}, 0);
		}
	});*/
	
	// When the user resizes the winow
	/*$(window).resize(function() {
		// Get the hash and height
		var hash = window.location.hash;
		var height = $(window).height();
		
		// Maintain scroll position based on hash.
		if(hash == '#home') { $(window).scrollTop(0); }
		else if(hash == '#about') { $(window).scrollTop(height); }
		else if(hash == '#portfilio') { $(window).scrollTop(((height)*2)); }
		else if(hash == '#blog') { $(window).scrollTop((height*3)); }
		else if(hash == '#contact') { $(window).scrollTop((height*4)); }

	});*/

	
	/* RUN ALL FUNCTIONS */
	//getSize();
	///$(window).resize(getSize);
	//$(window).scroll(getSize);
	
});
$(function() {
	$("#submit").hide();
	$('.scrollm').click(function() {
		// Get the hash of the anchor
		var hash = $(this).attr('value');
		// Get the offset (i.e. what height it is at on the document) plus 2 
		var offset = $(hash).offset().top+2;
		
		// Animate the document to scroll down slowly
		$('html,body').animate({scrollTop: offset},'slow', function() {
			// When the scrolling is done, change the hash accordingly.
			window.location.hash = hash;
		});
		// Override default behaviour (so clicking the link wont automatically jump to the hash
		return false;	
	});
    
/*    $("#page-changer select").change(function() {
        window.location = $("#page-changer select option:selected").val();
    })*/
});
