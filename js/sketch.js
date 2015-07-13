$(document).ready(function() {
	var input = 16;
	Populate(input);
	React();

	//When the 'reset' button is clicked, all 'box' divs are removed, and the 'container'
	//is then repopulated with 'Populate()' and the 'React()' function is called.

	$('#reset').click(function(){
		$('.box').remove();
		Populate(input);
		React();
	});

	//When the 'choose' button is clicked, all 'box-top' divs are removed, the user
	//is then prompted to make a selection between 1 and 64. 
	//The container is then repopulated with 'Populate()' function using the users
	//input and the 'React()' function is called.

	$('#choose').click(function(){
		$('.box-top').remove();
		input = parseInt(prompt('Please enter a number between 1 and 64'));
		if (input > 64) {
			input = 64;
		}
		else if (input < 1) {
			input = 1;
		}
		else {
			Populate(input);
			React();
		}
	});

	//When the 'random' button is clicked, all 'box-top' divs are removed, the user
	//is then prompted to make a selection between 1 and 64. 
	//The container is then repopulated with 'Populate()' function using the users
	//input and the 'Colour()' function is called.

	$('#random').click(function() {
		$('.box-top').remove();
		input = parseInt(prompt('Please enter a number between 1 and 64'));
		if (input > 64) {
			input = 64;
		}
		else if (input < 1) {
			input = 1;
		}
		else {
			Populate(input);
			Colour();
		}
	})

	//When the 'opacity' button is clicked, all 'box-top' divs are removed, the user
	//is then prompted to make a selection between 1 and 64. 
	//The container is then repopulated with 'Populate()' function using the users
	//input and the 'Shade()' function is called.

	$('#opacity').click(function() {
		$('.box-top').remove();
		input = parseInt(prompt('Please enter a number between 1 and 64'));
		if (input > 64) {
			input = 64;
		}
		else if (input < 1) {
			input = 1;
		}
		else {
			Populate(input);
			Shade();
		}
	})

});

/*

============Functions============

 */

// for loop appends divs with class 'box' to the 'container' div.
// Individual 'box' divs' width and heights then adjusted to fit the fixed width
// and height of the 'container' div

function Populate(boxCount){
	for (var i = 0; i<(boxCount*boxCount); i++) {
		$('<div/>', {'class': 'box',}).appendTo('#container');
	}
	var boxSize = 960 / boxCount;	
	$('.box').css({'width' : boxSize,'height': boxSize});
}

// This function changes the class of the 'box' div to 'box-top' when a mouse 
// hovers over it

function React(){
	$('.box').mouseenter(function(){	
		$(this).addClass('box-top');
	});
}

// This function changes the background-color of the 'box' div to a random colour
// when a mouse hovers over it.

function Colour () {
	$('.box').mouseenter(function() {
		$(this).css('background-color', 'rgb('+(Math.floor(Math.random() *256))+','
			+(Math.floor(Math.random() *256))+','+(Math.floor(Math.random() *256))+')');
	});
}

// This function reduces the opacity of any particular 'box' div each time a mouse
// hovers over it.

function Shade() {
	$('.box').mouseenter(function() {
		$(this).css('opacity', $(this).css('opacity') - 0.1);
});
}

