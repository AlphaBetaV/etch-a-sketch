var container = document.querySelector('#container')

var boxNumbers = 16

var height = 100/boxNumbers
var width = 100/boxNumbers

function lineMaker() {
    let newDiv = document.createElement('div')
    newDiv.className = 'rows'
    newDiv.style.height = `${height}%`
    newDiv.style.width = 100%
    container.appendChild(newDiv)
}

function boxMaker(rowNumber) {
    let rowSelected = document.getElementsByClassName('rows')
    let newDiv = document.createElement('div')
    newDiv.className = 'box'
    newDiv.style.width = `${width}%`
    rowSelected[rowNumber].appendChild(newDiv)
}

function blackBox(e) {
    this.style.backgroundColor = 'black'
}

for (let x = 0; x < boxNumbers; x++) {
    lineMaker()
    for (let y = 0; y < boxNumbers; y++) {
        boxMaker(x)
    }
}

var boxes = document.querySelectorAll('.box')

boxes.forEach(box => box.addEventListener('mouseover', blackBox))

// create button that submits how many boxes there will be
// deletes any existing boxes with the selection
// refactor code to only call the line and box makers once the amount of boxes has been provided
// makes the new boxes

// create button that changes the background color of boxes back to white, but does not reset amount of boxes
// add eventlister button submission or click
// boxes.forEach(box => box.style.backgroundColor = 'white') <<< could be the code for this simple function which is called