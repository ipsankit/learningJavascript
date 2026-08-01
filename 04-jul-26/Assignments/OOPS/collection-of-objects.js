class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(name, price) {
         this.items.push({
        name: name,
        price: price
    });
        console.log("Added:",name,"($",price,")");
    }
    removeItem(name){
        const remove = this.items.filter(item => item.name !== name);
        console.log(`Removed: ${name}`);
        
    }
    getTotal(){
        const total = this.items.reduce((sum, item)=> sum + item.price, 0);
        return total;
    }

    listItems(){
console.log("Cart items:");
 for (let item of this.items) {
        console.log(`  - ${item.name}: $${item.price}`);
    }
    }
}

const cart = new ShoppingCart("Cart Items:");

cart.addItem("Keyboard",40);
cart.addItem("Mouse",0);
cart.addItem("Monitor",150);
cart.removeItem("Mouse",150);
console.log("Total:", "$" + cart.getTotal());