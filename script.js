//Create a webpage of 16x16 grids.
//create one div in the container.
const container = document.querySelector("#container")
let numberOfDiv = 16
function createRow(numberOfDivs){
    for (let i =0;i<numberOfDivs;i++){
        const div = document.createElement("div")
        container.appendChild(div)
    }
}

createRow(numberOfDiv)


//create a row of 16 divs.
//create the grid using flexbox.
