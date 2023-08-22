module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.flat(1);

 let stackBox = [];
 let charactersEnd = bracketsConfig.filter((el,index) => index%2 !== 0);
 console.log(charactersEnd);
 let count1 = 0;
 let count2 = 0;
 let num = 0;
 let doublCheck = [];
 let n = '';

 for (let i = 0; i < bracketsConfig.length; i+=2){
  if (bracketsConfig[i] == bracketsConfig[i+1]){
    doublCheck.push(bracketsConfig[i]);
    console.log('doubleCheck' + doublCheck)
  }
 }

 jump: for (let i = 0; i < str.length; i++){
  num = bracketsConfig.indexOf(str[i])-1;
  if (str[i] == doublCheck[0]){
    count1++;
    num = num + 1;
    if (count1%2 !== 0){
      stackBox.push(str[i]);
      continue jump;
    }
  }
  if (str[i] == doublCheck[1]){
    count2++;
    num = num + 1;
    if (count2%2 !== 0){
      stackBox.push(str[i]);
      continue jump;
    }
  }
  if (charactersEnd.includes(str[i])){
    console.log('stackBox'+ stackBox);
    n = stackBox.pop();
    if (bracketsConfig[num] !== n){
      console.log('I here' + bracketsConfig[num], str[i], n);
      return false;
    }
  }
  else {
    stackBox.push(str[i]);
  }
 }
 console.log(stackBox, charactersEnd);
 return stackBox.length === 0;
}
