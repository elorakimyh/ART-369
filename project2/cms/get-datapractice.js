var AppScriptUrl = 'https://script.google.com/macros/s/AKfycbxyCUsYyJbDwItjG8vlB-zvojdsaCef5sxjXzc33Vv_M2yYqQIeitvMCi7sZbXLB2ahcw/exec';

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
    insertImage(item)
  });
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function insertImage(item) {
  const url = item["image-link"]
  const message = item["message"]
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
  img.src = url; 
  img.style.position = 'absolute';
  img.style.left = randomX + 'px';
  img.style.top = randomY + 'px';
  img.setAttribute('data-message', message);

  document.body.appendChild(img);

  img.addEventListener('click', function () {
    alert(message);
  });
}

function getRandomPosition(max, offset) {
  return Math.floor(Math.random() * (max - offset));
}

function sparkleEffect() {
  const sparkle = document.getElementById('sparkle');
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const randomX = getRandomPosition(viewportWidth, sparkle.offsetWidth);
  const randomY = getRandomPosition(viewportHeight, sparkle.offsetHeight);

  sparkle.style.left = `${randomX}px`;
  sparkle.style.top = `${randomY}px`;

  sparkle.style.opacity = 1;

  setTimeout(() => {
    sparkle.style.opacity = 0;
  }, 2500);
}

setInterval(sparkleEffect, 4000);


getData(AppScriptUrl);