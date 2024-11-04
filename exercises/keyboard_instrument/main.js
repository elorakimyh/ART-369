document.getElementById('submitBtn').addEventListener('click', function() {

  const inputName = document.getElementById('textInput').value.toLowerCase();

  if (inputName === 'alvin') {
    document.documentElement.style.backgroundImage = "url('unicorn.jpg')";  
  } else if (inputName === 'kris') {
    document.documentElement.style.backgroundImage = "url('photography.jpg')";  
  } else if (inputName === 'addison') {
    document.documentElement.style.backgroundImage = "url('random.jpg')";  
  } else if (inputName === 'chris') {
    document.documentElement.style.backgroundImage = "url('gaming.jpg')";  
  } else if (inputName === 'david') {
    document.documentElement.style.backgroundImage = "url('laughing.jpg')";
  } else if (inputName === 'ellie') {
    document.documentElement.style.backgroundImage = "url('memories.jpg')";  
  } else if (inputName === 'emma') {
    document.documentElement.style.backgroundImage = "url('hawaii.jpg')";  
  } else if (inputName === 'elora') {
    document.documentElement.style.backgroundImage = "url('hy.jpg')";  
  } else if (inputName === 'jaiden') {
    document.documentElement.style.backgroundImage = "url('books.jpg')";  
  } else if (inputName === 'wendy') {
    document.documentElement.style.backgroundImage = "url('purple.jpg')";  
  } else if (inputName === 'julian') {
    document.documentElement.style.backgroundImage = "url('rapbars.jpg')";  
  } else if (inputName === 'zack') {
    document.documentElement.style.backgroundImage = "url('tech.jpg')";  
  } else if (inputName === 'juliette') {
    document.documentElement.style.backgroundImage = "url('dogchasingsquirrel.jpg')";  
  } else if (inputName === 'mateo') {
    document.documentElement.style.backgroundImage = "url('sterling.jpg')";  
  } else if (inputName === 'theo') {
    document.documentElement.style.backgroundImage = "url('random2.jpg')";  
  } else {
    document.documentElement.style.backgroundImage = "url('funny.jpg')";  
  }
});