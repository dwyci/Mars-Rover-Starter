const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", function() {
  it("constructor sets position and default values for mode and generatorWatts", function() {
    const rover = new Rover(0, 'NORMAL');
    expect(rover.position).toBe(0); 
    expect(rover.mode).toBe('NORMAL'); 
    expect(rover.generatorWatts).toBe(110); 
  });
//“response returned by receiveMessage contains the name of the message”
  it("response returned by receiveMessage contains the name of the message", function(){
    const name = new Rover(0);
    expect(rover.Message).toBe('Test message with two commands');
  })
  

});

  




