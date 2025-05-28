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

for(let i =0;i<numberOfDiv;i++){
    createRow(numberOfDiv)
}

//I want to create 16 rows of divs
