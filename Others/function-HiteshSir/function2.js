// ...price is a rest operator.
// It helps in unlimited operators
function calCulateCardPrice (...price){
    let sum = 0;
    for (let i = 0; i < price.length; i++){
        sum += price[i];
    }
    return sum;
}
// console.log(calCulateCardPrice(20, 50, 30)); //100
// console.log(calCulateCardPrice(2, 5, 30, 10, 2)); //49


// we can assign initial peramiter before rest operator 
// first argument is assign to discount and rest of other to ...items
function discountOnShoping(discount, ...items){
    priceWithoutDiscount = 0;
    for (let i = 0; i < items.length; i++){
        priceWithoutDiscount += items[i];
    }
    priceAfterDiscount = priceWithoutDiscount - ((discount/100)*priceWithoutDiscount);
    return priceAfterDiscount;
}
// console.log(discountOnShoping(10, 20, 50, 30)); // 10% discount assined to discount and other prices to items
// //90



const user = {
    userName :"Manik Maity",
    cartPrice : 199,
    discoutCuppon : 10

}

function haldelObject(anyObject){
    console.log(`User Name ${anyObject.userName} and Price is ${anyObject.cartPrice}`);
}
haldelObject(user);