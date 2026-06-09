const isBalanced = (expression) => {
  const stack = [];

  const pairs = {
    '}': '{',
    ')': '(',
    ']': '[',
  };

  for (const char of expression) {
    if (['{', '(', '['].includes(char)) {
      stack.push(char);
      continue;
    }

    if (pairs[char]) {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// Test Cases
console.log(isBalanced('{{(){}}}')); // true
console.log(isBalanced('}{}{'));     // false
console.log(isBalanced('({})'));     // true
console.log(isBalanced('([{}])'));   // true
console.log(isBalanced('([)]'));     // false