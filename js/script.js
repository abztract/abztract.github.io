$(document).ready(function(){
	console.log('working');

	$('.ep1-sc-ul').hide();
	$('.ep2-sc-ul').hide();
	$('.ep3-sc-ul').hide();
	$('.ep4-sc-ul').hide();


	$('#ep1sc').click(function(){
		$('.ep1-sc-ul').toggle('1500');
	});

	$('#ep2sc').click(function(){
		$('.ep2-sc-ul').toggle('1500');
	});

	$('#ep3sc').click(function(){
		$('.ep3-sc-ul').toggle('1500');
	});

	$('#ep4sc').click(function(){
		$('.ep4-sc-ul').toggle('1500');
	});

});