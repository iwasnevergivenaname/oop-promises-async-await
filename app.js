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

function User(name) {
    this.name = name;
}

let Adam = new User("adam");
console.log(Adam.name);

function Movie(title, director, color, vibe) {
    this.title = title;
    this.director = director;
    this.color = color;
    this.vibe = vibe;
}

let royalTenebaums = new Movie("the royal tenenbaums",
    "wes anderson",
    "pale primary",
    "death but make it funny");
console.log(royalTenebaums);

let palmSprings = new Movie("palm springs",
    "not andy samberg",
    "bright",
    "groundhogs day but it's not winter");
console.log(palmSprings);

let twinPeaks = new Movie("twin peaks",
    "david lynch",
    "red and black",
    "real spoopy");
console.log(twinPeaks);