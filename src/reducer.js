function capitalize(string) {
  let arr = string.split(' ');
  let newArr = arr.map(function(item){
      let word =item.slice(1);
      let result = item[0].toUpperCase();
      return `${result}${word}`
  })
  return newArr.join(' ')
}

function reducer(input, action) {
  // Ваше решение тут
  switch (action){
    case 'upperCase': console.log(string.toUpperCase());
      break;
    case 'lowerCase': console.log(string.toLowerCase());
      break;
    case 'capitalize': console.log(capitalize(string));
      break;

  }

}

module.exports = reducer;
