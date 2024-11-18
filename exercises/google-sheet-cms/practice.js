// this function prints the data to the HTML page.
function handleData(response) {
    var sheetDataElement = document.getElementById("sheetData");
  
    response.forEach(function(item) {
      // Create a new <li> element
      var listItem = document.createElement("li");
  
      // Iterate over the keys of the object
      Object.keys(item).forEach(function(key) {
        // Create a new <div> element for each key-value pair
        var divKeyValue = document.createElement("div");
        // Set class name as the key
        divKeyValue.className = key;
        // Set innerHTML as the value
        divKeyValue.innerHTML = item[key];
        // Append the <div> element for the key-value pair to the <li> item
        listItem.appendChild(divKeyValue);
      });
  
      // Append the <li> element to the "sheetData" element
      sheetDataElement.appendChild(listItem);
    });
  }