const input = document.querySelector("input");
const btn = document.querySelector("#add-value");
const listContainer = document.querySelector("ul");

console.log("hello contributor testing");

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    const list = document.createElement("li");
    listContainer.appendChild(list);
    list.textContent = input.value;
    input.value = "";
    input.focus();
  }
});
