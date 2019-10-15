const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = expr.match(/.{10}/g);
    let sentence = '';
    for (let value of arr) {
        let arr1 = value.match(/.{2}/g);
        let letter = '';
        for (let i = 0; i < 5; i++) {
            let elem = parseFloat(arr1[i]);
            if (elem === 10) {
                letter += '.';
            }
            if (elem === 11) {
                letter += '-';
            }
            elem = arr1[i];
            if (elem === '**') {
                letter = " ";
                break;
            }
        }
        if (letter === ' ') {
            sentence += ' ';
        } else {
            sentence += MORSE_TABLE[letter];
        }
    }
    console.log(sentence);

    return sentence;
}


module.exports = {
    decode
}