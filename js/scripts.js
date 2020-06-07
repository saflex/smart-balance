
$(function(){
    $('#inline1 .form-group').click(function(){
        $('#product-modal').css("display", "none");      
        $('.fancybox-overlay').css("background", "#2B2B2B");
		  jQuery(function($){
			$(document).mouseup(function (e){ 
				var div = $("#product-modal"); 
				if (!div.is(e.target) 
				    && div.has(e.target).length === 0) { 
					div.css("display", "block");
				}
			});
		});
        
    });
});




(function($) {
    $(function() {
      $('input, select').styler({
        selectSearch: true
      });
    });
    })(jQuery);


$(document).ready(function(){
 	
 	 
 	$(".show-more").on("click", function() {
 		$(this).parent(".show-more-box").find(".show-more-block").css("height", "auto");
 		$(this).hide();
 	});
 	
 	$(".fancy-btn").fancybox();
 	
 	$(".selectbox").styler();

	$(".smooth-scroll").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 500);
	});
	
	
	$('#two').bind('inview', function(event, visible) {if (visible) { 
		$("[href=#two]").parent("li").addClass("active"); } else { 
			$("[href=#two]").parent("li").removeClass("active"); }});
			
	$('#three').bind('inview', function(event, visible) {if (visible) { 
		$("[href=#three]").parent("li").addClass("active"); } else { 
			$("[href=#three]").parent("li").removeClass("active"); }});
					
	$('#four').bind('inview', function(event, visible) {if (visible) { 
		$("[href=#four]").parent("li").addClass("active"); } else { 
			$("[href=#four]").parent("li").removeClass("active"); }});
					
	$('#five').bind('inview', function(event, visible) {if (visible) { 
		$("[href=#five]").parent("li").addClass("active"); } else { 
			$("[href=#five]").parent("li").removeClass("active"); }});
					
	$('#six').bind('inview', function(event, visible) {if (visible) { 
		$("[href=#six]").parent("li").addClass("active"); } else { 
			$("[href=#six]").parent("li").removeClass("active"); }});
					
	$('#seven').bind('inview', function(event, visible) {if (visible) { 
		$("[href=#seven]").parent("li").addClass("active"); } else { 
			$("[href=#seven]").parent("li").removeClass("active"); }});
			
          
  $('#eight').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#eight]").parent("li").addClass("active"); } else { 
      $("[href=#eight]").parent("li").removeClass("active"); }});
          

	$('#nine').bind('inview', function(event, visible) {if (visible) { 
		$("[href=#nine]").parent("li").addClass("active"); } else { 
			$("[href=#nine]").parent("li").removeClass("active"); }});
					
	
});



$(function(){

$('.nbtn').on('click', function(e){
  $( "#nine" ).addClass( "displb" );
  $('html,body').stop().animate({ scrollTop: $('#nine').offset().top }, 700);
  e.preventDefault();
});

});


$(function(){

$('.dbl').on('click', function(e){
  $( "#nine" ).addClass( "displb" );
  $('html,body').stop().animate({ scrollTop: $('#nine').offset().top }, 700);
  e.preventDefault();
});

});





$(function(){

$('.vsmodels').on('click', function(e){
  $( "#nine" ).addClass( "displb" );
  $('html,body').stop().animate({ scrollTop: $('#two').offset().top }, 700);
  e.preventDefault();
});

});



window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrolled > 140) {
  	$(".fixed-nav").show();
  } else {
  	$(".fixed-nav").hide();
  }
};    
  


$(function() {
    $( "#accordion" ).accordion({
      heightStyle: "content"
    });
  });

 $(function() {
    $( document ).tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
  });




$(function(){
    $('.nnn').click(function(){
        $('.swiper-container').addClass( "arrowss" );
         $('.swiper-container').removeClass('arrows-no');
         $('html').css("overflow", "hidden");
    });
});

$(function(){
    $('.closer').click(function(){
        $('.swiper-container').addClass( "arrows-no" );
        $('.swiper-container').removeClass('arrowss');
        $('html').css("overflow", "visible");
    });
});



$(function(){
    $('.closer').click(function(){
        $('.swiper-container3').addClass( "arrows-no" );
        $('.swiper-container3').removeClass('arrowss');
        $('html').css("overflow", "visible");
    });
});




$(function(){
    $('#menu').hover(function(){
        $('.arrow-fxq').hide();
    });
});






$(document).ready(function() {
    $('.single-item').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    });
});



 // Как только будет загружен API и готов DOM, выполняем инициализацию
        ymaps.ready(init);

        function init () {
            var myMap = new ymaps.Map("map", {
                    center: [55.6474091, 37.7167128],
                    zoom: 14,
                    controls: ['zoomControl', 'typeSelector',  'fullscreenControl']
                }),

                // Создаем метку и задаем изображение для ее иконки
                myPlacemark = new ymaps.Placemark([55.6474091, 37.7207128], {
                    balloonContent: 'г. Москва, Новочеркасский бульвар 20, офис 17'
                }, {
                    iconImageHref: 'http://api.yandex.ru/maps/doc/jsapi/2.x/examples/images/myIcon.gif', // картинка иконки
                    iconImageSize: [30, 42], // размеры картинки
                    iconImageOffset: [-3, -42] // смещение картинки
                });


            // Добавление метки на карту
            myMap.geoObjects.add(myPlacemark);
          
        }



$(function(){
  $('.thumbnails a').click(function(){                                 // При нажатиина миниатюру
    var images = $(this).find('img');
    var imgSrc = images.attr('src');
 
    $(".big-image img").attr({ src: imgSrc });                         // Подменяем адрес большого изображения на адрес выбранного
    $(this).siblings('a').removeClass('active');                       // Удаляем класс .active со ссылки чтоб убрать рамку
    images.parent().addClass('active');                                // Добавляем класс .active на выбранную миниатюру
    return false;
  });
 
  $('.next').click(function(){                                         // При нажатии на кнопку "вперед"
    var count = $('.thumbnails a').length;                             // Общее количество изображений
    var n = parseInt($('.thumbnails a').index($('.active')) + 1);      // Порядковый номер текущего изображения
    var activeImg = $('.thumbnails .active');                          // Активное на данный момент изображение
    var nextSrc;
 
    if (count != n){                                                   // - Если изображение не последнее
      nextSrc = activeImg.next().find('img').attr('src');              // В переменную записывается адрес следующего изображения
      $('.thumbnails .active').removeClass('active');                  // Удаляется класс .active с предыдущей миниатюры
      activeImg.next().addClass('active');                             // На миниатюру следующего изображения вешается класс .active
    }else{                                                             // - Если текущее изображение последнее в списке
      nextSrc = $('.thumbnails a').first().find('img').attr('src');    // В переменную записывается адрес первого изображения
      $('.thumbnails .active').removeClass('active');                  // Удаляется класс .active с предыдущей миниатюры
      $('.thumbnails a').first().addClass('active');                   // На первую миниатюру вешается класс .active
    }
    $('.big-image img').attr({ src: nextSrc });                        // Подменяем адрес большого изображения на адрес следующего
    return false;
  });
 
 
  $('.prev').click(function(){                                         // При нажатии на кнопку "назад"
    var count = $('.thumbnails a').length;                             // Общее количество изображений
    var n = parseInt($('.thumbnails a').index($('.active')) + 1);      // Порядковый номер текущего изображения
    var activeImg = $('.thumbnails .active');                          // Активное на данный момент изображение
    var prevSrc;
 
    if (n != 1){                                                       // - Если текущее изображение не первое
      prevSrc = activeImg.prev().find('img').attr('src');              // В переменную записывается адрес предыдущего изображения           
      $('.thumbnails .active').removeClass('active');                  // Удаляется класс .active активной до этого миниатюры
      activeImg.prev().addClass('active');                             // На миниатюру изображения слева вешается класс .active
    }else{                                                             // - Если текущее изображение первое
      prevSrc = $('.thumbnails a:last').find('img').attr('src');       // В переменную записывается адрес последнего изображения
      $('.thumbnails .active').removeClass('active');                  // Удаляется класс .active с предыдущей миниатюры
      $('.thumbnails a:last').addClass('active');                      // На последнюю миниатюру вешается класс .active
    }
    $('.big-image img').attr({ src: prevSrc });                        // Подменяется адрес большого изображения на адрес следующего
    return false;
  });
})



	
	
	
jQuery(document).ready(function($){
  // set up the options to be used for jqDock...
  var dockOptions =
    { align: 'top' // horizontal menu, with expansion DOWN from a fixed TOP edge
    , size: 90 //increase 'at rest' size to 60px
    , labels: true  // add labels (defaults to 'br')
    , setLabel: function(txt, i, el){
        //append a clone of the relevant sub-menu to the label, div.jqDockLabel...
        //Note that I don't need to add the inner wrapper - div.jqDockLabelText - 
        //because I can reposition the sub-menus within div.jqDockLabel itself
        $(el).append($('#submenus>li>ul').eq(i).clone(true))
          //...and intercept mousemoves to prevent propagation and stop
          //the dock resizing as the cursor moves over the sub-menus...
          .bind('mousemove', function(){ 
            return false; 
          })
          //put a one-off mouseenter on every sub-menu to (re)set
          //contained anchor widths...
          .find('ul').one('mouseenter', function(){
            $('>li>a', this).each(function(){
                $(this).width($(this).parent().width());
              });
            return false;
          }).end()
          //for this example, put a click handler on every sub-menu anchor
          //that simply toggles a class to change background colour...
          .find('a').click(function(){
            $(this).toggleClass('clicked');
            this.blur();
            return false;
          })
          //put a hover on any sub-menu LI that has a child menu, to show/hide
          //that child menu; and allow mouseleave to propagate up so that coming
          //completely off the sub-menu structure will still collapse the dock...
          .next('ul').parent().hover(function(ev){
            var mLeave = ev.type == 'mouseleave';
            $('>ul', this)[mLeave ? 'hide' : 'show']();
            return mLeave;
          })
          //add a visual indicator that a child menu exists...
          .find('>a').append("<"+"img src='images/submenu.gif' alt='' />");
        return false;
      }
    };
  // ...and apply...
  $('#menu').jqDock(dockOptions);
});



window.onload=function(){
$('.demo').css("display", "block");
}






	$(document).ready(function() {
			/*
			 *  Simple image gallery. Uses default settings
			 */

			$('.fancybox').fancybox();

			/*
			 *  Different effects
			 */

			// Change title type, overlay closing speed
			$(".fancybox-effects-a").fancybox({
				helpers: {
					title : {
						type : 'outside'
					},
					overlay : {
						speedOut : 0
					}
				}
			});

			// Disable opening and closing animations, change title type
			$(".fancybox-effects-b").fancybox({
				openEffect  : 'none',
				closeEffect	: 'none',

				helpers : {
					title : {
						type : 'over'
					}
				}
			});

			// Set custom style, close if clicked, change title type and overlay color
			$(".fancybox-effects-c").fancybox({
				wrapCSS    : 'fancybox-custom',
				closeClick : true,

				openEffect : 'none',

				helpers : {
					title : {
						type : 'inside'
					},
					overlay : {
						css : {
							'background' : 'rgba(238,238,238,0.85)'
						}
					}
				}
			});

			// Remove padding, set opening and closing animations, close if clicked and disable overlay
			$(".fancybox-effects-d").fancybox({
				padding: 0,

				openEffect : 'elastic',
				openSpeed  : 150,

				closeEffect : 'elastic',
				closeSpeed  : 150,

				closeClick : true,

				helpers : {
					overlay : null
				}
			});

			/*
			 *  Button helper. Disable animations, hide close button, change title type and content
			 */

			$('.fancybox-buttons').fancybox({
				openEffect  : 'none',
				closeEffect : 'none',

				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,

				helpers : {
					title : {
						type : 'inside'
					},
					buttons	: {}
				},

				afterLoad : function() {
					this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
				}
			});


			/*
			 *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
			 */

			$('.fancybox-thumbs').fancybox({
				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,
				arrows    : false,
				nextClick : true,

				helpers : {
					thumbs : {
						width  : 50,
						height : 50
					}
				}
			});

			/*
			 *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
			*/
			$('.fancybox-media')
				.attr('rel', 'media-gallery')
				.fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',

					arrows : false,
					helpers : {
						media : {},
						buttons : {}
					}
				});

			/*
			 *  Open manually
			 */

			$("#fancybox-manual-a").click(function() {
				$.fancybox.open('1_b.jpg');
			});

			$("#fancybox-manual-b").click(function() {
				$.fancybox.open({
					href : 'iframe.html',
					type : 'iframe',
					padding : 5
				});
			});

			$("#fancybox-manual-c").click(function() {
				$.fancybox.open([
					{
						href : '1_b.jpg',
						title : 'My title'
					}, {
						href : '2_b.jpg',
						title : '2nd title'
					}, {
						href : '3_b.jpg'
					}
				], {
					helpers : {
						thumbs : {
							width: 75,
							height: 50
						}
					}
				});
			});


		});
		
		
		
		


$('.dvedk a').on( 'click', function() {
     var id = $(this).attr('data-tab-destination');
  
        $('.drbl a[href="#'+id+'"]').click();
    });







    $(function(){
    $('.modal-zoom').click(function(){
        $('.swiper-container').addClass( "arrowss" );
         $('.swiper-container').removeClass('arrows-no');
         $('html').css("overflow", "hidden");
    });
});

$(function(){
    $('.close-modal').click(function(){
        $('.swiper-container').addClass( "arrows-no" );
        $('.swiper-container').removeClass('arrowss');
        $('html').css("overflow", "visible");
    });
});



$(document).ready(function(){
  $('.hover-element').hover(
    function() {
      $( this ).removeClass('class-name');
    }, function() {
      $( this ).addClass('class-name');
    }
  );
});

$(function(){
    $('#dock').hover(function(){
        $('.arws').css("display", "none");
    });
});




