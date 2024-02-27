const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", function() {
  it("constructor sets position and default values for mode and generatorWatts", function() {
    const rover = new Rover(98382);
    expect(rover.position).toBe(98382); 
    expect(rover.mode).toBe('NORMAL'); 
    expect(rover.generatorWatts).toBe(110); 
  });

  it("response returned by receiveMessage contains the name of the message", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test 8 name', commands);
    let rover = new Rover(98382);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);
    expect(response.message).toBe('Test 8 name');
})

it('response returned by receiveMessage includes two results if two commands are sent in the message', function(){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message = new Message('Test 8 name', commands);
  let rover = new Rover(98382);    // Passes 98382 as the rover's position.
  let response = rover.receiveMessage(message);
  expect(response.results.length).toBe(2);
})

it('responds correctly to the status check command', function(){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message = new Message('Test 8 name', commands);
  let rover = new Rover(98382);    // Passes 98382 as the rover's position.
  let response = rover.receiveMessage(message);
  expect(response.results[1].roverStatus).toEqual({ position: 98382, mode: 'LOW_POWER', generatorWatts: 110 });
})

it('responds correctly to the mode change command', function(){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message = new Message('Test 8 name', commands);
  let rover = new Rover(98382);    // Passes 98382 as the rover's position.
  let response = rover.receiveMessage(message);
  let modeChangeResult = response.results.find(result => result.completed && result.roverStatus);

  expect(modeChangeResult.roverStatus.mode).toBe('LOW_POWER');
});

});

  




