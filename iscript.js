jQuery(document).ready(function($){
	$('#TOC ul li').click(function () {
		for (listItem in $(this).children()) {
			if (listItem.css("display")=="hidden")
				$(this).children().css("display","block");
			}	
	})
})