const input = document.querySelector("input");
const btn = document.querySelector("button");
const output = document.querySelector("#output");

// create a function where input todo value add
function handleBtnValue() {
  if (input.value !== "") {  // if input value is empty then create any input value list otherwise not
    const list = document.createElement("li");  // create a list (li) where all input value stored
    output.appendChild(list); // append the list variable to it's parent ul (un-ordered list)
    list.textContent = input.value; // store the input value when something creating todo list value and showing in list.
	list.classList.add("fontSize");
    input.value = ""; // after adding the value and will show then input value going to be empty
    input.focus(); // and then automatically going to input value focus
  }
}

// create a function where the value of input create a todo when click the button 
function handleInputValue(e) {
  if (input.value !== "" && e.key === "Enter") { // when value is not empty then it will not add any value otherwise do that and after value add and enter within input it show in the list.
    const list = document.createElement("li");
    output.appendChild(list);
    list.textContent = input.value;
	list.classList.add("fontSize");
    input.value = "";
    input.focus();
  }
}



// finally call the event using input and btn element.
btn.addEventListener("click", handleBtnValue);
input.addEventListener("keydown", handleInputValue);
