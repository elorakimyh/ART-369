var AppScriptUrl = 'https://script.google.com/macros/s/AKfycbw2-eXhltrVeGbaIYSZ_7i348QPwkF6X7em-oFRPelFmXby0a-3fGxnTnp2lh-EZSw/exec';

function getData(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        handleData(response);
        console.log(response);
      } else {
        console.error('Request failed:', xhr.status);
      }
    }
  };
  xhr.send();
}

function handleData(response) {
  var sheetDataElement = document.getElementById("sheetData");

  response.forEach(function(item) {
    var listItem = document.createElement("div");
    var message = " ";
    Object.keys(item).forEach(function(key, index, array) {
      message += item[key];
      if (index < array.length - 1) {
        message += ", "; 
      }
    });    
    insertRandomImage('heart.png', message);
    sheetDataElement.appendChild(listItem);
  });
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function insertRandomImage(imageUrl, message) {
  // Get the dimensions of the viewport
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Get the dimensions and position of the centered text (h1 element)
  const centerText = document.querySelector('h1');
  const textRect = centerText.getBoundingClientRect();

  // Generate random coordinates while ensuring the image doesn't overlap the centered text
  let randomX, randomY;
  do {
    randomX = getRandomNumber(0, viewportWidth - 40); // Subtract image width (30px)
    randomY = getRandomNumber(0, viewportHeight - 40); // Subtract image height (30px)
  } while (
    randomX >= textRect.left && randomX <= textRect.right &&
    randomY >= textRect.top && randomY <= textRect.bottom
  );

  // Create the image element
  const img = document.createElement('img');
  img.src = imageUrl;
  img.style.position = 'absolute';
  img.style.left = randomX + 'px';
  img.style.top = randomY + 'px';
  img.setAttribute('data-message', message);

  // Append the image to the body
  document.body.appendChild(img);

  // Add click event listener for popup message
  img.addEventListener('click', function () {
    alert(message);
  });
}

getData(AppScriptUrl);



