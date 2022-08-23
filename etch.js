var container = document.querySelector('#container')

var boxNumbers = 16

var height = 100/boxNumbers
var width = 100/boxNumbers
var boxes = document.querySelectorAll('.box')

const resetter = document.querySelector('#reset')
const resizer = document.querySelector('#resizer')


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

function trueBoxerMaker() {
    for (let x = 0; x < boxNumbers; x++) {
        lineMaker()
        for (let y = 0; y < boxNumbers; y++) {
            boxMaker(x)
        }
    }
}

function boxRemover() {
    let child = container.firstElementChild
    while(child) {
        container.removeChild(child)
        child = container.firstElementChild
    }
}

function numberSetter() {
    boxNumbers = document.querySelector('input').value
    height = 100/boxNumbers
    width = 100/boxNumbers
}

function boxRemover() {
    let child = container.firstElementChild
    while(child) {
        container.removeChild(child)
        child = container.firstElementChild
    }
}

function totalBoxMaker() {
    boxRemover()
    numberSetter()
    trueBoxerMaker()
    boxes = document.querySelectorAll('.box')
    boxes.forEach(box => box.addEventListener('mouseover', blackBox))

}

resetter.addEventListener('click', () => {
    boxes.forEach(box => box.style.backgroundColor = 'white')
})

resizer.addEventListener('keyup', () => {
    if (document.querySelector('input').value >= 1 && document.querySelector('input').value <= 100) {
        totalBoxMaker()
    }
})

// create button that submits how many boxes there will be
// deletes any existing boxes with the selection
// refactor code to only call the line and box makers once the amount of boxes has been provided
// makes the new boxes

// create button that changes the background color of boxes back to white, but does not reset amount of boxes
// add eventlister button submission or click
// boxes.forEach(box => box.style.backgroundColor = 'white') <<< could be the code for this simple function which is called


// use this when destroying nodes
//function removeAllChildNodes(parent) {
//    while (parent.firstChild) {
//        parent.removeChild(parent.firstChild);
//    }
//}
//const container = document.querySelector('#container');
//removeAllChildNodes(container);

//box creator initial
//for (let x = 0; x < boxNumbers; x++) {
//    lineMaker()
//    for (let y = 0; y < boxNumbers; y++) {
//        boxMaker(x)
//    }
//}


/*


function totalBoxMaker() {
    boxRemover()
    numberSetter()
    trueBoxerMaker()
}
*/

/*

function trueBoxerMaker() {
    for (let x = 0; x < boxNumbers; x++)
        lineMaker()
        for (let y = 0; y < boxNumbers; y++) {
            boxMaker(x)
        }
}

function boxRemover() {
    let child = container.firstElementChild
    while(child) {
        container.removeChild(child)
        child = container.firstElementChild
    }
}

function numberSetter() {
    boxNumbers = document.querySelector('input').value
    height = 100/boxNumbers
    width = 100/boxNumbers
}


function totalBoxMaker() {
    boxRemover()
    numberSetter()
    trueBoxerMaker()
}

*/
