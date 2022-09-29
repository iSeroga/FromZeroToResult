const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '28/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}

const userMap = new Map (Object.entries(user));// Для розширеня карти для чогось (перероблює в масив)

const newUserObj = Object.fromEntries(userMap); // З массива перероблює в об' єкт
console.log(userMap)


const shops = [
    {rice:500},
    {oil:200},
    {bread:50}

]

const budget = [500,15000,25000];

const map = new Map([
    [{paper: 400}, 8000]
]); // set


// map.set(shops[0], 5000); // shops = keys, values 5000
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);
shops.forEach((shop,i) => {
    map.set(shop, budget[i])
})

console.log(map);

// console.log(map.get(shops[0 ]));
// console.log(map.has(shops[0 ]));
// map.delete(key);
// map.clear();
// map.size;

// map.keys();

// const goods = [];

// for(let shop of map.keys()){
//     goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

// for (let [shop, price] of map.entries()) {
//     console.log(price, shop);
// }

// map.forEach((value, key, map ) => {
//     console.log(key, value);
// })