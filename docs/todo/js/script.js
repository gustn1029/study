const todo = document.getElementById("todo");
const todoList = document.querySelector(".todo-list");
const addBtn = document.querySelector(".todo-btn");
const listItem = document.querySelectorAll(".todo-list li");

let todos = [];

const addTodo = (e) => {
  e.preventDefault();
  if (todo.value !== "" || todo.value.length !== 0) {
    const todoData = {
      id: todos.length + 1,
      text: todo.value,
      isComplete: false,
    };
    todos.push(todoData);
    addListItem(todoData);
  } else {
    alert("할 일을 입력해주세요.");
  }

  todo.value = "";
};

const addListItem = (todoData) => {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const div = document.createElement("div");
  const delBtn = document.createElement("button");
  const updateBtn = document.createElement("button");

  p.textContent = todoData.text;
  delBtn.textContent = "삭제";
  delBtn.classList.add("delete-btn");
  updateBtn.textContent = "수정";
  updateBtn.classList.add("update-btn");

  if (todoData.isComplete) {
    p.classList.add("complete");
  }

  li.id = todoData.id;
  li.append(p);
  div.append(updateBtn);
  div.append(delBtn);
  li.append(div);

  todoList.appendChild(li);
};

const updateTodo = (id, newText) => {
  const updateItem = document.getElementById(id);
  const updateText = updateItem.querySelector("p");

  (newText !== "" && newText !== null)
    ? (updateText.textContent = newText)
    : updateText.textContent;
};

const completeTodo = (id, isComplete) => {
  const completeTodoItem = document.getElementById(id);

  const p = completeTodoItem.querySelector("p");
  if (isComplete) {
    p.classList.add("complete");
    p.textContent += "(완료)";
  } else {
    p.classList.remove("complete");
  }
};

const removeTodo = (id) => {
  const item = document.getElementById(id);
  item.remove();
};

const setListItemStatus = (e) => {
  const val = e.target;

  if (val.nodeName === "P") {
    const id = Number(val.parentNode.id);
    const confirm = window.confirm("완료 처리 하시겠습니까?");
    if (confirm) {
      todos.map((el) => (el.id === id ? { ...el, isComplete: true } : el));
      completeTodo(id, true);
    }
  } else if (val.nodeName === "BUTTON") {
    const id = Number(val.parentNode.parentNode.id);
    if (val.classList.contains("delete-btn")) {
      todos = todos.filter((el) => el.id !== id);
      removeTodo(id);
    }

    if (val.classList.contains("update-btn")) {
      const newText = window.prompt(
        "새로운 내용을 입력해주세요:",
        val.parentNode.previousElementSibling.textContent
      );
      updateTodo(id, newText);
    }
  }
  console.log(todos);
};

addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", setListItemStatus);
