// create variables
const celsuisInput = document.getElementById("Fahrenheit__input");
const celsuisValue = document.getElementById("convertToCelsius")

//create events listener

celsuisValue.addEventListener('click', convertToCelsius)




// Converts temperature in Fahrenheit to Celcius
function convertToCelsius (e){
  e.preventDefault();
  
  const Celsius=((32 * celsuisInput.value - 32)*5)/9;
  console.log(Celsius);
  
 
}
