const gimme = function(inputArray) {
    const c = Array.from(inputArray);
    c.sort((a, b) => a - b);
    const middleEle = c[1];
    return inputArray.indexOf(middleEle);
};