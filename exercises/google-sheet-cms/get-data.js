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
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const centerText = document.querySelector('h1');
  const textRect = centerText.getBoundingClientRect();

  let randomX, randomY;
  do {
    randomX = getRandomNumber(0, viewportWidth - 40); 
    randomY = getRandomNumber(0, viewportHeight - 40); 
  } while (
    randomX >= textRect.left && randomX <= textRect.right &&
    randomY >= textRect.top && randomY <= textRect.bottom
  );

  const img = document.createElement('img');
  img.src = imageUrl;
  img.style.position = 'absolute';
  img.style.left = randomX + 'px';
  img.style.top = randomY + 'px';
  img.setAttribute('data-message', message);

  document.body.appendChild(img);

  img.addEventListener('click', function () {
    alert(message);
  });
}

getData(AppScriptUrl);



