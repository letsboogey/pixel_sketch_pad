


$(document).ready(function(){

	//declare global variables
	var g_button = $('#generate-button');
	var r_button = $('#reset-button');

	
	/*
	create accordion menu for sketch-pad options
	and hide the information box
	 */
	$('#menu').accordion();	
	$('.grid-infobox').hide();

	//action when generate button clicked
	g_button.click(function(){
		clear();
		var dimension = $('#grid-dimension').val();

		if(dimension < 4 || dimension > 90){
			alert("Sorry! Enter a value between 4 and 90");
		}else{
			generateGrid(dimension);
		};
	});

	//action when reset button clicked
	r_button.click(function(){
		clear();
	});

	
	//function to clear grid
	function clear(){
		$('.grid').empty();
	};


	//function to generate the sketch pad
	function generateGrid(dim){
		var cols = dim;
		var rows = dim;
		
		while(rows>0){
		
			var new_row = $('<div />',{'class':'row'});		
			//divide the new row into sections = (dimension*dimension)
			for(var k =0 ; k < cols ; k++){
				$('<div />',{'class':'cell'}).appendTo(new_row);						
			};

			new_row.appendTo('.grid');
			rows--;
		};
	};


	//display webpage header or infobox depending on mouse position
	$('.content-wrapper-right').hover(function(){
		$('#header').fadeOut(500);
		$('.grid-infobox').fadeIn(2000);
	});

	$('.content-wrapper-left').hover(function(){
		$('#header').fadeIn(2000);
		$('.grid-infobox').fadeOut(500);
	});

	//slide footer out of view when mouse is not at bottom
	$('footer').hover(function(){
		$('.footer').animate({bottom: '0'}, 500);
		});		

	$('footer').mouseleave(function(){
		$('.footer').animate({bottom: '-40'}, 2000);
	});


	//Begin the magic 
	
	



});