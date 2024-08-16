function findMissingLetter(array)
{
  for (let i = 0; i < array.length; i++){
    const currASCII = Number(array[i].charCodeAt(0));
    const expectedNextASCII = Number(currASCII + 1);
    
    if (expectedNextASCII != Number(array[i + 1].charCodeAt(0))){
        //console.log(String.fromCharCode(expectedNextASCII));
        return String.fromCharCode(expectedNextASCII);
    }
  }
  return ' ';
}

//Test cases
findMissingLetter(['a','b','c','d','f']);
findMissingLetter(['O','Q','R','S']);
