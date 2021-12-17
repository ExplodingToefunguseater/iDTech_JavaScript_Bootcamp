const car1 = {
    name: "tesla",
    color: "blue",
    price: 50000
};

const car2 = {
    name: "subaru",
    color: "black",
    price: 45000
};

const car3 = {
    name: "BMW",
    color: "white",
    price: 40000
};

let carCollection = [
    car1, 
    car2, 
    car3
];
console.log(carCollection);

carCollection.push(
    {
        name: "BMW",
        color: "white",
        price: 50000
    }
);
console.log(carCollection);

console.log(carCollection[3].color);

console.log("fuck your mom")