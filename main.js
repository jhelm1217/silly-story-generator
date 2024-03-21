const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let newStory = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

const insertx = [
"Mary Poppins",
"Willy Wonka",
"Easter Bunny",
]

const inserty = [
"The Big Four Bridge",
"The St Louis Arch",
"The Empire State Building"
]

const insertz = [
"spontaneously combusted",
"melted like ice cream on a hot day",
"turned into a butterfly and flew away"
]

randomize.addEventListener('click', result)

function result() {

    let newStory = storyText;
    let xItem = randomValueFromArray(insertx);
    let yItem = randomValueFromArray(inserty);
    let zItem = randomValueFromArray(insertz);
    newStory = newStory.replaceAll(':insertx:', xItem).replaceAll(':inserty:', yItem).replaceAll(':insertz:', zItem)

   if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name)

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stone ';
    const temperature =  Math.round((94-32) * (5/9)) + ' centigrade ';
    newStory = newStory.replaceAll('94 fahrenheit', temperature) 
    newStory = newStory.replaceAll('300 pounds', weight)
  }



  story.textContent = newStory;
  story.style.visibility = 'visible';
}
