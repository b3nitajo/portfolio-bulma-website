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

  $(".afolio").click(function () {
    
    var designCategory = $(this).attr("id");
    console.log("test");
    console.log(designCategory);
    var xhr = new XMLHttpRequest();
   
    xhr.onload = function() {
      if(xhr.status === 200){
       
        responseObject = JSON.parse(xhr.responseText);
       
        //build string with new content
        console.log(responseObject[designCategory]);
   
       
       $(".modal-card-title").text(designCategory.toUpperCase());
        for (var i=0; i < responseObject[designCategory].length; i++){
          var assetTitle = $("<div>");
          var assetImage = $("<img>");
          var assetDes = $("<div>");
          assetTitle.addClass("desassettitle").text(responseObject[designCategory][i].title);
          assetImage.addClass("desassetimage").attr("src",responseObject[designCategory][i].image);
          assetDes.addClass("desassetdescription").text(responseObject[designCategory][i].description);
          var linebreak = $("<div>");
          linebreak.addClass("column");
          $(".designmodalbody").append(assetImage,[assetTitle,assetDes,linebreak]);
          console.log("Passed");
        } 

        refs.designModal.open();
      //  $('modalEdicion').toggleClass('is-active');
      }   
    };

  xhr.open('GET', '../lib/data/data.json', true);
  xhr.send(null);
  });

});
  

  // build modal ref
  var refs = {
    designModal: {
      open: function() { document.getElementById('designModal').classList.add('is-active');
      },
      close:function() { 
        $("#designModal").toggleClass('is-active');
        $(".designmodalbody").empty();
        $(".modal-card-title").text("");                 
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
