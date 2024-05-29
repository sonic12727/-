// Переменная, содержащая функцию обработчика события
const handleReady = () => {
    console.log('Сайт готов!');
  };
  
  // Добавить обработчик события
  window.addEventListener('DOMContentLoaded', handleReady);
  
  // Выполнить функцию обработчика события
  window.addEventListener('load', handleReady);



  // Alert
function showAlert() {
  alert("Hello, World!");
}

// Prompt
function showPrompt() {
  const userInput = prompt("Enter your name:", "Mikhail");
  alert(`Hello, ${userInput}!`);
}

// Confirm
function showConfirm() {
  const userConfirm = confirm("Are you sure you want to delete this item?");
  if (userConfirm) {
    alert("Item deleted successfully.");
  } else {
    alert("Delete operation cancelled.");
  }
}


    
  
  