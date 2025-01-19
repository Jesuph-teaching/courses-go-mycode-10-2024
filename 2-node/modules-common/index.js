const lodash = require("lodash");

const { MultipleOf2, MultipleOf3 } = require("./utils");
const  [n,m]=lodash.partition([34,543,26,346,3467,435,72,457,345,7],MultipleOf3)
const  [n2,m2]=lodash.partition([34,543,26,346,3467,435,72,457,345,7],MultipleOf2)
console.log(n,m)
console.log(n2,m2)