const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


const insertX = [
'Willy Wonka'
'Mary Poppins'
'Easter Bunny'
];

const insertY = [
'The Big Four Bridge'
'The St Louis Arch'
'The Empire state building'
};

const insertZ = [
'spontaneously combusted'
'melted like ice cream on a hot day'
'turned into a butterfly and flew away'
];

//story text //
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

// story generator //
randomize.addEventListener('click', result);


function result() {
  xItem = randomValueFromArray(insertX);
  yItem = randomValueFromArray(insertY);
  zItem = randomValueFromArray(insertZ); newStory = storyText;
  newStory = newStory.replaceAll(":insertx:, xItem);
  newStory = newStory.replace(":inserty:",yItem);
  newStory = newStory.replace(":insertz:", zItem);

  
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name)
  }
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) = ' stone';
    const temperature =  Math.round((94 - 32) * (5/9)) = 'centigrade'
    newStory = newStory.replace("94 fahrenheit", tempperature)
    newStory = newStory.replace("300 pounds", weight)
  }


  story.textContent = newStory;
  story.style.visibility = 'visible';
}
