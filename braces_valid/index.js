/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    let pBalance = 0;
    let cBalance = 0;
    let sBalance = 0;
    let tempStr = "";
    let bArr = ['[', '{', '(', ')', '}', ']'];
    let openB  = '';
    let openInd = 0;
    for (let i = 0; i < str.length; i++) {
        if (bArr.includes(str[i])) {
            tempStr += str[i]
        }
        console.log(tempStr)
        if (str[i] === ')') {
            console.log("inside () check")
            openB = '('
            openInd = 0;
            for (let j = 0; j < tempStr.length; j++) {
                console.log("tempStr[j]:", tempStr[j])
                if (tempStr[j] === openB) {
                    openInd = j;
                    console.log("openInd:", openInd)
                }
            }
            let ts2 =  tempStr.slice(openInd);
            console.log("ts2 :", ts2, " --- tempStr:", tempStr)
            for (let j = 0; j <ts2.length; j++) {
                switch(ts2[j]) {
                    case '(':
                        pBalance++
                        break;
                    case '{':
                        cBalance++
                        break;
                    case '[':
                        sBalance++
                        break;
                    case ')':
                        pBalance--
                        break;
                    case '}':
                        cBalance--
                        break;
                    case ']':
                        sBalance--
                        break;
                }
            }
            if (pBalance !== 0 || cBalance !== 0 || sBalance !== 0) {
                return false;
            }
            else {
                tempStr = tempStr.slice(0, openInd);
                console.log("tempStr after slice:", tempStr)
                pBalance = sBalance  = cBalance = 0;
            }
        } 
        if (str[i] === '}') {
            console.log("inside {} check")
            openB = '{'
            openInd = 0;
            for (let j = 0; j < tempStr.length; j++) {
                console.log("tempStr[j]:", tempStr[j])
                if (tempStr[j] === openB) {
                    openInd = j;
                    console.log("openInd:", openInd)
                }
            }
            let ts2 =  tempStr.slice(openInd);
            console.log("ts2 :", ts2, " --- tempStr:", tempStr)
            for (let j = 0; j <ts2.length; j++) {
                switch(ts2[j]) {
                    case '(':
                        pBalance++
                        break;
                    case '{':
                        cBalance++
                        break;
                    case '[':
                        sBalance++
                        break;
                    case ')':
                        pBalance--
                        break;
                    case '}':
                        cBalance--
                        break;
                    case ']':
                        sBalance--
                        break;
                }
            }
            if (pBalance !== 0 || cBalance !== 0 || sBalance !== 0) {
                return false;
            }
            else {
                tempStr = tempStr.slice(0, openInd);
                console.log("tempStr after slice:", tempStr)
                pBalance = sBalance  = cBalance = 0;
            }
        } 
        if (str[i] === ']') {
            console.log("inside [] check")
            openB = '['
            openInd = 0;
            for (let j = 0; j < tempStr.length; j++) {
                console.log("tempStr[j]:", tempStr[j])
                if (tempStr[j] === openB) {
                    openInd = j;
                    console.log("openInd:", openInd)
                }
            }
            let ts2 =  tempStr.slice(openInd);
            console.log("ts2 :", ts2, " --- tempStr:", tempStr)
            for (let j = 0; j <ts2.length; j++) {
                switch(ts2[j]) {
                    case '(':
                        pBalance++
                        break;
                    case '{':
                        cBalance++
                        break;
                    case '[':
                        sBalance++
                        break;
                    case ')':
                        pBalance--
                        break;
                    case '}':
                        cBalance--
                        break;
                    case ']':
                        sBalance--
                        break;
                }
            }
            if (pBalance !== 0 || cBalance !== 0 || sBalance !== 0) {
                return false;
            }
            else {
                tempStr = tempStr.slice(0, openInd);
                console.log("tempStr after slice:", tempStr)
                pBalance = sBalance  = cBalance = 0;
            }
        } 
    }
    console.log(tempStr)
    console.log(tempStr.length)
    return (tempStr.length > 0 ? false:true);
}

console.log(bracesValid(str1))
console.log(bracesValid(str2))
console.log(bracesValid(str3))