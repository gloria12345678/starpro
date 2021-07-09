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
  var myApi1 ="https://test-cms-alpha.herokuapp.com/sites/2/tweets.json"
  var myList1 = document.getElementById('fadeIn1');
  function loadnews(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET",myApi1,true);
    xhr.onload = function(){
        if(this.status == 200){
            let json =new Array
            json = JSON.parse(this.responseText);
            console.log(json);
            for(var i = 0; i < 1; i++) {
                var listItem = document.createElement('div');
                listItem.innerHTML = '<p>' + json[i].created_at.substring(0,10)+ '</p>';
                listItem.innerHTML +='<hr>';
                listItem.innerHTML +='<p>' + json[i].content + '<p>';
                  myList1.appendChild(listItem);
            }
        }              
    }
    xhr.send();
  }
  loadnews()