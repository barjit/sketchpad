$(document).ready(function() {
	var input = 64;
	Populate(input);
	React();

	$('#reset').click(function(){
		$('.box').remove();
		//Call Functions to re-fill our container
		Populate(input);
		React();
	});

	$('#choose').click(function(){
		$('.box-top').remove();
		input = parseInt(prompt('Please enter a number between 1 and 100'));
		if (input > 100) {
			input = 100;
		}
		else if (input < 1) {
			input = 1;
		}
		else {
			Populate(input);
			React();
		}
	});

});


function Populate(boxCount){
	//For loop fills the grid
	for (var i = 0; i<(boxCount*boxCount); i++) {
		$('<div/>', {'class': 'box',}).appendTo('#container');
	}
	//Adjust each .box size to fit into the grid (960px)
	var boxSize = 960 / boxCount;	
	$('.box').css({'width' : boxSize,'height': boxSize});
}

function React(){
	$('.box').mouseenter(function(){	
		$(this).addClass('box-top');
		$(this).mouseleave(function(){
			$(this).fadeTo('fast', 0.7);			
		});
	});
}

/*Heavily plagiarised from: 

https://github.com/muzfuz/CodeLessons/blob/master/Sketchpad/script.js

*/