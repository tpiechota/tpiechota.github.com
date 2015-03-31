$(document).ready( function(){	
	// Hide all info boxes on page load/refresh
	$(".item-info").hide();
	$(".item-btn").hide();
	$('.item-body').each( function() {		
		var $item = $(this);		
		$($item).click( function(e) {		
			e.preventDefault();
			$div = $(".item-info", $item);
			$btn = $($item.next(".item-btn"));
			$div.slideToggle(500);
			$(this).next($btn).toggle();
			$(".item-info").not($div).slideUp();
			$(".item-btn").not($btn).hide();
			return false;
		});			
	});
	
	
	// Close info window when click outside the info box
	$('html').click(function(){
		$(".item-btn").hide();
		$(".item-info").slideUp();
	});	
	// Enable default event action of selected elements
	$('.item-info a').click( function(event){
		event.stopPropagation();
	});
});