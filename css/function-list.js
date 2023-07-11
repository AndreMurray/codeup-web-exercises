// How to get all letters in the alphabet
function getAllAlphabetLetters() {
    const letters = [];

    for (let i = 65; i <= 90; i++) {
        letters.push(String.fromCharCode(i));
    }

    for (let i = 97; i <= 122; i++) {
        letters.push(String.fromCharCode(i));
    }

    return letters;
}

const alphabet = getAllAlphabetLetters();
console.log(alphabet);


// How to check if sentence is a Pangram
function isPangram(sentence) {
    const lowerCaseSentence = sentence.toLowerCase();
    const cleanSentence = lowerCaseSentence.replace(/[^a-z]/g, '');
    const letters = new Set(cleanSentence);
    return letters.size === 26;
}
function isPangram1(string){
    var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'];
    string = string.toLowerCase();
    for(var i = 0; i < abc.length; i++) { if ((string.indexOf(abc[i])  === -1)) return false; }
    return true;
}

// ___________________________________________________________

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
    const concatenatedString = s1 + s2;
    const distinctCharacters = [...new Set(concatenatedString)];
    const sortedDistinctString = distinctCharacters.sort().join("");
    return sortedDistinctString;
}

const s1 = "abcdef";
const s2 = "xyzabc";
const result = longest(s1, s2);

console.log(result);

// _________________

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddleCharacter(word) {
    const length = word.length;
    const middleIndex = Math.floor(length / 2);

    if (length % 2 === 0) {
        return word.slice(middleIndex - 1, middleIndex + 1);
    } else {
        return word[middleIndex];
    }
}

const getMiddle = (s) => {
    return s[Math.floor(s.length/2)]
}

function test(text) {
    var text_len = text.length;
    if (text_len % 2 != 0)
    {
        let start = (text_len - 1) / 2;
        return text.slice(start, start + 1)
    }
    else
    {
        let start = text_len / 2 - 1;
        return text.slice(start, start + 2);
    }
}