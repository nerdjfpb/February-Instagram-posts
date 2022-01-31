// Javascript one liner

// ----------------1
const redirect = (url) => (location.href = url);
redirect("https://blog.nerdjfpb.com");

// ----------------2
const isEmptyArray = (arr = !Array.isArray(arr) || arr.length === 0);
let newArr = [];
console.log(isEmptyArray(newArr));

// ----------------3
const reverseString = (str) => str.split("").reverse().join("");
reverseString("nerdjfpb");

// ----------------4
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
copyToClipboard("nerdjfpb");

// ----------------5
const randomNumberInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomNumberInRange(1, 10));

// ----------------6
const goToTop = () => window.scrollTo(0, 0);
goToTop();

// ----------------7
const toggleBool = (value) => (value = !value);
toggleBool(false);

// ----------------8
const isEven = (value) => (value % 2 === 0 ? true : false);
isEven(2);
