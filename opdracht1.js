const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

// Opdracht 1 - Array Methoden

// Opdracht 1.A: Gebruik een array-methode om een array te maken met alle tv-type namen.
// INPUT
// - Tv type parameter uit array inventory
// OUTPUT
// - Nieuwe array met alleen de tv types als waarden
// STAPPENPLAN
// [x] Maak nieuwe array met .map methode die tv type returned.
// [x] Vang de nieuwe array op in een nieuwe variabel en log deze in de console

const tvType = inventory.map((inventory) => {
    return inventory.type;
})
console.log(tvType);

// Opdracht 1 - Array Methoden

// Opdracht 1.B: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht
//   zijn.
// INPUT
// - Argument uit parameter "originalStock" uit array inventory
// - Argument uit parameter "sold" uit array inventory
// OUTPUT
// - Nieuwe array met de tv's (incl. alle onderliggende objecten) waar geen voorraad van is
// STAPPENPLAN
// [x] Maak nieuwe array met .filter methode die het verschil in "sold" en "orginalStock returned
// [x] Vang de nieuwe array op in een variabel en log deze in de console

const soldOut = inventory.filter((inventory) => {
    return inventory.sold === inventory.originalStock || inventory.sold > inventory.originalStock;
})

console.log(soldOut);

// Opdracht 1 - Array Methoden

// Opdracht 1.C: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken
// INPUT
// - Argument (boolean) uit parameter "Ambilight" uit array inventory
// OUTPUT
// - Nieuwe array met alleen de tv's (incl. alle onderliggende objecten) die beschikken over Ambilight
// STAPPENPLAN
// [x] Maak nieuwe array met .filter methode die tv's returned die ambilight hebben (true)
// [x] Vang de nieuwe array op een in variabel en log deze in de console

const hasAmbilight = inventory.filter((inventory) => {
    return inventory.options.ambiLight;
})
console.log(hasAmbilight);

// Opdracht 1 - Array Methoden

// Opdracht 1.D: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst.
// INPUT
// - Argument uit parameter "price" uit array inventory
// OUTPUT
// - Aangepaste array met alle tv's gesorteerd op prijs van laag naar hoog
// STAPPENPLAN
// [x] Schrijf een functie met de .sort methode die sorteert op prijs van laag naar hoog
// [x] return het resultaat van de methode in de functie zodat het in de global scope gelogt kant worden
// [x] log de functie met de return parameter inventory

function priceLowestToHighest(inventory){
     inventory.sort((a, b)=> a.price - b.price);
     return inventory;
}

console.log(priceLowestToHighest(inventory));
