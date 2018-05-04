var katzDeli =[];
function takeANumber(katzDeli) {
  var counter = 0;
  return counter++;
   return "Welcome, " + newName + ". You are number " + katzDeli.length + " in line.";
}

function nowServing(katzDeli) {
  if(katzDeli.length !== 0) {
    return "Currently serving " + katzDeli.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty."
  } 
 
  var lineAndNumber = [];
  
  for(var i =0; i < line.length; i++) {
    lineAndNumber.push(i+1 + ". " + line[i]);
  }
  return "The line is currently: " + lineAndNumber.join(", ");
}