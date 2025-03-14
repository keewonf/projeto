const colorInputOne = document.querySelector('#favcolor')
const colorInputTwo = document.querySelector('#favcolorTwo')
const html = document.documentElement
var rootElement = document.querySelector(':root');


function getStyle() {
  var rootStyle = getComputedStyle(rootElement)

  console.log("The value of --blue is: " + rootStyle.getPropertyValue('--stroke-color'))
}

export default function changingStyles(){

  colorInputOne.addEventListener("input", function() {
    let colorSelected = colorInputOne.value
    function setStyle() {
    rootElement.style.setProperty('--stroke-color', colorSelected)
    }
  
    setStyle()
  
  })

  colorInputTwo.addEventListener("input", function() {
    let colorSelected = colorInputTwo.value
  
    function setStyle() {
      rootElement.style.setProperty('--text-color', colorSelected)
    }
  
    setStyle()
  })
}


/*
var hexTransform
function hexTorgb(hex) {
  hexTransform = ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
  console.log(hexTransform)
  return hexTransform
}


function getRGBColor(that){
 let thatv = that; 
 let rgbV = hexTorgb(thatv);

 
 console.log(thatv)
 console.log(rgbV);
 
 colorInput.innerHTML = rgbV;
}

hexTorgb('#ff0000')
*/
