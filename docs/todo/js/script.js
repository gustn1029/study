const todo = document.getElementById("todo");
const todoList = document.querySelector(".todo-list");
const addBtn = document.querySelector(".todo-btn");
const listItem = document.querySelectorAll(".todo-list li");

let todos = [];

const addTodo = (e) => {
  e.preventDefault();
  if (todo.value !== "" || todo.value.length !== 0) {
    todos.push(todo.value);
    addListItem();
  } else {
    alert("할 일을 입력해주세요.");
  }

  todo.value = "";
};

const addListItem = () => {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const delBtn = document.createElement("button");

  todos.forEach((el) => {

    p.textContent = el;
    delBtn.textContent = "삭제";
    delBtn.classList.add("delete-btn");

    li.append(p);
    li.append(delBtn);

    todoList.appendChild(li);
  });
};

const removeListItem = (e) => {
  const val = e.target;
  if(val.nodeName === "BUTTON") {
    val.parentNode.remove();
  }
}
addListItem();
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", removeListItem)
