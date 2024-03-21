const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const Story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
  let newStory = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

 if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll(":insertx:", name)
  } else {
    const name_list = ['Willy Wonka','Mary Poppins','Easter Bunny'];
  newStory = newStory.replaceAll("insertx:", randomValueFromArray(name_list));
 }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) = ' stone';
    const temperature =  Math.round((94 - 32) * (5/9)) = 'centigrade';
    newStory = newStory.replace("94 fahrenheit", tempperature)
    newStory = newStory.replace("300 pounds", weight)
  }

const place_list = ['The Big Four Bridge', 'The St Louis Arch','The Empire state building'};
newStory = newStory.replace(":inserty:", randomValueFromArray(place_list));
                            
const action_list = ['spontaneously combusted', 'melted like ice cream on a hot day', 'turned into a butterfly and flew away'];
newStory = newstory.replace("insertz:", randomValueFromArray(action_list));


  story.textContent = newStory;
  story.style.visibility = 'visible';
}
