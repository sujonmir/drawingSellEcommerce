$(document).ready(function() {
  // owl carousel
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      loop:true,
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause:true,
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
  $(".owl-prev").html("&#10096;");
  $(".owl-next").html("&#10097;");

  // star rating part
  $('#star_rating1').jsRapStar({
    length: 5,
    star:'★',
      // color
  colorFront: 'black',

  // background color
  colorBack: 'white',

  // size in pixels
  starHeight: 32,
  step:true,
  enabled:false,
    onClick: function(score){
    $(this)[0].StarF.css({color:'red'});
    alert(score);
  },

  onMousemove: function(score){
    $(this).attr('title','Rating: '+score);
  },

  onMouseleave: function(score){
    $(this).attr('title','Rating: '+score);
  },
  });
  $('#star_rating2').jsRapStar({
    length: 5,
    star:'★',
      // color
  colorFront: 'black',

  // background color
  colorBack: 'white',

  // size in pixels
  starHeight: 32,
  step:true,
  enabled:false,
    onClick: function(score){
    $(this)[0].StarF.css({color:'red'});
    alert(score);
  },

  onMousemove: function(score){
    $(this).attr('title','Rating: '+score);
  },

  onMouseleave: function(score){
    $(this).attr('title','Rating: '+score);
  },
  });
  $('#star_rating3').jsRapStar({
    length: 5,
    star:'★',
      // color
  colorFront: 'black',

  // background color
  colorBack: 'white',

  // size in pixels
  starHeight: 32,
  step:true,
  enabled:false,
    onClick: function(score){
    $(this)[0].StarF.css({color:'red'});
    alert(score);
  },

  onMousemove: function(score){
    $(this).attr('title','Rating: '+score);
  },

  onMouseleave: function(score){
    $(this).attr('title','Rating: '+score);
  },
  });
  $('#star_rating4').jsRapStar({
    length: 5,
    star:'★',
      // color
  colorFront: 'black',

  // background color
  colorBack: 'white',

  // size in pixels
  starHeight: 32,
  step:true,
  enabled:false,
    onClick: function(score){
    $(this)[0].StarF.css({color:'red'});
    alert(score);
  },

  onMousemove: function(score){
    $(this).attr('title','Rating: '+score);
  },

  onMouseleave: function(score){
    $(this).attr('title','Rating: '+score);
  },
  });
  $('#star_rating5').jsRapStar({
    length: 5,
    star:'★',
      // color
  colorFront: 'black',

  // background color
  colorBack: 'white',

  // size in pixels
  starHeight: 32,
  step:true,
  enabled:false,
    onClick: function(score){
    $(this)[0].StarF.css({color:'red'});
    alert(score);
  },

  onMousemove: function(score){
    $(this).attr('title','Rating: '+score);
  },

  onMouseleave: function(score){
    $(this).attr('title','Rating: '+score);
  },
  });
  $('#star_rating6').jsRapStar({
    length: 5,
    star:'★',
      // color
  colorFront: 'black',

  // background color
  colorBack: 'white',

  // size in pixels
  starHeight: 32,
  step:true,
  enabled:false,
    onClick: function(score){
    $(this)[0].StarF.css({color:'red'});
    alert(score);
  },

  onMousemove: function(score){
    $(this).attr('title','Rating: '+score);
  },

  onMouseleave: function(score){
    $(this).attr('title','Rating: '+score);
  },
  });
  $(".ap_button1").click(function(){
    $(".ap_button1 i").addClass("ap_button_color");
    $(".ap_button2 i").removeClass("ap_button_color");
  });
  $(".ap_button2").click(function(){
    $(".ap_button2 i").addClass("ap_button_color");
    $(".ap_button1 i").removeClass("ap_button_color");
  });


 
});
  // contact form validation
   // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function() {
          'use strict';
          window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
              form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add('was-validated');
              }, false);
            });
          }, false);
        })();

// cart page
// function multiplyBy(){
//     var num1 = 4659.44;
//     var num2 = document.getElementById('quantity').value;
//     var r1= num1*num2;
//     var result= r1.toFixed(2);
//     document.getElementById('result').innerHTML = result;
//     document.getElementById('result1').innerHTML = result;
// }

setInterval(function multiplyBy(){ 
    var num1 = 4659.44;
    var num2 = document.getElementById('quantity').value;
    var r1= num1*num2;
    var result= r1.toFixed(2);
    document.getElementById('result').innerHTML = result;
    document.getElementById('result1').innerHTML = result;
}, 1);

