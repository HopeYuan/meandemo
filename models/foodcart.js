module.exports = function foodCart(OldCartItems){
	this.items=OldCartItems.items ||{} ;
	this.totalQuantity=OldCartItems.totalQuantity|| 0;
	this.totalPrice=OldCartItems.totalPrice|| 0;

	 this.add = function (item, id) {
        var storedFood = this.items[id];
        if(!storedFood){
           storedFood=this.items[id]={item:item,quantity:0,price:0};
        }
        storedFood.quantity++;
        storedFood.price=storedFood.quantity*storedFood.item.price;
        this.totalQuantity++;
        this.totalPrice+=storedFood.item.price;
	};
	this.foodList=function(){
    var list=[];
   for (var id in this.items) {
            list.push(this.items[id]);
        }
        return list;
    };
}