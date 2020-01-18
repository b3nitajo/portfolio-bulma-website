// build modal ref
var refs = {
  designModal: {
    open: function() { $("#designModal").toggleClass("is-active");
    },
    close:function() { 
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

//COMING SOON CATEGORY BOX RENAME
  $(".comingsoon").click(function () {
    if($(this).hasClass("comingsoon-on")){
      return;
    }
    else{
      $(this).addClass("comingsoon-on");
      $(this).contents().find("h1").html($(this).text() + '<br>' + "(coming soon)");
    }  
  });


  $(".portcat").click(function () { 
    var portfolioSection = $(this).hasClass("design");
    var isComingSoonCat = $(this).hasClass("comingsoon");
    console.log("portfolio section has class text" + portfolioSection);
    var designCategory = $(this).attr("id");
    var xhr = new XMLHttpRequest();
   
    xhr.onload = function() {
      if(xhr.status === 200){       
        responseObject = JSON.parse(xhr.responseText);
        console.log(responseObject[designCategory]);
       var itemReturnVariable;
        
        for (var i=0; i < responseObject[designCategory].length; i++){
          if(isComingSoonCat == true){  
            return;
          }
          if(portfolioSection == true){ 
            $(".modal-card-title").text(designCategory.toUpperCase());         
            var designAssetImage = $("<img>");
            designAssetImage.attr("src",responseObject[designCategory][i].image);
            var designItem = $("<div>");
            designItem.attr("id","item-"+[i+1]);
            designItem.append(designAssetImage);
            console.log(designItem);
            itemReturnVariable = designItem;
          }       
          else{
            $(".modal-card-title").text(responseObject[designCategory][i].title.toUpperCase());
            console.log("tech modal block");
            var techTssetDes = $("<div>");
            var techAssetImage = $("<img>");
            techTssetDes.text(responseObject[designCategory][i].description);
            techAssetImage.attr("src",responseObject[designCategory][i].image);
            var techItem = $("<div>");
            techItem.attr("id","item-"+[i+1]);
            techItem.append(techAssetImage,[techTssetDes]);
            itemReturnVariable = techItem;
          } 
          $("#designmodalbody").append(itemReturnVariable);
          console.log("Design Section Category");
        }
      }
     refs.designModal.open(); 
    };

  xhr.open('GET', '../lib/data/data.json', true);
  xhr.send(null);
  });
});


/*
$(".afolio").click(function () { 
    var designCategory = $(this).attr("id");
    var xhr = new XMLHttpRequest();
   
    xhr.onload = function() {
      if(xhr.status === 200){       
        responseObject = JSON.parse(xhr.responseText);
        console.log(responseObject[designCategory]);
          
       $(".modal-card-title").text(designCategory.toUpperCase());
        for (var i=0; i < responseObject[designCategory].length; i++){
          // var assetTitle = $("<div>");  
          // var assetDes = $("<div>");
          // assetTitle.addClass("desassettitle").text(responseObject[designCategory][i].title);
          // assetDes.addClass("desassetdescription").text(responseObject[designCategory][i].description);
          var assetImage = $("<img>");
          assetImage.attr("src",responseObject[designCategory][i].image);
          var item = $("<div>");
          item.attr("id","item-"+[i+1]);
          item.append(assetImage);
          console.log(item);

          $("#designmodalbody").append(item);
          console.log("Passed");
        } 
        
       
      }  
      refs.designModal.open(); 
    };

  xhr.open('GET', '../lib/data/data.json', true);
  xhr.send(null);
  });
});
*/