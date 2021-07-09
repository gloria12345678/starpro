function fadein(id,no){
  var b=$(window).scrollTop()
  // console.log(b)
  if(b>no){
    $(id).fadeIn();
  }
  $(window).scroll(function () {
    var c=$(window).height(); 
    var a=$(document).scrollTop()
    // console.log(a)
    if(a>no){
      $(id).fadeIn(2500);
    }
  }); 
}
function tiao(i) {
  var cur = document.getElementById(i);
  getPosition(cur);
}

function getPosition(e) {
  var t = e.offsetTop;
  var l = e.offsetLeft;
  while (e = e.offsetParent) {
      t += e.offsetTop;
      l += e.offsetLeft;
  }
  $("html,body").animate({
      scrollTop: t
  }, 600);
}
$(document).ready(function(){
  $("body").addClass("body");
    // $(".jumbotron").css({"height":winHeight+"px"})
    $("#logo").fadeIn(2000);
    $("#nav").click(function(){
    $(".navLong").slideToggle(500);
    });
    $("#weixin").click(function(){
    $(".endweixin").slideToggle();
    });
  });
  function divHeight(_widthAndPercent,divId){
    let Id =document.getElementById(divId)
    console.log(Id)
    let winWidth = Id.offsetWidth;
    let divHeight = winWidth/_widthAndPercent;
      Id.style.height = divHeight+"px";
  }
