class Message {
   constructor(name, commands) {
      this.name = name;
      if (!name) {
        throw Error("Name is required.");
      }
      this.commands = commands;
    }
}

let message = new Message('Test message with two commands');

module.exports = Message;