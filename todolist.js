const inputBox = document.getElementById('inputBox');
const todoList = document.getElementById('todoList');

document.getElementById('addButton').addEventListener('click', () => {
    let li = document.createElement('li');
    let span = document.createElement('span');

    if (inputBox.value === "") {
        alert ("Add your list first. Thank You!");
    } 
    else {
        li.innerHTML = inputBox.value;
        todoList.appendChild(li);
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveList();
    }
    inputBox.value = "";
});

todoList.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveList();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveList();
    }
},false);

const saveList = () => {
    localStorage.setItem("data", todoList.innerHTML);
};

const showList = () => {
    todoList.innerHTML = localStorage.getItem("data")
};

showList();