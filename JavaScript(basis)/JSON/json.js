"use strict";
// JSON //

// let user = {
//     name: "Василий Иванович",
//     age: 35
// };

// let json = JSON.stringify(user)
// console.log(json)

// let value = JSON.parse(json)
// console.log(user.name)


// let room = {
//     number: 23
// };

// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//     place: room
// };

// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert(JSON.stringify(meetup, function replacer(key, value) {
//     alert(`${key}: ${value}`);
//     return (key != "" && value === meetup) ? undefined : value

// }))