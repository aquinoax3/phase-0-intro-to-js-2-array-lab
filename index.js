// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
      
    return cats.push(name); // adds/appends element to the back of an array
}

function destructivelyPrependCat(name) {
    return cats.unshift(name); // adds element to the front of an array
}

function destructivelyRemoveLastCat() {
    return cats.pop(); //removes element from the back of an array
}

function destructivelyRemoveFirstCat() {
    return cats.shift(); //removes element from the front of an array

}



function appendCat(name) {
    
    const newCats = [...cats, name];
    
    return newCats;
}

function prependCat(name) {
    const newCats = [name, ...cats]

    return newCats;

}


function removeLastCat() {
    return cats.slice(0,cats.length -1)
}

function removeFirstCat() {
    return cats.slice(1)
}