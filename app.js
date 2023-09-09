const yargs = require("yargs");

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
  handler: function (argv) {
    console.log("Title: " + argv.title);
    console.log("Title: " + argv.body);
  },
});

yargs.command({
  command: "remove",
  description: "Remove note",
  handler: function () {
    console.log("Removing note");
  },
});

yargs.command({
  command: "list",
  description: "List note",
  handler: function () {
    console.log("Listing notes");
  },
});

yargs.command({
  command: "read",
  description: "Read note",
  handler: function () {
    console.log("Read notes");
  },
});

yargs.parse();
