document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let li = document.createElement("li");
    const userInput = document.getElementById('new-task-description');
    li.innerText = userInput.value
    let ul = document.getElementById("tasks");
    ul.append(li);
    const button = document.createElement("button");
    button.innerText = "X"
  })
})
