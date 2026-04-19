// Falsy Values (only 6 of them)
// ValueDescriptionfalseliteral false 0 zero "" or '' empty stringnullintentional emptyundefinednot assignedNaNNot a Number

// Falsy Values:
// false
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// NaN


// if (0)         { } // skipped
// if ("")        { } // skipped
// if (null)      { } // skipped
// if (undefined) { } // skipped




// Truthy Values:
// if (1)           // ✅ runs
// if ("hello")     // ✅ runs
// if ([])          // ✅ runs  ← empty array is TRUTHY
// if ({})          // ✅ runs  ← empty object is TRUTHY
// if ("0")         // ✅ runs  ← string "0" is TRUTHY
// if (-1)          // ✅ runs





// // Nullish Coalescing Operator (??):  Null undefined

// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// // val1 = undefined ?? 15
// // val1 = null ?? 10 ?? 30

// console.log(val1)



// // // Terinary operator:
// // Condition ? true : false

// let a=100
// a<=80 ? console.log("Less than 80") : console.log("More than 80")