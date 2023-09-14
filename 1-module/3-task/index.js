function ucFirst(str) {
  if (str === '') return str;
    
  newStr = str[0].toUpperCase() + str.slice(1);
  
  return newStr;
}
