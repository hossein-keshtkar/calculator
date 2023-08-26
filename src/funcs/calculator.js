export const calculator = (num1, num2, operator) => {
  const add = +num1 + +num2;
  const sub = +num1 - +num2;
  const mul = +num1 * +num2;
  const div = +num1 / +num2;

  if (operator === "+") return parseFloat(add.toFixed(4));
  if (operator === "-") return parseFloat(sub.toFixed(4));
  if (operator === "/") return parseFloat(div.toFixed(4));
  if (operator === "*") return parseFloat(mul.toFixed(4));
};
