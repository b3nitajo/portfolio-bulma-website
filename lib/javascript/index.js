$(document).ready(function () {

  // navbar burger
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  //Portfolio Page JS
  // $(".design").hover(function(){
  //   $(".design").animate({opacity: "2"});
  //   $(".tech").animate({opacity: "0.2"});  
  // });

  //  $(".tech").hover(function(){
  //     $(".tech").animate({opacity: "2"});
  //     $(".design").animate({opacity: "0.2"});   
  //  });

  // $(".design").click(function () {
  //   $(".design").parent().hide();
  //   $(".design").parent().removeClass("is-half").addClass("is-full");
  //   $(".porthead").text("Welcome to the Artfolio");
  //   $(".portsub").text("(too artsy? click to go back...)").click(function () {
  //     $(".design").parent().removeClass("is-full").addClass("is-half");
  //     $(".tech-port-sec").hide();
  //     $(".design-port-sec").hide();
  //     $(".tech").parent().show();
  //     $(".design").parent().show();
  //   });
  //   $(".portfolio").show();
  //   $(".design-port-sec").show();
  // });

  // $(".tech").click(function () {
  //   $(".design").parent().hide();
  //   $(".tech").parent().removeClass("is-half").addClass("is-full");
  //   $(".porthead").text("Welcome to the Techfolio");
  //   $(".portsub").text("(too techy? click to go back...)").click(function () {
  //     $(".tech").parent().removeClass("is-full").addClass("is-half");
  //     $(".tech-port-sec").hide();
  //     $(".design-port-sec").hide();
  //     $(".tech").parent().show();
  //     $(".design").parent().show();
  //   });
  //   $(".portfolio").show();
  //   $(".tech-port-sec").show();
  // });

  $(".design").click(function () {
    $(".design-port-sec").show();
    $(".tech-port-sec").hide();
    $(".portfolio").show();
    $(".porthead").text("Welcome to the Artfolio");
    $(".portsub").text("(select a category below...)");
    $(".design p").text("Too artsy? click Techfolio to view...");  
    $(".tech").animate({opacity: "0.2"});
    $(".design").animate({opacity: "2"});
  });

  $(".tech").click(function () {
    $(".tech-port-sec").show();
    $(".design-port-sec").hide();
    $(".portfolio").show();
    $(".porthead").text("Welcome to the Techfolio");
    $(".portsub").text("(select a category below...)");
    $(".tech p").text("Too techy? click Artfolio to view...");
    $(".design").animate({opacity: "0.2"});
    $(".tech").animate({opacity: "2"});   
  });
});

// $(".stationery").click(function () {
//   $(".modal").toggleClass("is-active");
// });

var refs = {
  modalEdicion: {
    open: function() { document.getElementById('modalEdicion').classList.add('is-active');
    },
    close:function() { document.getElementById('modalEdicion').classList.remove('is-active');
                      
    }
  }
};