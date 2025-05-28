//Create a webpage of 16x16 grids.
//create one div in the container.
const container = document.querySelector("#container")
let numberOfDiv = 16
function createRow(numberOfDivs){
    const row = document.createElement("div")
    row.setAttribute("id","row")
    container.appendChild(row)
    for (let i =0;i<numberOfDivs;i++){
        const div = document.createElement("div")
        row.appendChild(div)
    }  
}


createRow(numberOfDiv)




//create a row of 16 divs.
//create the grid using flexbox.
