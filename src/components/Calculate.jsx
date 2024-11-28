export const calcuation = (inputValue,inputHistory,setInputValuePrev,setInputValue,setInputHistory) =>{
    const multiply = inputValue.split(/(\+|\-|\*|\/)/);
    if (multiply) {
      const firstNumber = Number(multiply[0]);
      const elements = multiply[1];
      const secondNumber = Number(multiply[2]);
      const element = multiply[3];
      const thirdNumber = Number(multiply[4]);
      if (elements === "+" && element === "+") {
        const resultNumber = firstNumber + secondNumber + thirdNumber;
        const result = firstNumber + "+" + secondNumber + "+" + thirdNumber;
        setInputValuePrev(firstNumber + "+" + secondNumber + "+" + thirdNumber);
        setInputValue(String(resultNumber));
        setInputHistory([...inputHistory, result]);
      } else if (elements === "+" && element === "*") {
        const resultNumber = firstNumber + secondNumber * thirdNumber;
        const result = firstNumber + "+" + secondNumber + "*" + thirdNumber
        setInputValuePrev(result);
        setInputValue(String(resultNumber));
        setInputHistory([...inputHistory,result])
      } else if (elements === "+" && element === "/") {
        const resultNumber = firstNumber + secondNumber / thirdNumber;
        const result = firstNumber + "+" + secondNumber + "/" + thirdNumber
        setInputValuePrev(result);
        setInputValue(String(resultNumber));
        setInputHistory([...inputHistory,result])
      } else if (elements === "+" && element === "-") {
        const resultNumber = firstNumber + secondNumber - thirdNumber;
        const result = firstNumber + "+" + secondNumber + "/" + thirdNumber
        setInputValuePrev(result);
        setInputValue(String(resultNumber));
        setInputHistory([...inputHistory,result])
      } else if (elements === "*" && element === "+") {
        const resultNumber = firstNumber * secondNumber + thirdNumber;
        const result = firstNumber + "*" + secondNumber + "+" + thirdNumber
        setInputValuePrev(result);
        setInputValue(String(resultNumber));
        setInputHistory([...inputHistory,result])
      } else if (elements === "*" && element === "*") {
        const resultNumber = firstNumber * secondNumber * thirdNumber;
        const result = firstNumber + "*" + secondNumber + "*" + thirdNumber
        setInputValuePrev(result);
        setInputValue(String(resultNumber));
        setInputHistory([...inputHistory,result])
      } else if (elements === "*" && element === "/") {
        const resultNumber = (firstNumber * secondNumber) / thirdNumber;
        const result = firstNumber + "*" + secondNumber + "/" + thirdNumber
        setInputValuePrev(result);
        setInputValue(String(resultNumber));
        setInputHistory([...inputHistory,result])
      } else if (elements === "*" && element === "-") {
        const resultNumber = firstNumber * secondNumber - thirdNumber;
        const result = firstNumber + "*" + secondNumber + "-" + thirdNumber
        setInputValuePrev(result);
        setInputValue(String(resultNumber));
        setInputHistory([...inputHistory,result])
      } else if (elements === "/" && element === "+") {
        const resultNumber = firstNumber / secondNumber + thirdNumber;
        const result = firstNumber + "/" + secondNumber + "+" + thirdNumber
        setInputValuePrev(result);
        setInputValue(String(resultNumber));
        setInputHistory([...inputHistory,result])
      } else if (elements === "/" && element === "/") {
        const resultNumber = (firstNumber / secondNumber) * thirdNumber;
        const result = firstNumber + "/" + secondNumber + "*" + thirdNumber
        setInputValuePrev(result);
        setInputValue(String(resultNumber));
        setInputHistory([...inputHistory,result])
      } else if (elements === "/" && element === "/") {
        const resultNumber = firstNumber / secondNumber / thirdNumber;
        const result = firstNumber + "/" + secondNumber + "/" + thirdNumber
        setInputValuePrev(result);
        setInputValue(String(resultNumber));
        setInputHistory([...inputHistory,result])
      } else if (elements === "/" && element === "-") {
        const resultNumber = firstNumber / secondNumber - thirdNumber;
        const result = firstNumber + "/" + secondNumber + "-" + thirdNumber
        setInputValuePrev(result);
        setInputValue(String(resultNumber));
        setInputHistory([...inputHistory,result])
      } else if (elements === "-" && element === "+") {
        const resultNumber = firstNumber - secondNumber + thirdNumber;
        setInputValuePrev(firstNumber + "-" + secondNumber + "+" + thirdNumber);
        setInputValue(String(resultNumber));
      } else if (elements === "-" && element === "*") {
        const resultNumber = firstNumber - secondNumber * thirdNumber;
        const result = firstNumber + "-" + secondNumber + "*" + thirdNumber
        setInputValuePrev(result);
        setInputValue(String(resultNumber));
        setInputHistory([...inputHistory,result])
      } else if (elements === "-" && element === "/") {
        const resultNumber = firstNumber - secondNumber / thirdNumber;
        const result = firstNumber + "-" + secondNumber + "/" + thirdNumber
        setInputValuePrev(result);
        setInputValue(String(resultNumber));
        setInputHistory([...inputHistory,result])
      } else if (elements === "-" && element === "-") {
        const resultNumber = firstNumber - secondNumber - thirdNumber;
        const result = firstNumber + "-" + secondNumber + "-" + thirdNumber
        setInputValuePrev(result);
        setInputValue(String(resultNumber));
        setInputHistory([...inputHistory,result])
      } else {
        if (elements === "+") {
          const resultNumber = firstNumber + secondNumber;
          const result = firstNumber + "+" + secondNumber
          setInputValuePrev(result);
          setInputValue(String(resultNumber));
          setInputHistory([...inputHistory,result])
        } else if (elements === "*") {
          const resultNumber = firstNumber * secondNumber;
          const result = firstNumber + "*" + secondNumber
          setInputValuePrev(result);
          setInputValue(String(resultNumber));
          setInputHistory([...inputHistory,result])
        } else if (elements === "-") {
          const resultNumber = firstNumber - secondNumber;
          const result  = firstNumber + "-" + secondNumber 
          setInputValuePrev(result);
          setInputValue(String(resultNumber));
          setInputHistory([...inputHistory,result])
        } else if (elements === "/") {
          const resultNumber = firstNumber / secondNumber;
          const result = firstNumber + "/" + secondNumber
          setInputValuePrev(result);
          setInputValue(String(resultNumber));
          setInputHistory([...inputHistory,result])
        }
      }
    }
}