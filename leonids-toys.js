const toyToFind = 3

const toys= [
{
    name: "Barbie doll",
    id: 1,
    type: "doll",
    catagory: "pretend play",
    manufacturerName: "Mattel",
    inStock: 50,
    ordered: 10,
    needToOrder: false,
    price: 9.99,
},
{
    name: "Wooden train",
    id: 2,
    type: "caboose",
    catagory: "model building",
    manufacturerName: "Hape",
    inStock: 5,
    ordered: 2,
    needToOrder: true,
    price: 5.99 
},
{
    name: "Lego City",
    id: 3,
    type: "clock tower",
    catagory: "construction",
    manufacturerName: "Lego",
    inStock: 1,
    ordered: 0,
    needToOrder: true,
    price: 19.99
}
]

const playmobil= {
    name: "Playmobil",
    id: 4,
    type: "mermaids",
    catagory: "action figures",
    manufacturerName: "Brandstätter",
    inStock: 3,
    ordered: 3,
    needToOrder: true,
    price: 10.99
}

const speakAndSpell= {
    name: "Speak and Spell",
    id: 5,
    type: "TMS5100",
    catagory: "educational",
    manufacturerName: "Texas Instruments",
    inStock: 5,
    ordered: 8,
    needToOrder: false,
    price: 24.99
}

toys.push(playmobil)

toys.push(speakAndSpell)

for (const toy of toys) {
    if (toy.id === toyToFind) {
        toy.price = toy.price + .5
        console.log(`The ${toy.manufacturerName} ${toy.name} ${toy.type} costs ${toy.price} dollars.`)
    }
}
