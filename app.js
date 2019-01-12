const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");
const titleOptions = {
  describe: "Title of note",
  demand: true,
  alias: "t"
};
const bodyOptions = {
  describe: "Body of note",
  alias: "b"
};
const argv = yargs
  .command("add", "Add a new Note", {
    title: titleOptions,
    body: bodyOptions
  })
  .command("list", "List all notes")
  .command("read", "Fetch a note", {
    title: titleOptions
  })
  .command("remove", "Delete a note", {
    title: titleOptions
  })
  .help().argv;
var command = argv._[0];

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Created Note");
    notes.logNote(note);
  } else {
    console.log("Note already exists.");
  }
} else if (command === "list") {
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);

  allNotes.forEach(note => notes.logNote(note));
} else if (command === "read") {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log("Fetched Note");
    notes.logNote(note);
  } else {
    console.log("Note not found.");
  }
} else if (command === "remove") {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Note was removed" : "Note not found";
  console.log(message);
} else {
  console.log("Command not valid");
}
