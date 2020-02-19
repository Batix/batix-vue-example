var randomByte = function () {
    return Math.floor(Math.random() * 255);
}

var randomColor = function () {
    // eslint-disable-next-line no-undef
    return `rgb(${randomByte()}, ${randomByte()}, ${randomByte()})`;
}

export default [
    { id: 1, name: "Maschine 1", capacity: 100, color: randomColor() },
    { id: 2, name: "Maschine 2", capacity: 90, color: randomColor() },
    { id: 3, name: "Maschine 3", capacity: 120, color: randomColor() },
    { id: 4, name: "Maschine 4", capacity: 150, color: randomColor() },
    { id: 5, name: "Maschine 5", capacity: 80, color: randomColor() },
    { id: 6, name: "Maschine 6", capacity: 10, color: randomColor() },
    { id: 7, name: "Maschine 7", capacity: 200, color: randomColor() },
    { id: 8, name: "Maschine 8", capacity: 90, color: randomColor() },
    { id: 9, name: "Maschine 9", capacity: 95, color: randomColor() },
    { id: 10, name: "Maschine 10", capacity: 100, color: randomColor() }
]
