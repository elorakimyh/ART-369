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
  const url = item["image-link"];
  const message = item["message"];
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const img = document.createElement('img');
  img.src = url;
  img.style.position = 'absolute';
  img.style.visibility = 'hidden'; 
  img.setAttribute('data-message', message);

  document.body.appendChild(img);

  img.onload = () => {
    const imgRect = img.getBoundingClientRect();
    const imgWidth = imgRect.width;
    const imgHeight = imgRect.height;

    const randomX = getRandomNumber(0, viewportWidth - imgWidth); 
    const randomY = getRandomNumber(0, viewportHeight - imgHeight); 

    img.style.left = randomX + 'px';
    img.style.top = randomY + 'px';
    img.style.visibility = 'visible'; 
  };

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

