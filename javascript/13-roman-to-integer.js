
function romanToInt(s) {
    let soma = 0;
    for (let i = 0; i < s.length; i++) {
        switch(s[i]) {
  case 'I':
  if(s[i+1]=='V' || s[i+1]=='X'){
    soma = soma + 0;
  } else {
    soma = soma + 1; }
    break;
  case 'V':
  if (s[i-1]=='I'){
soma = soma + 4;
  }else {
    soma = soma + 5;}
    break;
     case 'X':
      if (s[i-1]=='I'){
soma = soma + 9;
  }else {
     if(s[i+1]=='L' || s[i+1]=='C'){
    soma = soma + 0;
  } else {
   soma = soma + 10;}}
    break;
     case 'L':
      if (s[i-1]=='X'){
soma = soma + 40;
  }else {
   soma = soma + 50;}
    break;
     case 'C':
      if (s[i-1]=='X'){
soma = soma + 90;
  }else {
    if(s[i+1]=='D' || s[i+1]=='M'){
    soma = soma + 0;
  } else {
   soma = soma + 100;}}
    break;
     case 'D':
 if (s[i-1]=='C'){
soma = soma + 400;
  }else {
  soma = soma + 500;}
    break;
     case 'M':
     if (s[i-1]=='C'){
soma = soma + 900;
  }else {
  soma = soma + 1000;}
    break;
  default:
   console.log("Error")
}
    }
    return soma;
};

let s = "XVII";
romanToInt(s);