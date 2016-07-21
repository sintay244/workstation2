function Drink(name,description,price,ingredients) {
	this.name=name;
	this.description=description;
	this.price=price;
	this.ingredients=[];
}
function Plate(name,description,price) {
	this.name=name;
	this.description=description;
	this.price=price;
	this.ingredients=[];
}
function Order(plate) {
	this.plate=[];
}
function Menu (plate) {
	this.plate=[];
}
function Restaurant(name,description,menu) {
	this.name=name;
	this.description=description;
	this.menu=menu;
}
function Customer(dietaryPreference) {
	this.dietaryPreference=dietaryPreference;
}
// Drink.prototype.stringify {
// 	this.name=name;
// 	this.description=description;
// 	this.price=price;
// 	this.ingredients=ingredients;
// }

function Restaurant(name,description,menu) {
	this.name=name;
	this.description=description;
	ths.menu=menu
}
function Customer(dietaryPreference) {
	this.dietaryPreference=dietaryPreference;
}

Drink.prototype.stringify=function() {
	return(this.name+ ' ' + this.description+ ' ' + this.price +' ' + ingredients)
}
Plate.prototype.stringify=function() {
	return(this.name+ ' ' + this.description+ ' ' + this.price+ ' '+ ingredients )
}
// Order.prototype.stringify=function() {
// 	return(this.plate)
// }
// Menu.prototype.stringify=function() {
// 	return(this.plate)
// }
// Restaurant.prototype.stringify=function() {
// 	return(this.name+ ' ' + this.description+ ' ' + this.menu)
// }

Plate.prototype.isVegan=function() 
{  for (var i=0;i<this.ingredients.length;i++) {
  if (this.ingredients[i]=="meat products") {
  	return false;
  }
  	else {
  		return true;
  }
}

}
var cheVegan=new Plate('Burrito','mexican burrito','10');
Plate.prototype.addingrid= function(foodItem) {
	this.ingredients.push(foodItem); 
}

cheVegan.addingrid ( new Item ( {"carrot","cabbage","romaine leaf","peakles"}));

console.log(cheVegan);
cheVegan.isVegan();
console.log(cheVegan.isVegan());



// isGlutenfree(Plate.prototype);
// isCitrusFree(Plate.prototype);
// var BurritoPlate= new Plate('Burrito','combo is cheaper',10,['rice','beef','hot sauce']);


// var margaritaPlate=new Drink('MargaritaSpanol','FDA verified',100,['alcohol','water']);
// Drink.prototype.stringify=function() {
// 	return(this.name  +  ' ' + this.description + ' ' + this.price + '' + ' ' + this.ingredients)
// }
// console.log(margaritaPlate.stringify());


//*********************
