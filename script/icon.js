$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 700) {
        $('#main2').addClass('main2');
    } else {
        $('#main2').removeClass('main2');
    }
});

/* $( '#main2' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} ); */

//메뉴 클릭 시 체크박스 해제
$(function(){
    $(".sidebar a").click(function(){
        $('#menuicon').prop('checked',false);
    });
  });
