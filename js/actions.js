// JavaScript Document
$(document).ready(function(e) {
  document.addEventListener("deviceready",function(){
	alert('in');	

var wathID = null;

	$('#bInc').click(function(){
		alert('touch');
	
		watchID = navigator.compass.watchHeading(function(heading) {
			
			$('#bRes').text(heading.magneticHeading);
			
		}, function(compassError) {
				alert('Compass error: ' + compassError.code);
		}, { frequency: 500 });
	});
	
	$('#bDtn').tap(function(){
		navigator.compass.clearWatch(watchID);
		wathID = null;
		$('#bRes').text('0.00');
		});
	

		
		
		
		
		},false);
});