const isBalanced = (expression) => {
  const stack = [];

  const validPairs = new Set([
    '{}',
    '()',
    '[]',
  ]);

  for (const char of expression) {

    if ('([{'.includes(char)) {
      stack.push(char);
      continue;
    }

    if ('}])'.includes(char)) {

      if (stack.length === 0) {
        return false;
      }

      const pair = stack.pop() + char;

      if (!validPairs.has(pair)) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// Tests
console.log(isBalanced('{{(){}}}')); // true
console.log(isBalanced('}{}{'));     // false
console.log(isBalanced('({})'));     // true
console.log(isBalanced('([{}])'));   // true
console.log(isBalanced('([)]'));     // false