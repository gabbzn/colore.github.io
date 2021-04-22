var mainDiv = document.getElementById("main-button");
mainDiv.addEventListener("click", function () {
  this.children.item(0).classList.toggle("fa-times");
  this.classList.toggle("open");
});

// using jQuery
// var mainDiv =  $('#main-button');
// mainDiv.on('click', function(){
//   $(this).find('i').toggleClass('fa-times');
//   $(this).toggleClass('open');
// });
