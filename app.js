const yargs = require("yargs");
const notes = require("./notes.js");

yargs.command({
  command: "add",
  description: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  description: "Remove note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  description: "List note",
  handler: () => {
    console.log("Listing notes");
  },
});

yargs.command({
  command: "read",
  description: "Read note",
  handler: () => {
    console.log("Read notes");
  },
});

yargs.parse();
