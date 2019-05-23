$(".main_text, .menu_link").on("click","a", function (event) {
        // event.preventDefault();
        var id  = $(this).attr('href');
        var  top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
 $(function(){
    $('.android').hover(
    function(){
        $('.mask1').css('opacity', '1');
        $('.mask2').css('opacity', '0');
        $('.ios_container').css('z-index', '0');
        $('.android_container').css('z-index', '999');
    },
    function() {
    	$('.mask1').css('opacity', '0');
    	$('.mask2').css('opacity', '1');
        $('.ios_container').css('z-index', '999');
        $('.android_container').css('z-index', '0');
	}
    )
});
 $(function(){
    $('header').hover(
    function(){
        if ($('.ios').hasClass('disabled')) {
            $('.mask2').css('opacity', '0');
            $('.mask1').css('opacity', '1');
        }
    },
    function() {
        $('.mask2').css('opacity', '1');
            $('.mask1').css('opacity', '0');
    }
    )
});
 if($(window).width() <= 1190) {
  $(".android").on("click", function() {
        $('.android').css('top', '20%');
        $('.ios').addClass('disabled');
        $('.android').removeClass('disabled');
        $('.ios_title').css('opacity','1');
        $('.android_title').css('opacity','0');
        $('header .menu_link').css('color','#fff');
        $('header .logo').css('filter', 'invert(1)');
        $('.android_arrow').fadeOut(200);
        $('.mask2').css('z-index', 'auto');
 });
  $(".ios").on("click", function() {
        $('.android').css('top', '80%');
        $('.android').addClass('disabled');
        $('.ios').removeClass('disabled');
        $('.ios_title').css('opacity','0');
        $('.android_title').css('opacity','1');
        $('header .menu_link').css('color','#000');
        $('header .logo').css('filter', 'invert(0)');
        $('.android_arrow').fadeIn(200);
 });
} else {
  $(".android").on("click", function() {
        $('.android').css('left', '10%');
        $('.ios').addClass('disabled');
        $('.android').removeClass('disabled');
        $('.ios_title').css('opacity','1');
        $('.android_title').css('opacity','0');
        $('.menu_link').css('color','#fff');
        $('.logo').css('filter', 'invert(1)');
        $('.android_arrow').fadeOut(200);
 });
  $(".ios").on("click", function() {
        $('.android').css('left', '90%');
        $('.android').addClass('disabled');
        $('.ios').removeClass('disabled');
        $('.ios_title').css('opacity','0');
        $('.android_title').css('opacity','1');
        $('.menu_link').css('color','#000');
        $('.logo').css('filter', 'invert(0)');
        $('.android_arrow').fadeIn(200);
 });
}
  
  function change() {
        $(".iphone_category").on("click", function() {
            console.log("01");
            // $('.content').empty();
            $('.content').load( "iphones.html #i5" );
        });
        $(".ipad_category").on("click", function() {
            console.log("02");
            // $('.content').empty();
            $('.content').load( "ipads.html #ip2" );
        });
        $(".macbook_category").on("click", function() {
            console.log("03");
            // $('.content').empty();
            $('.content').load( "macbooks.html #ma" );
        });
        $(".watch_category").on("click", function() {
            console.log("04");
            // $('.content').empty();
            $('.content').load( "watches.html #aw1" );
        });
        $(".ipod_category").on("click", function() {
            console.log("04");
            // $('.content').empty();
            $('.content').load( "ipods.html #ipt2" );
        });


        $(".iphone5").on("click", function() {
            console.log("1");
            // $('.content').empty();
            $('.content').load( "iphones.html #i5" );
        });
        $(".iphone5s").on("click", function() {
            console.log("2");
            // $('.content').empty();
            $('.content').load( "iphones.html #i5s" );
        });
        $(".iphonese").on("click", function() {
            console.log("3");
            // $('.content').empty();
            $('.content').load( "iphones.html #ise" );
        });
        $(".iphone5c").on("click", function() {
            console.log("4");
            // $('.content').empty();
            $('.content').load( "iphones.html #i5c" );
        });
        $(".iphone6").on("click", function() {
            console.log("5");
            // $('.content').empty();
            $('.content').load( "iphones.html #i6" );
        });
        $(".iphone6plus").on("click", function() {
            console.log("6");
            // $('.content').empty();
            $('.content').load( "iphones.html #i6p" );
        });
        $(".iphone6s").on("click", function() {
            console.log("7");
            // $('.content').empty();
            $('.content').load( "iphones.html #i6s" );
        });
        $(".iphone6splus").on("click", function() {
            console.log("8");
            // $('.content').empty();
            $('.content').load( "iphones.html #i6sp" );
        });
        $(".iphone7").on("click", function() {
            console.log("9");
            // $('.content').empty();
            $('.content').load( "iphones.html #i7" );
        });
        $(".iphone7plus").on("click", function() {
            console.log("10");
            // $('.content').empty();
            $('.content').load( "iphones.html #i7p" );
        });
        $(".iphone8").on("click", function() {
            console.log("11");
            // $('.content').empty();
            $('.content').load( "iphones.html #i8" );
        });
        $(".iphone8plus").on("click", function() {
            console.log("12");
            // $('.content').empty();
            $('.content').load( "iphones.html #i8p" );
        });
        $(".iphoneX").on("click", function() {
            console.log("13");
            // $('.content').empty();
            $('.content').load( "iphones.html #ix" );
        });



        $(".ipad2").on("click", function() {
            console.log("1_1");
            // $('.content').empty();
            $('.content').load( "ipads.html #ip2" );
        });
        $(".ipad3").on("click", function() {
            console.log("1_2");
            // $('.content').empty();
            $('.content').load( "ipads.html #ip3" );
        });
        $(".ipad4").on("click", function() {
            console.log("1_3");
            // $('.content').empty();
            $('.content').load( "ipads.html #ip4" );
        });
        $(".ipadAir").on("click", function() {
            console.log("1_4");
            // $('.content').empty();
            $('.content').load( "ipads.html #ipair" );
        });
        $(".ipadAir2").on("click", function() {
            console.log("1_5");
            // $('.content').empty();
            $('.content').load( "ipads.html #ipair2" );
        });
        $(".ipadmini").on("click", function() {
            console.log("1_6");
            // $('.content').empty();
            $('.content').load( "ipads.html #ipm1" );
        });
        $(".ipadmini2").on("click", function() {
            console.log("1_7");
            // $('.content').empty();
            $('.content').load( "ipads.html #ipm2" );
        });
        $(".ipadmini3").on("click", function() {
            console.log("1_8");
            // $('.content').empty();
            $('.content').load( "ipads.html #ipm3" );
        });
        $(".ipadmini4").on("click", function() {
            console.log("1_9");
            // $('.content').empty();
            $('.content').load( "ipads.html #ipm4" );
        });
        $(".ipadpro9").on("click", function() {
            console.log("1_10");
            // $('.content').empty();
            $('.content').load( "ipads.html #ipp9" );
        });
        $(".ipadpro12").on("click", function() {
            console.log("1_11");
            // $('.content').empty();
            $('.content').load( "ipads.html #ipp12" );
        });


        $(".mAir").on("click", function() {
            console.log("2_1");
            // $('.content').empty();
            $('.content').load( "macbooks.html #ma" );
        });
        $(".mPro").on("click", function() {
            console.log("2_2");
            // $('.content').empty();
            $('.content').load( "macbooks.html #mp" );
        });
        $(".mRetina").on("click", function() {
            console.log("2_3");
            // $('.content').empty();
            $('.content').load( "macbooks.html #mrl" );
        });


        $(".aws1").on("click", function() {
            console.log("3_1");
            // $('.content').empty();
            $('.content').load( "watches.html #aw1" );
        });
        $(".aws2").on("click", function() {
            console.log("3_2");
            // $('.content').empty();
            $('.content').load( "watches.html #aw2" );
        });


        $(".ipodT2").on("click", function() {
            console.log("3_1");
            // $('.content').empty();
            $('.content').load( "ipods.html #ipt2" );
        });
        $(".ipodT3").on("click", function() {
            console.log("3_2");
            // $('.content').empty();
            $('.content').load( "ipods.html #ipt3" );
        });
        $(".ipodT4").on("click", function() {
            console.log("3_1");
            // $('.content').empty();
            $('.content').load( "ipods.html #ipt4" );
        });
        $(".ipodT5").on("click", function() {
            console.log("3_2");
            // $('.content').empty();
            $('.content').load( "ipods.html #ipt5" );
        });
        $(".ipodN5").on("click", function() {
            console.log("3_1");
            // $('.content').empty();
            $('.content').load( "ipods.html #ipn5" );
        });
        $(".ipodN6").on("click", function() {
            console.log("3_2");
            // $('.content').empty();
            $('.content').load( "ipods.html #ipn6" );
        });
        $(".ipodN7").on("click", function() {
            console.log("3_1");
            // $('.content').empty();
            $('.content').load( "ipods.html #ipn7" );
        });

    };

