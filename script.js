document.addEventListener("DOMContentLoaded", function() {
    var keyCodesToShow = [
      'KeyW',
      'KeyA',
      'KeyS',
      'KeyD',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'CapsLock',
      'ShiftLeft',
      'ShiftRight',
      'Space',
      'KeyH',
      'KeyB',
      'KeyQ'
    ];
    var letters = {};
  
    document.addEventListener("keydown", function(event) {
      var keyCode = event.code;
  
      if (keyCodesToShow.includes(keyCode) && !letters[keyCode]) {
        letters[keyCode] = true;
        var letterElement = document.createElement("h1");
        letterElement.textContent = keyCode;
        letterElement.id = "letter-" + keyCode;
        document.getElementById("letter-container").appendChild(letterElement);
      }
    });
  
    document.addEventListener("keyup", function(event) {
      var keyCode = event.code;
      var letterElement = document.getElementById("letter-" + keyCode);
  
      if (letterElement) {
        letterElement.parentNode.removeChild(letterElement);
        delete letters[keyCode];
      }
    });
  });
  