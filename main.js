let data = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

function isPrime(num) {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return false;
  return true;
}
function doubleNumbers(data){
  let doubledData = []
  for (let i = 0; i < data.length; i++){
    doubledData.push(data[i] * 2)
  }
  return doubledData
}
function filterPrime(data){
  let primeNumbers = []
  for (let i =0; i < data.length; i++){
    if (isPrime(data[i]) === true){
      primeNumbers.push(data[i])
    }
  }
  return primeNumbers
}
function convertArrayPrime(data){
 let convertedArray = []
  let newElement = []
  newElement.push(filterPrime(data))
  newElement.forEach((number) =>{
    convertedArray.push('number' + number)
  })
  return convertedArray
}
//console.log(doubleNumbers(data))
//console.log(filterPrime(data).sort((a, b) => a - b))
console.log(convertArrayPrime(data))