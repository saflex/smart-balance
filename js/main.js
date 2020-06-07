 $('a[href="#des2"]').click();



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



    $("a[data-tab-destination]").on('click', function() {
        var tab = $(this).attr('data-tab-destination');
        $("#"+tab).click();
    });



(function($){
      $(window).load(function(){
        $("#myTab .tab-pane").mCustomScrollbar({
          setHeight:280,
          theme:"inset-2-dark",
            axis:"x",
          advanced:{autoExpandHorizontalScroll:true}
        });
        
      });
})(jQuery);



$(function(){
    $('.p1,.p2,.p3,.p4,.p5,.p6,.p7,.p8,.p9').mouseover(function(){
        $('.shows').css("display", "none");
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



    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true
    });



$('.jq-checkbox .ch1').click(function(e) {
  e.preventDefault();
  /* делаем чекбокс неактивным */
  $('select').attr('disabled', true)
    /* обновляем состояние псевдочекбокса */
    .trigger('refresh');
});


$('.bg-calc .padd-bg p').click(function(e) {
  e.preventDefault();
  /* делаем чекбокс неактивным */
  $('select').attr('disabled', true)
    /* обновляем состояние псевдочекбокса */
    .trigger('refresh');
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
    $('.nnn2').click(function(){
        $('.swiper-container2').addClass( "arrowss" );
         $('.swiper-container2').removeClass('arrows-no');
          $('html').css("overflow", "hidden");
    });
});

$(function(){
    $('.closer').click(function(){
        $('.swiper-container2').addClass( "arrows-no" );
        $('.swiper-container2').removeClass('arrowss');
        $('html').css("overflow", "visible");
    });
});



$(function(){
    $('.nnn3').click(function(){
        $('.swiper-container3').addClass( "arrowss" );
        $('.swiper-container3').removeClass('arrows-no');
        $('html').css("overflow", "hidden");
    });
});

$(function(){
    $('.closer').click(function(){
        $('.swiper-container3').addClass( "arrows-no" );
        $('.swiper-container3').removeClass('arrowss');
        $('html').css("overflow", "visible");
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


$(function() {
    $( "#accordion" ).accordion({
      heightStyle: "content"
    });
  });





 $(function() {
    $( "#slider-range-max" ).slider({
      range: "max",
      min: 1,
      max: 10,
      value: 2,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
  });



 $(function() {
    $( "#slider-range-max2" ).slider({
      range: "max",
      min: 1,
      max: 10,
      value: 2,
      slide: function( event, ui ) {
        $( "#amount2" ).val( ui.value );
      }
    });
    $( "#amount2" ).val( $( "#slider-range-max2" ).slider( "value" ) );
  });


(function($) {
		$(function() {
			$('input, select').styler({
				selectSearch: true
			});
		});
		})(jQuery);


  $(function() {
          $('#example2 a').Chocolat();
        
        });

  $(function() {
          $('#example1 a').Chocolat();
        
        });

			$(window).load(function(){ //$(window).load() must be used instead of $(document).ready() because of Webkit compatibility
				
				/*---------------------------------
				 *	Counter add-on, example 01
				 *---------------------------------*/
				$(".photosgallery-std").sliderkit({
					mousewheel:true,
					shownavitems:4,
					panelbtnshover:true,
					auto:false,
					navscrollatend:false,
					counter:true
				});
				
			
			});



			$(window).load(function(){ //$(window).load() must be used instead of $(document).ready() because of Webkit compatibility		
				
				// Photo slider > Minimal
				$(".contentslider-std").sliderkit({
					auto:0,
					tabs:1,
					circular:1,
					panelfx:"sliding",
					panelfxfirst:"fading",
					panelfxeasing:"easeInOutExpo",
					fastchange:0,
					keyboard:1
				});


				/*---------------------------------
				 *	Counter add-on, example 02
				 *---------------------------------*/
				$("#carousel-demo1").sliderkit({
					auto:false,
					shownavitems:3,
					start:0,
					counter:true
				});
				
			});	


$(document).ready(function(){
	$(".main-menu-area").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 500);
	});
});




$(function(){

$('.clickb').on('click', function(e){
	$( ".section-7" ).addClass( "displb" );
  $('html,body').stop().animate({ scrollTop: $('.section-7').offset().top }, 500);
  e.preventDefault();
});

});


$(function(){

$('.buttonsw').on('click', function(e){
	$( ".section-7" ).addClass( "displb" );
  $('html,body').stop().animate({ scrollTop: $('.section-7').offset().top }, 500);
  e.preventDefault();
});

});



  $(function() {
    $( "#tabs" ).tabs();
  });



  $(function() {
    $( "#tabs2" ).tabs();
  });
 

  $(function() {
    $( ".tabs3s" ).tabs();
  });



   $(document).scroll(function() {
        var window_top = $(window).scrollTop(),
            header_h = 50;

        if (window_top > header_h){
            $('body').addClass('narrow');
        }
		
		if (window_top < 49){
            $('body').removeClass('narrow');
        }

    });



function displ(ddd) { if (document.getElementById(ddd).style.display == 'none') {document.getElementById(ddd).style.display = 'block'} else {document.getElementById(ddd).style.display = 'none'} } 



        
	            $(document).ready(function() { // зaпускaем скрипт пoсле зaгрузки всех элементoв
    /* зaсунем срaзу все элементы в переменные, чтoбы скрипту не прихoдилoсь их кaждый рaз искaть при кликaх */
    var overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = $('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = $('.modal_div'); // все скрытые мoдaльные oкнa

     open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
         event.preventDefault(); // вырубaем стaндaртнoе пoведение
         var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
         overlay.fadeIn(400, //пoкaзывaем oверлэй
             function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
                 $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '50%'}, 200); // плaвнo пoкaзывaем
         });
     });

     close.click( function(){ // лoвим клик пo крестику или oверлэю
            modal // все мoдaльные oкнa
             .animate({opacity: 0, top: '45%'}, 200, // плaвнo прячем
                 function(){ // пoсле этoгo
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); // прячем пoдлoжку
                 }
             );
     });
});




  
$(function(){
    $('.open_modals1').click(function(){
        $('#modal2').css("display", "block");
    });
});



$(function(){
    $('.open_modals2').click(function(){
        $('#modal3').css("display", "block");
    });
});

$(function(){
    $('.open_modals2').click(function(){
        $('#modal3').css("display", "block");
    });
});


$(function(){
    $('.open_modals3').click(function(){
        $('#modal4').css("display", "block");
    });
});



$(function(){
    $('.open_modals4').click(function(){
        $('#modal5').css("display", "block");
    });
});


$(function(){
    $('.open_modals5').click(function(){
        $('#modal6').css("display", "block");
    });
});

$(function(){
    $('.open_modals6').click(function(){
        $('#modal7').css("display", "block");
    });
});



$(function(){
    $('.modal_close2').click(function(){
        $('#modal2').css("display", "none");
         $('#modal3').css("display", "none");
          $('#modal4').css("display", "none");
           $('#modal5').css("display", "none");
            $('#modal6').css("display", "none");
             $('#modal7').css("display", "none");
    });
});







 $(function() {
    var tooltips = $( "[title]" ).tooltip({
      position: {
        my: "left center",
        at: "right+5 top-5"
      }
    });
    $( "<button>" )
      .text( "Show help" )
      .button()
      .click(function() {
        tooltips.tooltip( "open" );
      })
      .insertAfter( "form" );
  });



$(function(){
    $('.a-click').click(function(){
        $('.sde').css("display", "none");
    });
});




 	// Cache selectors
		var lastId,
			topMenu = $("#top-menu"),
			topMenuHeight = topMenu.outerHeight()+15,
			// All list items
			menuItems = topMenu.find("a"),
			// Anchors corresponding to menu items
			scrollItems = menuItems.map(function(){
			  var item = $($(this).attr("href"));
			  if (item.length) { return item; }
			});

		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		menuItems.click(function(e){
		  var href = $(this).attr("href"),
			  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
		  $('html, body').stop().animate({ 
			  scrollTop: offsetTop
		  }, 300);
		  e.preventDefault();
		});

		// Bind to scroll
		$(window).scroll(function(){
		   // Get container scroll position
		   var fromTop = $(this).scrollTop()+topMenuHeight;
		   
		   // Get id of current scroll item
		   var cur = scrollItems.map(function(){
			 if ($(this).offset().top < fromTop)
			   return this;
		   });
		   // Get the id of the current element
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";
		   
		   if (lastId !== id) {
			   lastId = id;
			   // Set/remove active class
			   menuItems
				 .parent().removeClass("active")
				 .end().filter("[href=#"+id+"]").parent().addClass("active");
		   }                   
		});


	$(function() {
					$('#example1 a').Chocolat();
				
				});
	
	

jQuery(function($){
	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: 'Назад',
		nextText: 'Далее',

		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
'Октябрь', 'Ноябрь', 'Декабрь'],

	
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],

		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
});			
				
				
	$(function(){
  $.datepicker.setDefaults(
        $.extend($.datepicker.regional["ru"])
  );
  $(".datepickers").datepicker();
});





  $(function() {
    $( "#slides, #slides2" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $( "#slides" ).slider( "value", 100 );
    $( "#slides2" ).slider( "value", 140 );
  });






