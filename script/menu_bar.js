//메뉴 클릭 시 체크박스 해제
$(function(){
  $(".sidebar a").click(function(){
      $('#menuicon').prop('checked',false);
  });
});