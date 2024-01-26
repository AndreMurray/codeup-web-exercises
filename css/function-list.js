// // How to get all letters in the alphabet
// function getAllAlphabetLetters() {
//     const letters = [];
//
//     for (let i = 65; i <= 90; i++) {
//         letters.push(String.fromCharCode(i));
//     }
//
//     for (let i = 97; i <= 122; i++) {
//         letters.push(String.fromCharCode(i));
//     }
//
//     return letters;
// }
//
// const alphabet = getAllAlphabetLetters();
// console.log(alphabet);
//
//
// // How to check if sentence is a Pangram
// function isPangram(sentence) {
//     const lowerCaseSentence = sentence.toLowerCase();
//     const cleanSentence = lowerCaseSentence.replace(/[^a-z]/g, '');
//     const letters = new Set(cleanSentence);
//     return letters.size === 26;
// }
// function isPangram1(string){
//     var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
//         'v', 'w', 'x', 'y', 'z'];
//     string = string.toLowerCase();
//     for(var i = 0; i < abc.length; i++) { if ((string.indexOf(abc[i])  === -1)) return false; }
//     return true;
// }
//
// // ___________________________________________________________
//
// // Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// function longest(s1, s2) {
//     const concatenatedString = s1 + s2;
//     const distinctCharacters = [...new Set(concatenatedString)];
//     const sortedDistinctString = distinctCharacters.sort().join("");
//     return sortedDistinctString;
// }
//
// const s1 = "abcdef";
// const s2 = "xyzabc";
// const result = longest(s1, s2);
//
// console.log(result);
//
// // _________________
//
// // You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//
// function getMiddleCharacter(word) {
//     const length = word.length;
//     const middleIndex = Math.floor(length / 2);
//
//     if (length % 2 === 0) {
//         return word.slice(middleIndex - 1, middleIndex + 1);
//     } else {
//         return word[middleIndex];
//     }
// }
//
// const getMiddle = (s) => {
//     return s[Math.floor(s.length/2)]
// }
//
// function test(text) {
//     var text_len = text.length;
//     if (text_len % 2 != 0)
//     {
//         let start = (text_len - 1) / 2;
//         return text.slice(start, start + 1)
//     }
//     else
//     {
//         let start = text_len / 2 - 1;
//         return text.slice(start, start + 2);
//     }
// }
//
// // Given a string s, find the length of the longest
// // substring
// // without repeating characters.
//
// function lengthOfLongestSubstring(s) {
//     let maxLength = 0;
//     let left = 0;
//     const charIndexMap = new Map();
//
//     for (let right = 0; right < s.length; right++) {
//         const currentChar = s[right];
//
//         if (charIndexMap.has(currentChar)) {
//             left = Math.max(left, charIndexMap.get(currentChar) + 1);
//         }
//
//         charIndexMap.set(currentChar, right);
//         maxLength = Math.max(maxLength, right - left + 1);
//     }
//
//     return maxLength;
// }
//
// const inputString = "abcabcbb";
// const result = lengthOfLongestSubstring(inputString);
// console.log(result); // Output: 3 (the longest substring without repeating characters is "abc")
//
// // Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// //
// //     An input string is valid if:
//
// function isValid(s) {
//     const stack = [];
//     const brackets = {
//         '(': ')',
//         '{': '}',
//         '[': ']',
//     };
//
//     for (const char of s) {
//         if (brackets[char]) {
//             // If it's an opening bracket, push it to the stack
//             stack.push(char);
//         } else {
//             // If it's a closing bracket, check if it matches the top of the stack
//             const lastBracket = stack.pop();
//             if (brackets[lastBracket] !== char) {
//                 // If it doesn't match, the input string is not valid
//                 return false;
//             }
//         }
//     }
//
//     // The input string is valid if the stack is empty at the end
//     return stack.length === 0;
// }
//
// const inputString = "{[()]}";
// console.log(isValid(inputString)); // Output: true (the input string is valid)
//
// // Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// //
// //     The overall run time complexity should be O(log (m+n)).
//
// function findMedianSortedArrays(nums1, nums2) {
//     if (nums1.length > nums2.length) {
//         [nums1, nums2] = [nums2, nums1]; // Ensure nums1 is the shorter array
//     }
//
//     const m = nums1.length;
//     const n = nums2.length;
//     const totalLength = m + n;
//     const halfLength = Math.floor((totalLength + 1) / 2);
//
//     let left = 0;
//     let right = m;
//
//     while (left <= right) {
//         const partitionNums1 = Math.floor((left + right) / 2);
//         const partitionNums2 = halfLength - partitionNums1;
//
//         const maxLeftNums1 = (partitionNums1 === 0) ? Number.MIN_SAFE_INTEGER : nums1[partitionNums1 - 1];
//         const minRightNums1 = (partitionNums1 === m) ? Number.MAX_SAFE_INTEGER : nums1[partitionNums1];
//         const maxLeftNums2 = (partitionNums2 === 0) ? Number.MIN_SAFE_INTEGER : nums2[partitionNums2 - 1];
//         const minRightNums2 = (partitionNums2 === n) ? Number.MAX_SAFE_INTEGER : nums2[partitionNums2];
//
//         if (maxLeftNums1 <= minRightNums2 && maxLeftNums2 <= minRightNums1) {
//             if (totalLength % 2 === 0) {
//                 return (Math.max(maxLeftNums1, maxLeftNums2) + Math.min(minRightNums1, minRightNums2)) / 2.0;
//             } else {
//                 return Math.max(maxLeftNums1, maxLeftNums2);
//             }
//         } else if (maxLeftNums1 > minRightNums2) {
//             right = partitionNums1 - 1;
//         } else {
//             left = partitionNums1 + 1;
//         }
//     }
//
//     return 0; // Median not found (shouldn't reach here in this problem)
// }
//
// const nums1 = [1, 3];
// const nums2 = [2];
// console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.0
function increment(x) {
    return x + 1;
}

let six = increment(increment(increment(3)));
console.log(six);
// var six = increment(increment(4));
// var six = increment(5);
// var six = 6;



