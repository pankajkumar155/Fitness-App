function searchItem(){
  document.getElementById("search").addEventListener("click", function (e) { e.preventDefault() });
  var item = document.querySelector("#item").value;
    document.querySelector("#heading").innerHTML = item;

    var url = "https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr="+item+"";

    var settings = {
 	"async": true,
 	"crossDomain": true,
 	"url": url,
 	"method": "GET",
  "dataType": "json",
 	"headers": {
 		"x-rapidapi-key": "d8db625635msh2366d747ae4e4adp1c3c11jsnf475282cffff",
 		"x-rapidapi-host": "edamam-edamam-nutrition-analysis.p.rapidapi.com"
 	}
 };

 $.ajax(settings).done(function (response) {
 	console.log(response);
  var res = response;
  document.querySelector("#bottom").style.display = "block";
      document.querySelector("#water").innerHTML = "Weight : "+res.totalWeight+" g";
      document.querySelector("#calorie").innerHTML = "Calorie : "+res.calories;
      document.querySelector("#protein").innerHTML = "Protein : "+Math.round(res.totalNutrients.PROCNT.quantity*100)/100+" "+res.totalNutrients.PROCNT.unit;
      document.querySelector("#lipid").innerHTML = "Fat : "+Math.round(res.totalNutrients.FAT.quantity*100)/100+" "+res.totalNutrients.FAT.unit;
      document.querySelector("#carbs").innerHTML = "Carbs : "+Math.round(res.totalNutrients.CHOCDF.quantity*100)/100+" "+res.totalNutrients.CHOCDF.unit;
      document.querySelector("#fibre").innerHTML = "Fiber : "+Math.round(res.totalNutrients.FIBTG.quantity*100)/100+" "+res.totalNutrients.FIBTG.unit;
      document.querySelector("#sugar").innerHTML = "Sugar : "+Math.round(res.totalNutrients.SUGAR.quantity*100)/100+" "+res.totalNutrients.SUGAR.unit;
      document.querySelector("#vit-a").innerHTML = "Vitamin A : "+Math.round(res.totalNutrients.VITA_RAE.quantity*100)/100+" "+res.totalNutrients.VITA_RAE.unit;
      document.querySelector("#vit-b6").innerHTML = "Vitamin B6 : "+Math.round(res.totalNutrients.VITB6A.quantity*100)/100+" "+res.totalNutrients.VITB6A.unit;
      document.querySelector("#vit-b12").innerHTML = "Vitamin B12 : "+Math.round(res.totalNutrients.VITB12.quantity*100)/100+" "+res.totalNutrients.VITB12.unit;
      document.querySelector("#vit-c").innerHTML = "Vitamin C : "+Math.round(res.totalNutrients.VITC.quantity*100)/100+" "+res.totalNutrients.VITC.unit;
      document.querySelector("#vit-d").innerHTML = "Vitamin D : "+Math.round(res.totalNutrients.VITD.quantity*100)/100+" "+res.totalNutrients.VITD.unit;
      document.querySelector("#vit-e").innerHTML = "Vitamin E : "+Math.round(res.totalNutrients.TOCPHA.quantity*100)/100+" "+res.totalNutrients.TOCPHA.unit;
      document.querySelector("#vit-k").innerHTML = "Vitamin K : "+Math.round(res.totalNutrients.VITK1.quantity*100)/100+" "+res.totalNutrients.VITK1.unit;

        window.location.href = "#bottom";

 });

}
