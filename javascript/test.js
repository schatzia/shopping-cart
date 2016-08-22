$(document).ready(function(){
	var productsNumber = data.length;
	console.log(productsNumber);

	for(var k = 0; k < productsNumber; k++)
	{

		$('.table').append('<tr class="product-row" id="'+ k +'"><td>'+ data[k].title +'</td><td>'+ data[k].size +'</td><td>'+ data[k].colour +'</td><td><input type="button" class="minus1" value="-"><input type="text" class="quantity" value="'+ data[k].quantity +'" size="1"><input type="button" class="add1" value="+"></td><td>&pound;'+ data[k].price +'</td></tr>');
	}

	// Reduce Quantity
	$('.minus1').click(function(){		
		var currentRow = $(this).closest("tr")[0].id;
		var curr = $(this).siblings(".quantity");
		var currentVal = parseInt(curr.val());
		var newVal = currentVal - 1;

		if( newVal > 0){
		curr.val(newVal);
		data[currentRow].quantity = newVal;	
		}
		else
		{
			$(this).closest("tr")[0].remove();
		}

	});

	// Increase quantity
	$('.add1').click(function(){
		var currentRow = $(this).closest("tr")[0].id;
		var curr = $(this).siblings(".quantity");
		var currentVal = parseInt(curr.val());
		var newVal = currentVal + 1;

		if(currentVal == 10){
			$('.alert').fadeIn(600);
		}
		else{			
			curr.val(newVal);
			data[currentRow].quantity = newVal;
		}

	});

	$('.close').click(function(){
		$('.alert').fadeOut(400);
	});


});

