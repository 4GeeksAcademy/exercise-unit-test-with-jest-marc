let oneEuroIs = {
  "JPY": 156.5,
  "USD": 1.07,
  "GBP": 0.87
}

const fromEuroToDollar = function(valueInEuro) {
  return valueInEuro * oneEuroIs["USD"];
}

const fromDollarToYen = function(dollar) {
  let euros = dollar / oneEuroIs["USD"];
  return euros * oneEuroIs["JPY"];
}

const fromYenToPound = function(yen) {
  let euros = yen / oneEuroIs["JPY"];
  return euros * oneEuroIs["GBP"];
}

const sum = (a,b) => {
  return a + b
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }