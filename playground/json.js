// var obj = {
//   name: "Evan"
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Andrew", "age":37}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require("fs");

var originalNote = {
  title: "Some title",
  body: "Some body content"
};

var orignialNoteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json", orignialNoteString);

var noteString = fs.readFileSync("notes.json");
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
