


/**
 * Ajaxy add-to-cart
 */
/* Handle Add to Cart */
function handleAddToCart(){
	"use strict";
	$('body').on('click', '.add-to-cart',function(e) {
		if (typeof e !== 'undefined') e.preventDefault();
		var $this = $(this);
		
		// Hide Modal
		$('.modal').modal('hide');
		
		// Fly image to Cart
		var parent = $this.parents($this.attr('data-parent'));
		var image = $(parent).prev().find('.image-fly');
		flyToCart(image, '#umbrella .cart-link', 700);
		

	});
}




function handleAddToCart(){
	"use strict2";
	$('body').on('click', '.add-to-cart2',function(e) {
		if (typeof e !== 'undefined2') e.preventDefault();
		var $this = $(this);

		// Fly image to Cart
		var parent2 = $this.parents($this.attr('data-parent'));
		var image2 = $(parent2).prev().find('.image-fly2');
		flyToCart(image2, '#umbrella2 .cart-link2', 700);

	});
}



function flyToCart(imgobj, cart, time){
	"use strict";
  
  if(imgobj){
    var imgsrc = imgobj.attr('src');

    imgobj.animate_from_to(cart, {
      pixels_per_second: time, 
      initial_css: {
        'image': imgsrc
      },
      callback: function(){
      }
    });
  }
}
function notifyProduct($info){
	"use strict";
  var wait = setTimeout(function(){
    $.jGrowl($info,{life: 5000 });	
  },200);
}
/* Handle Add to Wish List */
function handleAddToWL(){
	"use strict";
	$('body').on('click', '.add-to-wish-list',function(e) {
		if (typeof e !== 'undefined') e.preventDefault();
		var $this = $(this);
		
		// Hide Modal
		$('.modal').modal('hide');
		// Notify Cart
		var cartURL = './ajax/_product-wish-list.html';
		$.ajax({
			type: 'GET',
			url: cartURL,
			beforeSend: function () {
			},
			success: function (data) {
			  notifyProduct(data);
			},
			dataType: "html"
		});
	});
}

jQuery(document).ready(function($) {
	"use strict";
	handleAddToCart();
	handleAddToWL();
});
