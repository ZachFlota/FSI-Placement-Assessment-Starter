

// First, tell us your name
let yourName = "Zach Flota" // HINT: Replace this with your own name!

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle


let gbquantity = document.querySelector('#qty-gb')
let ccquantity = document.querySelector('#qty-cc')
let sugarquantity = document.querySelector('#qty-sugar')

let totalquantity = document.querySelector('#qty-total')

// Buttons
const addgb = document.querySelector('#add-gb')
const minusgb = document.querySelector('#minus-gb')

const addcc = document.querySelector('#add-cc')
const minuscc = document.querySelector('#minus-cc')

const addsugar = document.querySelector('#add-sugar')
const minussugar = document.querySelector('#minus-sugar')



// Add event listeners to increase gingerbread quantity
addgb.addEventListener('click', function(e){
    console.log('button is clicked')
    gb++
    gbquantity.textContent = gb
    totalquantity.textContent = gb + cc + sugar
})

//Add event listeners to decrease gingerbread quantity
minusgb.addEventListener('click', function(e){
    console.log('button is clicked')
    if (gb > 0) {
        gb--
        gbquantity.textContent = gb
        totalquantity.textContent = gb + cc + sugar
    }
})

//Add event listeners to increase chocolate chip quantity
addcc.addEventListener('click', function(e){
    cc++
    ccquantity.textContent = cc
    totalquantity.textContent = gb + cc + sugar
})

//Add event listeners to decrease chocolate chip quantity
minuscc.addEventListener('click', function(e){
    if (cc > 0) {
        cc--
        ccquantity.textContent = cc
        totalquantity.textContent = gb + cc + sugar
    }
})

//Add event listeners to increase sugar sprinkle quantity
addsugar.addEventListener('click', function(e){
    sugar++
    sugarquantity.textContent = sugar
    totalquantity.textContent = gb + cc + sugar
})

//Add event listener to decrease sugar sprinkle quantity
minussugar.addEventListener('click', function(e){
    if (sugar > 0){
        sugar--
        sugarquantity.textContent = sugar
        totalquantity.textContent = gb + cc + sugar
    }
})

    



