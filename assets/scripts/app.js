const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);
//addBtn은 함수이기 때문에 'click, ... 들은 매개변수가 된당
