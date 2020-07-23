const sloth = {
    toes: 2,
    moss: true,
    fast: false,
    cute: true,
    terrain: "rain forest",
    name: "belle"
}

const sloth2 = {
    name: "jazz",
    color: "brown"
}

sloth2.__proto__= sloth;

console.log(sloth);
console.log(sloth2);
console.log(sloth2.terrain);


