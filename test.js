const price = require('./').Price;

console.log(price.formatCurrency(1000000.0282))

console.log(price.unformatCurrency('1,000,000.0282'))