$(document).ready(function() {
  
    // navbar burger
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    //Portfolio Page JS
    // $(".design").hover(function(){
    //   $(".design").animate({opacity: "0.2"});
    // });

    // $(".tech").hover(function(){
    //   $(".tech").animate({opacity: "0.2"});
    // });

    $(".design").click(function(){
      $(".tech").parent().hide();
      $(".design").parent().removeClass("is-half").addClass("is-full");
      $(".porthead").text("Welcome to the Artfolio");
      $(".portsub").text("(too artsy? click to go back...)").click(function(){
        $(".design").parent().removeClass("is-full").addClass("is-half");
        $(".tech-port-sec").hide();
        $(".design-port-sec").hide();
        $(".tech").parent().show();
        $(".design").parent().show();
      });
      $(".portfolio").show();
      $(".design-port-sec").show();
    });
  
    $(".tech").click(function(){
      $(".design").parent().hide();
      $(".tech").parent().removeClass("is-half").addClass("is-full");
      $(".porthead").text("Welcome to the Techfolio");
      $(".portsub").text("(too techy? click to go back...)").click(function(){
        $(".tech").parent().removeClass("is-full").addClass("is-half");
        $(".tech-port-sec").hide();
        $(".design-port-sec").hide();
        $(".tech").parent().show();
        $(".design").parent().show();
      });
      $(".portfolio").show();
      $(".tech-port-sec").show();
    });


  });