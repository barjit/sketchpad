$(document).ready(function() {
	var input = 32;
	input = parseInt(prompt('Please enter a number between 1 and 100'));
	FillGrid(input);
	ChangeColor();
});


function FillGrid(boxCount){
	//For loop fills the grid
	for (var i = 0; i<(boxCount*boxCount); i++) {
		$('<div/>', {'class': 'box',}).appendTo('#container');
	}
	//Adjust each .box size to fit into the grid (960px)
	var boxSize = 960 / boxCount;	
	$('.box').css({'width' : boxSize,'height': boxSize});
}

function ChangeColor(){
	$('.box').mouseenter(function(){	
		$(this).addClass('box-top');
		$(this).mouseleave(function(){
			$(this).fadeTo('slow', 0.7);			
		});
	});
}

/*Heavily plagiarised from: 

https://github.com/muzfuz/CodeLessons/blob/master/Sketchpad/script.js

*/