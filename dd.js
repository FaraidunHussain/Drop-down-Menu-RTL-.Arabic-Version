$(document).ready(function() {
  $('#btn').click(function() {
    $('#smart').slideToggle(400);
			});
});
$(window).resize(function(){
    var w = $(window).width();
	if(w  >= 768){
		$('#smart').removeAttr('style')
		}
});
  