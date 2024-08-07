// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in 
//     some test cases due to an error in the test cases). You do not need to test for this. 
//     This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.







// we are going to need to determaine if the string is odd or even
// depending on if it is odd or even will determaine if we return one or two chars
// easiest way to get to the middle would be dividing the string by 2
// if its odd we could use charAt() to get the char we need
// if its even we need to return two chars, slice() should work
// we will make a object to save our postion in the string
function getMiddle(string){
    let midChar = string.length / 2;
    if(string.length % 2 == 0){
        return string.slice(midChar - 1, midChar + 1)
    }else{
        return string.charAt(midChar)
    }
}