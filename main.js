const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :xinsert: went for a walk. When they got to :yinsert:, they stared in horror for a few moments, then :zinsert: Bob saw the whole thing, but was not surprised —:xinsert: weighs 300 pounds, and it was a hot day.";
let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

console.log(storyText)

function result() {

let newStory = storyText;


var xItem = randomValuefromArray(insertX);
var yItem = randomValuefromArray(insertY);
var zItem = randomValuefromArray(insertZ);

let newStory = newStory.replace(":xinsert:",xItem);
let newStory = newStory.replace(":yinsert:",yItem);
let newStory = newStory.replace(":zinsert:",zItem);
let newStory = newStory.replace(":xinsert:",xItem);



  if(customName.value !== '') {
    const name = customName.value;
    let newStory = newStory.replace("Bob",name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stone";
    const temperature =  Math.round((94-32)*(5/9)) + "centigrade";
    let newStory = newStory.replace("94 fahrenheit",temperature);
    let newStory = newStory.replace("300 lbs", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
