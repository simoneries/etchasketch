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
        div.setAttribute("id","tile")
        row.appendChild(div)
    }  
}

function createGrid(){
    for(let i =0;i<numberOfDiv;i++){
        createRow(numberOfDiv)
    }
}
let grid = createGrid()
hoverOnTiles()

//i want to set up a hoover effect on my tiles = when i pass on a tile, it will change color.
function hoverOnTiles(){
    //first i need to pass in a query selector to select the div. 
    //i need to return all the 
    const tileList=document.querySelectorAll("#tile");
    const tileArray=[...tileList]
    //I pass an event listener to each div
    tileArray.forEach(function(tile){
        tile.addEventListener("mouseover",e=>changeTileColor(e,"blue"))
    })

}

function changeTileColor(e,color){
    e.target.style.backgroundColor=color
}



//next i want to set an event listener that will check if i hover on a div.
