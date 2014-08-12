	$(document).ready(function(){	

		//declare global variables
		var g_button = $('#generate-button');
		var r_button = $('#reset-button');
		var delay ;
		var option = $('#menu h3');
		
		
		//default grid on page load with simple sketch
		generateGrid(50);
		$(".cell").hover(function(){
	    	$(this).css('background-color', randomColor());
	    });


	    
	    /*
		create accordion menu for sketch-pad options
		and hide the information box
		 */
		$('#menu').accordion();	
		$('.grid-infobox').hide();



		//pause shading with mouse scroll button	   
	     $(this).mousedown(function(e){ 
			if( e.which == 2 ) {  
 				$('.cell').css('pointer-events','none'); 
			}else {
				$('.cell').css('pointer-events','auto');
			}; 
		}); 
	 



		//display webpage header or infobox depending on mouse position
		//mouse in controls area
		$('.content-wrapper-right').hover(
			function(){
				delay = setTimeout(function(){
					$('#header').fadeOut('fast');
					$('.grid-infobox').fadeIn('slow');
				},2000)},
			function(){
				clearTimeout(delay);
		});



		//mouse in sketch pad area
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



		//generate info for sketchpad status display  



		//action when generate button clicked
		g_button.click(function(){			
			clear();
			dimension = $('#grid-dimension').val();

			if(dimension < 4 || dimension > 100){
				alert("Sorry! Enter a value between 4 and 90");
			}else{

				generateGrid(dimension);

				//switch statement to choose sketch option
	
			};
		});
		


		//action when reset button clicked
		r_button.click(function(){
			reset();
		});



		
		
		 

			

		//function to generate random colours
		var randomColor = function(){
			var red = Math.floor((Math.random() * 254) + 1);
			var blue = Math.floor((Math.random() * 254) + 1);
			var green =Math.floor((Math.random() * 254) + 1);

			var color = "rgb("+red+","+blue+","+green+")";
			console.log(color);
			return color;
		};



		//function to reset grid to original state
		function reset(){
			$('.cell').css( "background-color", "#DEEFFF" );
		};



		//function to clear grid
		function clear(){
			$('.grid').empty();
		};



		//function to refresh page
		function refresh(){
			$(document).ready();
		};


		
		//function to generate the sketch pad
		function generateGrid(dim){
			var cols = dim;
			var rows = dim;
			var row_id = 0;
			while(rows>0){
			
				var new_row = $('<div />',{'class':'row', 'id':'row'+row_id});
				row_id++;		
				
				//divide the new row into sections = (dimension*dimension)
				var cell_id = 0;
				for(var k =0 ; k < cols ; k++){
					$('<div />',{'class':'cell', 'id':'cell'+cell_id}).appendTo(new_row);
					cell_id++;
				};

				new_row.appendTo('.grid');
				rows--;
			};
		};
		

});
		
		



