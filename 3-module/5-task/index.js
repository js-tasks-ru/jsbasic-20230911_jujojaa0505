function getMinMax(str) {
  let split = str.split(' ');
    let result = {};
    result.min = split.reduce((minimum, item) => {
        if (+item !== NaN && +item < minimum) {
            return +item;       
        }
        return minimum;
});
    result.max = split.reduce((maximum, item) => {
        if (+item !== NaN && +item > maximum) {
            return +item;
        }
        return maximum;
});
return result;
}
