function shiftedChar(inputstring,shiftamt){
  let result = "";

  for(let i=0;i<inputstring.length;i++){
    let CharCode = inputstring.charCodeAt(i);
    let shiftedCharCOde = CharCode+shiftamt;

    if(CharCode>=97 && CharCode<=122){
      shiftedCharCOde =  ((shiftedCharCOde-97)%26+26)%26+97;
    }

    if(CharCode>=65 && CharCode<=90){
      shiftedCharCOde = ((shiftedCharCOde-65)%26+26)%26+65;
    }

    result+= String.fromCharCode(shiftedCharCOde); v

  }
  return result;
}

const inputstring = "Haiii";
console.log(shiftedChar(inputstring,2));