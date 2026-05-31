function firstNonRepeating(str) {
    const charCount = new Map();
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    for (const char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    return null;
}

const inputString = "aabbcddef";
const firstNonRepeatingChar = firstNonRepeating(inputString);
console.log("First non-repeating character:", firstNonRepeatingChar);
