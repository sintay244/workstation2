function FoodItem(name,cal,vegan,glutenFree,citrusFree) {
	this.name=name;
	this.cal=cal;
	this.vegan=vegan;
	this.glutenFree=glutenFree;
	this.citrusFree=citrusFree;

}


var burrito=new FoodItem('Burrito',1000,true,false);
FoodItem.prototype.stringify=function() {
	return(this.name);
}
console.log(burrito.stringify());
