const readline = require('readline');
const rl = readline.createInterface(
  process.stdin, process.stdout
);

function operation (op,a,b) {
  switch(op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
  };
};

const regOperator = /[+-/*//]/;
const stack = new Array;
console.log('Welcome to the RPN Calculator!')
rl.on('line', data => {
  const input =data.toString('utf8').split(' ');
  input.forEach(el => {
    if(Number(el)) {
      stack.push(Number(el)); 
    }
    else if (regOperator.test(el)) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(operation(el,a,b));
    }
  });
  console.log(`${stack[stack.length - 1]}`);       
}).on('close', () => {
  console.log('You\'re now exiting the RPN Calculator!')
  process.exit(0);
});

module.exports = { operation };