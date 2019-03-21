module.exports = function check(str, bracketsConfig) {
    let result = false;
    let brackets = {};
    let stack = [];
    
    bracketsConfig.forEach( element => brackets[element[0]] = element[1] );
    
    for (let i = 0; i < str.length; i++) {
    if (brackets[stack[stack.length - 1]] === str[i]) {
    stack.pop();
    } else {
    stack.push(str[i]);
    }
    }
    
    if(stack.length === 0){
    result = true;
    }
    
    return (result);
    }

