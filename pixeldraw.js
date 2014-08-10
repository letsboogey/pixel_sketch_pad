$(document).ready(function(){

	//declare global variables

	//create accordion menu for sketch-pad options
	$('#menu').accordion();

	//slide footer out of view when mouse is not at bottom
	



	//function to generate grid
	function generateGrid(dimension){
		var cols = dimension;
		var rows = dimension;
		
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

	generateGrid(50);

	



});