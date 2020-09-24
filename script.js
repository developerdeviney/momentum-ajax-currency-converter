const userUrl = 'https://api.exchangeratesapi.io/latest?base='

fetch(userUrl)
  .then(response => response.json())
  .then(function (data) {
  console.log(data)
})

const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]
const currency = document.getElementById('base-currency')
Object.keys(currencies).map(key => currency.add(new Option(currencies[key], key)))

const currency1 = document.getElementById('base-currency1')
Object.keys(currencies).map(key => currency1.add(new Option(currencies[key], key)))

// function Multiply() {
//   let resultEl = document.querySelector('#enter')
//   submit.addEventListner('click', ()) => {
//   var a = document.getElementById('base-currency').value;
//   var b = document.getElementById('base-currency1').value;
//   var result = parseInt(a) * parseInt(b);
//   var myResult = a * b;
//   value.value.myResult;
  
// }

{/* <input type='number' id='base-currency' name='txtA' />
<input type='number' id='base-currency1' name='txtB' />
<input type='button' name='btnMultiply' value='Submit' onclick='Multiply()' /> */}