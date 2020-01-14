$(document).ready(function () {
  
  // navbar burger
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

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

var xhr = new XMLHttpRequest();

xhr.onload = function() {
  if(xhr.status === 200){
    responseObject = JSON.parse(xhr.responseText);
    //build string with new content
    var newContent = '';
    for (var i=0; i < responseObject.logos.length; i++){
      newContent += responseObject.logos[i].title;
    }
    
    console.log(newContent);
  }
};

xhr.open('GET', '../lib/data/data.json', true);
xhr.send(null);
 

 

// build modal ref
var refs = {
  modalEdicion: {
    open: function() { document.getElementById('modalEdicion').classList.add('is-active');
    },
    close:function() { document.getElementById('modalEdicion').classList.remove('is-active');                     
    }
  }
};
// var giphy = {
//   techModalEdicion: {
//     open: function() { document.getElementById('techModalEdicion').classList.add('is-active');
//     },
//     close:function() { document.getElementById('techModalEdicion').classList.remove('is-active');                  
//     }
//   }
// };
