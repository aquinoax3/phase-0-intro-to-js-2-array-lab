// Write your solution here!

//copyCats = [...cats];

//const copyCats = [...cats]

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}

function appendCat(name) {
    const copyCats = [...cats, (name)];
    return copyCats;
}

function prependCat(name) {
    const copyCats = [(name),...cats]
    return copyCats;
}

function removeLastCat() {
    return cats.slice(0, cats.length -1);
}

function removeFirstCat() {
    return cats.slice(1);
}
