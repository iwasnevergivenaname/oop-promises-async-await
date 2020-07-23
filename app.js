// const sloth = {
//     toes: 2,
//     moss: true,
//     fast: false,
//     cute: true,
//     terrain: "rain forest",
//     name: "belle"
// }
//
// const sloth2 = {
//     name: "jazz",
//     color: "brown"
// }
//
// sloth2.__proto__= sloth;
//
// console.log(sloth);
// console.log(sloth2);
// console.log(sloth2.terrain);
//
// function User(name) {
//     this.name = name;
// }
//
// let Adam = new User("adam");
// console.log(Adam.name);
//
// class Movie {
//     constructor(title, director, color, vibe) {
//         this.title = title;
//         this.director = director;
//         this.color = color;
//         this.vibe = vibe;
//         }
//     intro() {
//         console.log("hi i'm " + this.director + " and i directed " + this.title +
//             " which uses a lot of " + this.color + " colors to make something that is like " +
//             this.vibe);
//     }
// }
//
// let royalTenebaums = new Movie("the royal tenenbaums",
//     "wes anderson",
//     "pale primary",
//     "death but make it funny");
// royalTenebaums.intro();
//
// let palmSprings = new Movie("palm springs",
//     "not andy samberg",
//     "bright",
//     "groundhogs day but it's not winter");
// palmSprings.intro();
//
// let twinPeaks = new Movie("twin peaks",
//     "david lynch",
//     "red and black",
//     "real spoopy");
// twinPeaks.intro();
//
// class GitHubProfile {
//     constructor(username, name, url) {
//         this.username = username;
//         this.name = name;
//         this.url = url;
//     }
//     intro() {
//         console.log(`my name is ${this.name} and i chose
//         ${this.username} because i like the office and you can
//         find my repos at ${this.url}`);
//     }
// }
//
// fetch("https://api.github.com/users/iwasnevergivenaname")
// .then(res => {
//     return res.json();
// })
// .then(data => {
//     console.log(data);
//     let githubURL = data.url;
//     let githubUserName = data.login;
//     let githubName = data.name;
//
//     let han = new GitHubProfile(githubUserName, githubName, githubURL);
//     console.log(han.intro());
// });


let isMomHappy = true;
//
// // Promise
// let willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             let phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled
//         } else {
//             let reason = new Error('mom is not happy');
//             reject(reason); // reject
//         }
//
//     }
// );

let willIGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
            let phone = {
                brand: 'iPhone',
                color: 'white'
            };
            resolve(phone); // fulfilled
        } else {
            let reason = new Error('mom is not happy');
            reject(reason); // reject
        }
})



willIGetNewPhone.then(result => [
    console.log(result)
])