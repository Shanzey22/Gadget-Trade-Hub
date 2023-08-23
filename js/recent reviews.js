function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}


function displayInput() {
        
  const userInput = document.getElementById("userInput").value;
  const userName = document.getElementById("userName").value
  document.getElementById("displayName").innerHTML = userName ;
  document.getElementById("displayText").innerHTML = userInput;
}
