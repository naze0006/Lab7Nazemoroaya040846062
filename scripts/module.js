var myModule =  (function() {
    
//--------------  variables ------------------------
var brands = [{
    brand: "extra",
    price: 1.0,    
    },
    {
    brand: "doubleMint",
    price: 1.5,    
    },
    {
    brand: "trident",
    price: 2.0,    
    },
    {
    brand: "bubleGum",
    price: 3.0,    
    }
    ];

    var new_price = 0.0;
    var gumBrand = "";
    var itemsNo = 0.0;
    
// -------------- Methods -------------------------
    
var addPrice =function(gumBrand){
    
    for(var i = 0; i < brands.length; i++) 
    {
        if (brands[i].brand == gumBrand) 
           { 
               new_price += brands[i].price
           }
    }
    
    document.getElementById("totalPrice").innerHTML = new_price + " $CAD" ;
    itemsNo++;
    document.getElementById("totalItems").innerHTML =  itemsNo ;
};

var cls =function(){
    
    document.getElementById("totalPrice").innerHTML = "0.0";
    new_price = 0.0; 
    itemsNo = 0.0;
    document.getElementById("totalItems").innerHTML =  itemsNo; 
};

    
return {
      addPrice : addPrice,
      cls : cls   
    };

           
})();

