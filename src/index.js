module.exports = function toReadable (number) {
    let last;
    number = String(number);
    let hundr = "hundred";

  if(number >= 100) {
    
    if(number[1] === '1'){
        last = ` ${oners(Number(number.slice(1)))}`;
    }
    else if (Number(number.slice(1)) % 100 === 0){
      last = '';
    }
    else if (Number(number.slice(1)) % 10 === 0){
      last = ` ${nextiers(Number(number.slice(1)))}`;
    }
    else if(Number(number[1]) === 0){
      last = `${nextiers(Number(number[1] + '0'))||''} ${numbers(Number(number[2])) || ''}`;
    }
    else {
        last = ` ${nextiers(Number(number[1] + '0'))||''} ${numbers(Number(number[2])) || ''}`;
    }

    return `${numbers(Number(number[0]))} ${hundr}${last}`;

  }
  else if(number >= 10){
    
    if(number[0] === '1') {
        last = `${oners(Number(number))}`;
    }
    else if (Number(number) % 10 === 0){
        last = `${nextiers(Number(number))}`;
    }
    else {
        last = `${nextiers(Number(number[0] + '0'))} ${numbers(Number(number[1]))}`;
    }

    return last;
  }
  else{
    return numbers(Number(number));
  }
}

const numbers = (number) => ({
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
})[number]

const oners = (number) => ({
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
})[number]

const nextiers = (number) => ({
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
})[number]
