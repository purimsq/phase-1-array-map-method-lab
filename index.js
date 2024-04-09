const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  function modify(value){
    let arr = value.split(" ");
    let modifyArr = arr.map(modifyTwo);
    function modifyTwo(value){
      return value.charAt(0).toUpperCase() + value.slice(1);
    };
    return modifyArr.join(" ");
  };
  return tutorials.map(modify);
}
