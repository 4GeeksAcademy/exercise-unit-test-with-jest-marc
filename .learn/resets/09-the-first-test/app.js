const sum = (a,b)=> {
    return a + b
}

console.log(sum(7,3))


let oneEuroIs = {
  "JPY": 156.5,
  "USD": 1.07,
  "GBP": 0.87
}

// USD → JPY
function fromDollarToYen(dollars) {
  let euros = dollars / oneEuroIs["USD"];
  let yenes = euros * oneEuroIs["JPY"];
  return yenes;
}

// EUR → USD
function fromEuroToDollar(euros) {
  return euros * oneEuroIs["USD"];
}

// JPY → GBP
function fromYenToPound(yen) {
  let euros = yen / oneEuroIs["JPY"];
  let pounds = euros * oneEuroIs["GBP"];
  return pounds;
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };
module.exports = { sum };