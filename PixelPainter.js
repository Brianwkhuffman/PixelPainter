//Pixel grid----------------------------------------
const paint = document.getElementById("pixelPainter");
const grid = document.createElement("div");
grid.className = "grid";
document.body.appendChild(grid);
function canvasMaker(depth, width) {
  for (let i = 0; i < depth; i++) {
    let row = document.createElement("div");
    row.className = "row";
    grid.appendChild(row);
    for (let j = 0; j < width; j++) {
      let pixel = document.createElement("div");
      pixel.className = "pixel";
      pixel.id = i + "," + j;
      row.appendChild(pixel);
      pixel.addEventListener("mousedown", function() {
        secretClick = 0;
        this.style.backgroundColor = penColor;
        mouse = true;
      });
      pixel.addEventListener("mouseover", function() {
        secretClick = 0;
        if (mouse === true) {
          this.style.backgroundColor = penColor;
        }
      });
      pixel.addEventListener("mouseup", function() {
        mouse = false;
        secretClick = 0;
      });
    }
  }
}
canvasMaker(22, 37);

//deafult pen color--------------------------------
let penColor = "black";

//event listener to stop drag after leaving grid
const grabGrid = document.querySelector(".grid");
grabGrid.addEventListener("mouseleave", function() {
  mouse = false;
});
//buttons----------------------

const buttonBox = document.createElement("div");
buttonBox.id = "buttonBox";
document.body.appendChild(buttonBox);
function createButton(name, buttontext) {
  let buttons = document.createElement("button");
  buttons.className = "buttons";
  buttons.id = name;
  buttons.innerHTML = buttontext;
  buttonBox.appendChild(buttons);
}
createButton("blank", "Blank Canvas");
createButton("erase", "Erase All");
createButton("save", "Save State");
createButton("load", "Load Last");
createButton("itsme", "One-Up");
const colorBox = document.createElement("div");
colorBox.id = "colorBox";
colorBox.style.backgroundColor = penColor;
buttonBox.appendChild(colorBox);

//blank/erase/load/save event listeners-----
let getBlank = document.getElementById("blank");
let allPixels = document.querySelectorAll(".pixel");
getBlank.addEventListener("click", function() {
  secretClick = 0;
  getMe.style.display = "none";
  for (let i = 0; i < allPixels.length; i++) {
    allPixels[i].style.backgroundColor = "white";
  }
});
let getErase = document.getElementById("erase");
getErase.addEventListener("click", function() {
  secretClick = 0;
  getMe.style.display = "none";
  for (let i = 0; i < allPixels.length; i++) {
    allPixels[i].style.backgroundColor = "transparent";
  }
});
let getSave = document.getElementById("save");
let saveState = [];
getSave.addEventListener("click", function() {
  saveState = [];
  secretClick = 0;
  getMe.style.display = "none";
  for (let i = 0; i < allPixels.length; i++) {
    saveState.push(allPixels[i].style.backgroundColor);
  }
});
let getLoad = document.getElementById("load");
getLoad.addEventListener("click", function() {
  secretClick = 0;
  getMe.style.display = "none";
  if (saveState !== []) {
    for (let i = 0; i < saveState.length; i++) {
      allPixels[i].style.backgroundColor = saveState[i];
    }
  } else {
    throw error;
  }
});

//color palette------------------------------------
const paletteBox = document.createElement("div");
paletteBox.className = "paletteBox";
grid.appendChild(paletteBox);
let mouse = false;

function createPens(color) {
  let pens = document.createElement("div");
  pens.className = "pens";
  pens.id = color;
  pens.style.backgroundColor = color;
  paletteBox.appendChild(pens);
  pens.addEventListener("click", function() {
    penColor = color;
    colorBox.style.backgroundColor = color;
    secretClick = 0;
    getMe.style.display = "none";
    if (penColor === "thistle") {
      let randy = Math.floor(Math.random() * 16777215).toString(16);
      pens.style.backgroundColor = randy;
      penColor = randy;
      colorBox.style.backgroundColor = randy;
    }
  });
}
createPens("transparent");
createPens("thistle");
createPens("maroon");
createPens("firebrick");
createPens("red");
createPens("deeppink");
createPens("mediumvioletred");
createPens("purple");
createPens("indigo");
createPens("navy");
createPens("blue");
createPens("dodgerblue");
createPens("aqua");

createPens("white");
createPens("black");
createPens("darkslategrey");
createPens("dimgrey");
createPens("grey");
createPens("silver");
createPens("sienna");
createPens("orange");
createPens("yellow");
createPens("darkolivegreen");
createPens("forestgreen");
createPens("chartreuse");
createPens("turquoise");

//thistle color is set for random color box------
let mysteryColor = document.getElementById("thistle");
mysteryColor.innerHTML = "?";

//transparent color box--------------------
let transparentColor = document.getElementById("transparent");
transparentColor.innerHTML = "E";

//header-------------------
let headline = document.createElement("div");
headline.id = "headline";
document.body.appendChild(headline);
let title = document.createElement("div");
title.id = "title";
title.innerHTML = "Super Pixel Painter";
headline.appendChild(title);

//???????????????????
let getMe = document.getElementById("itsme");
//sound stuff--------------------
const sound1 = new Audio();
sound1.src = "https://themushroomkingdom.net/sounds/wav/smb/smb_1-up.wav";
sound1.oncanplaythrough = function() {
  sound1.readyToRock = true;
};
sound1.onerror = function() {
  console.log("Sound file SoundFileURL.mp3 failed to load.");
};
//-----------------------------------
grid.addEventListener("click", function() {
  let x1 = document.getElementById("9,13");
  let x2 = document.getElementById("1,9");
  let x3 = document.getElementById("8,5");
  if (
    x1.style.backgroundColor === "red" &&
    x2.style.backgroundColor === "red" &&
    x3.style.backgroundColor === "red"
  ) {
    playSound();
    getMe.style.display = "block";
  } else {
    getMe.style.display = "none";
  }
});
function playSound() {
  if (sound1 && sound1.readyToRock) {
    // check for the sound and if it has loaded
    sound1.currentTime = 0; // seek to the start
    sound1.play(); // play it till it ends
  }
}
//-----------------------------------------------
let secretClick = 0;
getMe.addEventListener("click", function() {
  if (secretClick === 6) {
    for (let i = 0; i < allPixels.length; i++) {
      allPixels[i].style.backgroundColor = "white";
    }
    document.getElementById("3,15").style.backgroundColor = "red";
    document.getElementById("3,16").style.backgroundColor = "red";
    document.getElementById("3,17").style.backgroundColor = "red";
    document.getElementById("3,18").style.backgroundColor = "red";
    document.getElementById("3,19").style.backgroundColor = "red";
    document.getElementById("4,14").style.backgroundColor = "red";
    document.getElementById("4,15").style.backgroundColor = "red";
    document.getElementById("4,16").style.backgroundColor = "red";
    document.getElementById("4,17").style.backgroundColor = "red";
    document.getElementById("4,18").style.backgroundColor = "red";
    document.getElementById("4,19").style.backgroundColor = "red";
    document.getElementById("4,20").style.backgroundColor = "red";
    document.getElementById("4,21").style.backgroundColor = "red";
    document.getElementById("4,22").style.backgroundColor = "red";
    document.getElementById("5,14").style.backgroundColor = "sienna";
    document.getElementById("5,15").style.backgroundColor = "sienna";
    document.getElementById("5,16").style.backgroundColor = "sienna";
    document.getElementById("5,17").style.backgroundColor = "orange";
    document.getElementById("5,18").style.backgroundColor = "orange";
    document.getElementById("5,19").style.backgroundColor = "black";
    document.getElementById("5,20").style.backgroundColor = "orange";
    document.getElementById("6,13").style.backgroundColor = "sienna";
    document.getElementById("6,14").style.backgroundColor = "orange";
    document.getElementById("6,15").style.backgroundColor = "sienna";
    document.getElementById("6,16").style.backgroundColor = "orange";
    document.getElementById("6,17").style.backgroundColor = "orange";
    document.getElementById("6,18").style.backgroundColor = "orange";
    document.getElementById("6,19").style.backgroundColor = "black";
    document.getElementById("6,20").style.backgroundColor = "orange";
    document.getElementById("6,21").style.backgroundColor = "orange";
    document.getElementById("6,22").style.backgroundColor = "orange";
    document.getElementById("6,23").style.backgroundColor = "orange";
    document.getElementById("7,13").style.backgroundColor = "sienna";
    document.getElementById("7,14").style.backgroundColor = "orange";
    document.getElementById("7,15").style.backgroundColor = "sienna";
    document.getElementById("7,16").style.backgroundColor = "sienna";
    document.getElementById("7,17").style.backgroundColor = "orange";
    document.getElementById("7,18").style.backgroundColor = "orange";
    document.getElementById("7,19").style.backgroundColor = "orange";
    document.getElementById("7,20").style.backgroundColor = "black";
    document.getElementById("7,21").style.backgroundColor = "orange";
    document.getElementById("7,22").style.backgroundColor = "orange";
    document.getElementById("7,23").style.backgroundColor = "orange";
    document.getElementById("8,14").style.backgroundColor = "sienna";
    document.getElementById("8,15").style.backgroundColor = "orange";
    document.getElementById("8,16").style.backgroundColor = "orange";
    document.getElementById("8,17").style.backgroundColor = "orange";
    document.getElementById("8,18").style.backgroundColor = "orange";
    document.getElementById("8,19").style.backgroundColor = "black";
    document.getElementById("8,20").style.backgroundColor = "black";
    document.getElementById("8,21").style.backgroundColor = "black";
    document.getElementById("8,22").style.backgroundColor = "black";
    document.getElementById("9,15").style.backgroundColor = "orange";
    document.getElementById("9,16").style.backgroundColor = "orange";
    document.getElementById("9,17").style.backgroundColor = "orange";
    document.getElementById("9,18").style.backgroundColor = "orange";
    document.getElementById("9,19").style.backgroundColor = "orange";
    document.getElementById("9,20").style.backgroundColor = "orange";
    document.getElementById("10,14").style.backgroundColor = "red";
    document.getElementById("10,15").style.backgroundColor = "red";
    document.getElementById("10,16").style.backgroundColor = "blue";
    document.getElementById("10,17").style.backgroundColor = "red";
    document.getElementById("10,18").style.backgroundColor = "red";
    document.getElementById("10,19").style.backgroundColor = "blue";
    document.getElementById("10,20").style.backgroundColor = "red";
    document.getElementById("10,21").style.backgroundColor = "red";
    document.getElementById("11,13").style.backgroundColor = "red";
    document.getElementById("11,14").style.backgroundColor = "red";
    document.getElementById("11,15").style.backgroundColor = "red";
    document.getElementById("11,16").style.backgroundColor = "blue";
    document.getElementById("11,17").style.backgroundColor = "red";
    document.getElementById("11,18").style.backgroundColor = "red";
    document.getElementById("11,19").style.backgroundColor = "blue";
    document.getElementById("11,20").style.backgroundColor = "red";
    document.getElementById("11,21").style.backgroundColor = "red";
    document.getElementById("11,22").style.backgroundColor = "red";
    document.getElementById("12,12").style.backgroundColor = "red";
    document.getElementById("12,13").style.backgroundColor = "red";
    document.getElementById("12,14").style.backgroundColor = "red";
    document.getElementById("12,15").style.backgroundColor = "red";
    document.getElementById("12,16").style.backgroundColor = "blue";
    document.getElementById("12,17").style.backgroundColor = "blue";
    document.getElementById("12,18").style.backgroundColor = "blue";
    document.getElementById("12,19").style.backgroundColor = "blue";
    document.getElementById("12,20").style.backgroundColor = "red";
    document.getElementById("12,21").style.backgroundColor = "red";
    document.getElementById("12,22").style.backgroundColor = "red";
    document.getElementById("12,23").style.backgroundColor = "red";
    document.getElementById("13,12").style.backgroundColor = "orange";
    document.getElementById("13,13").style.backgroundColor = "orange";
    document.getElementById("13,14").style.backgroundColor = "red";
    document.getElementById("13,15").style.backgroundColor = "blue";
    document.getElementById("13,16").style.backgroundColor = "yellow";
    document.getElementById("13,17").style.backgroundColor = "blue";
    document.getElementById("13,18").style.backgroundColor = "blue";
    document.getElementById("13,19").style.backgroundColor = "yellow";
    document.getElementById("13,20").style.backgroundColor = "blue";
    document.getElementById("13,21").style.backgroundColor = "red";
    document.getElementById("13,22").style.backgroundColor = "orange";
    document.getElementById("13,23").style.backgroundColor = "orange";
    document.getElementById("14,12").style.backgroundColor = "orange";
    document.getElementById("14,13").style.backgroundColor = "orange";
    document.getElementById("14,14").style.backgroundColor = "orange";
    document.getElementById("14,15").style.backgroundColor = "blue";
    document.getElementById("14,16").style.backgroundColor = "blue";
    document.getElementById("14,17").style.backgroundColor = "blue";
    document.getElementById("14,18").style.backgroundColor = "blue";
    document.getElementById("14,19").style.backgroundColor = "blue";
    document.getElementById("14,20").style.backgroundColor = "blue";
    document.getElementById("14,21").style.backgroundColor = "orange";
    document.getElementById("14,22").style.backgroundColor = "orange";
    document.getElementById("14,23").style.backgroundColor = "orange";
    document.getElementById("15,12").style.backgroundColor = "orange";
    document.getElementById("15,13").style.backgroundColor = "orange";
    document.getElementById("15,14").style.backgroundColor = "blue";
    document.getElementById("15,15").style.backgroundColor = "blue";
    document.getElementById("15,16").style.backgroundColor = "blue";
    document.getElementById("15,17").style.backgroundColor = "blue";
    document.getElementById("15,18").style.backgroundColor = "blue";
    document.getElementById("15,19").style.backgroundColor = "blue";
    document.getElementById("15,20").style.backgroundColor = "blue";
    document.getElementById("15,21").style.backgroundColor = "blue";
    document.getElementById("15,22").style.backgroundColor = "orange";
    document.getElementById("15,23").style.backgroundColor = "orange";
    document.getElementById("16,14").style.backgroundColor = "blue";
    document.getElementById("16,15").style.backgroundColor = "blue";
    document.getElementById("16,16").style.backgroundColor = "blue";
    document.getElementById("16,19").style.backgroundColor = "blue";
    document.getElementById("16,20").style.backgroundColor = "blue";
    document.getElementById("16,21").style.backgroundColor = "blue";
    document.getElementById("17,13").style.backgroundColor = "sienna";
    document.getElementById("17,14").style.backgroundColor = "sienna";
    document.getElementById("17,15").style.backgroundColor = "sienna";
    document.getElementById("17,20").style.backgroundColor = "sienna";
    document.getElementById("17,21").style.backgroundColor = "sienna";
    document.getElementById("17,22").style.backgroundColor = "sienna";

    document.getElementById("18,12").style.backgroundColor = "sienna";
    document.getElementById("18,13").style.backgroundColor = "sienna";
    document.getElementById("18,14").style.backgroundColor = "sienna";
    document.getElementById("18,15").style.backgroundColor = "sienna";
    document.getElementById("18,20").style.backgroundColor = "sienna";
    document.getElementById("18,21").style.backgroundColor = "sienna";
    document.getElementById("18,22").style.backgroundColor = "sienna";
    document.getElementById("18,23").style.backgroundColor = "sienna";
  } else {
    secretClick++;
  }
});
