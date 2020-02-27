
function isMenuShow(){
  var top = document.getElementsByClassName("top-menu-flag");
  var topNav = document.getElementsByClassName("top-nav");
  if(topNav[0].style.top === "-442px"){
    topNav[0].style.top= "-19px"
  }else{
    topNav[0].style.top= "-442px"
}
}
