const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");

let id = 1;
const fetchTodos = async () => {
  const res = await fetch("http://localhost:3000/todos");
  const todos = await res.json();

  if (todos.length > 0) {
    id = todos[todos.length - 1].id;
  }

  getList(todos);
};

const addTodo = async (e) => {
  e.preventDefault();
  const todo = {
    id: String(++id),
    todo: $input.value,
    done: false,
  };

  await fetch("http://localhost:3000/todos", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
};

const removeTodo = async (id) => {
  await fetch(`http://localhost:3000/todos/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      getList(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const getList = (data) => {
  const listItem = data.map((todo) => {
    return `<li id=${todo.id}>
            <p>${todo.todo}</p>
            <div>
                <button type="button" class="del-btn">삭제</button>
            </div>
        </li>`;
  });

  $ul.insertAdjacentHTML("beforeend", listItem.join(""));
};

const todoStatus = (e) => {
  e.preventDefault();
  if (e.target.nodeName === "BUTTON") {
    removeTodo(e.target.parentNode.parentNode.id);
  }
};

$button.addEventListener("click", addTodo);
$ul.addEventListener("click", todoStatus);

fetchTodos();
