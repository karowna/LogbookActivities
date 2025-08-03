// Prompt the user to enter three names and push/store them into an array
let names = []; // This array is constantly being updated so I use let
for (let namesCounter = 0; namesCounter < 3; namesCounter++) {
    let name = prompt("Enter name " + (namesCounter + 1) + ":");
    names.push(name);
}



for (let index = 0; index < names.length; index++) {
    document.write("Hello " + names[index] + ", there are " + names[index].length + " letters in your name.<br>");
}



// Sort names alphabetically and show in an alert box
let sortedNames = [...names].sort();
let alphabeticalMessage = "Here is the list of names in alphabetical order:\n";
for (let index = 0; index < sortedNames.length; index++) {
    alphabeticalMessage += sortedNames[index] + "\n";
}
alert(alphabeticalMessage);




// Sort names in reverse alphabetical order and show in an alert box
let reverseSortedNames = [...sortedNames].reverse();
let reverseMessage = "Here is the list of names in reverse alphabetical order:\n";
for (let index = 0; index < reverseSortedNames.length; index++) {
    reverseMessage += reverseSortedNames[index] + "\n";
}
alert(reverseMessage);
