$(document).ready(function(){

    $(window).scroll(function(){
		if ($(this).scrollTop() > 80){
			$("#menu-productos").addClass("menu-fixed");
			$("#menu-productos").removeClass("menu-relative");
            
		} else {
			$("#menu-productos").removeClass("menu-fixed");
			$("#menu-productos").addClass("menu-relative");
		    
        }

		});

    

    $("#todo").click(function(){
    	$("li",this).addClass("selected");
    	$("li","#producto1").removeClass("selected");
    	$("li","#producto2").removeClass("selected");
    	$("li","#producto3").removeClass("selected");
    	$("li","#producto4").removeClass("selected");	
		$("#producto1-img").show();
		$("#producto2-img").show();
		$("#producto3-img").show();
        $("#producto4-img").show();
        $("#vermas-producto1").css("display","none");
        $("#vermas-producto2").css("display","none");
        $("#vermas-producto3").css("display","none");
        $("#vermas-producto4").css("display","none");
	});
    
    $("#producto1").click(function(){
    	$("li",this).addClass("selected");
    	$("li","#todo").removeClass("selected");
    	$("li","#producto2").removeClass("selected");
    	$("li","#producto3").removeClass("selected");
    	$("li","#producto4").removeClass("selected");
		$("#producto1-img").show();
		$("#producto2-img").hide();
		$("#producto3-img").hide();
        $("#producto4-img").hide();
        $("#vermas-producto1").css("display","block");
        $("#vermas-producto2").css("display","none");
        $("#vermas-producto3").css("display","none");
        $("#vermas-producto4").css("display","none");
	});

    $("#producto2").click(function(){
    	$("li",this).addClass("selected");
    	$("li","#producto1").removeClass("selected");
    	$("li","#todo").removeClass("selected");
    	$("li","#producto3").removeClass("selected");
    	$("li","#producto4").removeClass("selected");
		$("#producto2-img").show();
		$("#producto1-img").hide();
		$("#producto3-img").hide();
        $("#producto4-img").hide();
        $("#vermas-producto1").css("display","none");
        $("#vermas-producto2").css("display","block");
        $("#vermas-producto3").css("display","none");
        $("#vermas-producto4").css("display","none");
	});

    $("#producto3").click(function(){
    	$("li",this).addClass("selected");
    	$("li","#producto1").removeClass("selected");
    	$("li","#producto2").removeClass("selected");
    	$("li","#todo").removeClass("selected");
    	$("li","#producto4").removeClass("selected");
		$("#producto3-img").show();
		$("#producto2-img").hide();
		$("#producto1-img").hide();
        $("#producto4-img").hide();
        $("#vermas-producto1").css("display","none");
        $("#vermas-producto2").css("display","none");
        $("#vermas-producto3").css("display","block");
        $("#vermas-producto4").css("display","none");
	});

    $("#producto4").click(function(){
    	$("li",this).addClass("selected");
    	$("li","#producto1").removeClass("selected");
    	$("li","#producto2").removeClass("selected");
    	$("li","#producto3").removeClass("selected");
    	$("li","#todo").removeClass("selected");
		$("#producto4-img").show();
		$("#producto2-img").hide();
		$("#producto1-img").hide();
        $("#producto3-img").hide();
        $("#vermas-producto1").css("display","none");
        $("#vermas-producto2").css("display","none");
        $("#vermas-producto3").css("display","none");
        $("#vermas-producto4").css("display","block");
	});

	// Activación de transición del menú principal y del menú móvil
    $('header nav a, aside#menu nav a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
    });

    // Funciones de Abrir y Cerrar el Menú Responsive
    $('a#abrir-menu').click(function(){
        $('aside#menu').animate({
            right: -70
        },500,'easeOutExpo');

        $('a#abrir-menu').hide();
        $('a#cerrar-menu').show();

        event.preventDefault();
    });

    $('a#cerrar-menu, aside#menu nav a').click(function(){
        $('aside#menu').animate({
            right: -290
        },1000,'easeOutElastic');

        $('a#abrir-menu').show();
        $('a#cerrar-menu').hide();

        event.preventDefault();
    });

});