$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#navdef');
   var offset = startchange.offset();
    
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
	  
	  var screenwidth = $(document).width();
	  if (screenwidth < 990){
	  	$('#navdef').css('background-color', 'rgba(0,0,0,0.7)');
	  }
	  
     
	 else{ 	 
	 	if(scroll_start > offset.top) {
          $('#navdef').css('background-color', 'rgba(0,0,0,0.7)');
       } else {
          $('#navdef').css('background-color', 'transparent');
       }
	 }
	 
	 
   });
});