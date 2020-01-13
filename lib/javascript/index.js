$(document).ready(function () {
  loadXMLDoc();
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

// build design modal

var DesignCategories = {
  stationery: {
    item1: {
      name: "Titans Business Card",
      image: "stationery_bc_titans.png",
      description: "Business Card description goes here"
    },
    item1: {
      name: "Game Day Tickets",
      image: "stationery_tickets_titans.png",
      description: "Ticket description goes here"
    }
  }
};

// tech portfolio objects
var TechCategories = {
  giphy: {
    name: "Cultivate Giphy",
    image: "giphy_preview.png",
    description: "Giphy description goes here"
  }
};
// build tech modal
 // call to design xml 

 function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "../designcraft.xml" , true);
  xmlhttp.send();
}

function myFunction(xml) {
  console.log(xml);
  var x, i, xmlDoc, table;
  xmlDoc = xml.responseText;
  table = "<tr><th>title</th><th>image</th></tr>";
  x = xmlDoc.getElementsByTagName("stationery");
  for (i = 0; i < x.length; i++) { 
    table += "<tr><td>" + 
    x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  // document.getElementById("demo").innerHTML = table;
  console.log(table);
}


 

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
