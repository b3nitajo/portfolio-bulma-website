"use-strict"



var refs = {
  designModal: {
    open: function open() {
      $("#designModal").toggleClass("is-active");
    },
    close: function close() {
      $("#designModal").toggleClass("is-active");
      $("#designmodalbody").empty();
      $(".modal-card-title").text("");
    }
  }
};



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
    $(".tech").animate({ opacity: "0.2" });
    $(".design").animate({ opacity: "2" });
  });

  $(".tech").click(function () {
    $(".tech-port-sec").show();
    $(".design-port-sec").hide();
    $(".portfolio").show();
    $(".porthead").text("Welcome to the Techfolio");
    $(".portsub").text("(select a category below...)");
    $(".tech p").text("Too techy? click Artfolio to view...");
    $(".design").animate({ opacity: "0.2" });
    $(".tech").animate({ opacity: "2" });
  });

  //COMING SOON CATEGORY BOX RENAME
  $(".comingsoon").click(function () {
    if ($(this).hasClass("comingsoon-on")) {
      return;
    } else {
      $(this).addClass("comingsoon-on");
      $(this).contents().find("h1").html($(this).text() + '<br>' + "(coming soon)");
    }
  });

  $(".portcat").click(function () {
    var portfolioSection = $(this).hasClass("design");
    var isComingSoonCat = $(this).hasClass("comingsoon");
    var designCategory = $(this).attr("id");
    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);
        var itemReturnVariable;

        for (var i = 0; i < responseObject[designCategory].length; i++) {
          if (isComingSoonCat == true) {
            return;
          }
          if (portfolioSection == true) {
            $(".modal-card-title").text(designCategory.toUpperCase());
            var designAssetImage = $("<img>");
            designAssetImage.attr("src", responseObject[designCategory][i].image);
            var designItem = $("<div>");
            designItem.attr("id", "item-" + [i + 1]);
            designItem.append(designAssetImage);
            itemReturnVariable = designItem;
          } else {
            $(".modal-card-title").text(responseObject[designCategory][i].title.toUpperCase());
            var techTssetDes = $("<div>");
            var techAssetImage = $("<img>");
            techTssetDes.text(responseObject[designCategory][i].description);
            techAssetImage.attr("src", responseObject[designCategory][i].image);
            var techItem = $("<div>");
            techItem.attr("id", "item-" + [i + 1]);
            var appButton = $("<a>");
            appButton.addClass("button").attr("href",responseObject[designCategory][i].appurl).attr("target", "_blank").text("View App");
            var gitIcon = $("<a>");
            gitIcon.addClass("button").attr("href",responseObject[designCategory][i].gitlink).attr("target", "_blank").text("View Github ReadMe");
            techItem.append(techAssetImage, [techTssetDes, appButton, gitIcon]);
            itemReturnVariable = techItem;
          }
          $("#designmodalbody").append(itemReturnVariable);
        }
      }
      refs.designModal.open();
    };
   
    xhr.open('GET', 'data/data.json', true);
    xhr.send(null);

    
  });

  //CONTACT PAGE
  $(".cardbox").click(function () {
    $(".contact-form").hide();
    $(".business-card").show();    
  });


  $(".formbox").click(function () {
    $(".business-card").hide(); 
    $(".contact-form").show();
  });
});




