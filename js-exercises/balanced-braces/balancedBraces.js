import Stack from './stack';

function balancedBraces(...args) {
  const stack = new Stack();
  const testString = args[0];

  for (let i = 0; i < testString.length; i = i + 1) {
    const char = testString[i];
    switch (true) {
      case (char === '{' || char === '[' || char === '('):
        stack.push(char);
        break;
      case (char === '}'):
        if (stack.peek() !== '{')
          return false;
        stack.pop();
        break;
      case (char === ']'):
        if (stack.peek() !== '[')
          return false;
        stack.pop();
        break;
      case (char === ')'):
        if (stack.peek() !== '(')
          return false;
        stack.pop();
        break;
      default:
        // do nothing
        break;
    }
  }
  return stack.isEmpty();
}

export {
  balancedBraces,
};
