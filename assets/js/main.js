// create variables
const url = 'http://api.geonames.org/cities?north=44.1&south=-9.9&east=-22.4&west=55.2&username=demo';
const celsuisInput = document.getElementById("Fahrenheit__input");
const celsuisValue = document.getElementById("convertToCelsius")
const mapSection = document.getElementById('view_map');
let staticImageView = document.createElement('div'),
    imageView = document.createElement('img');
mapSection.append(staticImageView);
staticImageView.append(imageView);
imageView.src = './assets/img/banner.jpg';




//create events listener

celsuisValue.addEventListener('click', convertToCelsius)

//functions
// function createNode(element) {
//   return document.createElement(element);
// }

// function append(parent, el) {
// return parent.appendChild(el);
// }


// Converts temperature in Fahrenheit to Celcius
function convertToCelsius (e){
  e.preventDefault();
  
  const Celsius=((32 * celsuisInput.value - 32)*5)/9;
  console.log(Celsius);
  
 
}
