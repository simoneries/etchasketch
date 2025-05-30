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

function createGrid(numberOfDiv){
    for(let i =0;i<numberOfDiv;i++){
        createRow(numberOfDiv)
    }
}
createGrid(16)
hoverOnTiles()

//i want to set up a hoover effect on my tiles = when i pass on a tile, it will change color.
function hoverOnTiles(){
    //first i need to pass in a query selector to select the div. 
    //i need to return all the 
    const tileList=document.querySelectorAll("#tile");
    const tileArray=[...tileList]
    //I pass an event listener to each div
    tileArray.forEach(function(tile){
        const color = getNewColor()
        tile.addEventListener("mouseover",e=>changeTileColor(e,color))
    })

}

function changeTileColor(e,color){
    e.target.style.backgroundColor=color
}

//pass a function to a button

const button = document.querySelector("button")
button.addEventListener("click",()=>getNewGrid())

// Create a function that will ask the user for the number of tiles he wants and return it.
// Now my issue remains thatthe old number of tile remains --> 

function getNewGrid(){
    let numberOfTiles= Number(prompt("How many tiles would you like to have?"))
    //Tiles should not be too big
    while (numberOfTiles>70){
        numberOfTiles= Number(prompt("That number cannot be bigger than 70. Please choose again !"))
    }
    while (numberOfTiles<=0){
        numberOfTiles= Number(prompt("This is not a valid number ! Please choose again !"))
    }
    const childDivs=container.querySelectorAll("div")
    childDivs.forEach(div=>div.remove())
    createGrid(numberOfTiles)
    hoverOnTiles()
}

//I want to change the color of the tiles each time there is a new interaction

function getRandomNumber(min,max){
    //I want to return a number between 0 and 255.
    return Math.floor(Math.random()*(max-min+1)+min)
}
function getNewColor(){
    const red = getRandomNumber(0,255)
    const blue=getRandomNumber(0,255)
    const green = getRandomNumber(0,255)
    return `rgb(${red},${blue},${green})`
    //RGB code is composed of three values going from 0 to 255. 
}




