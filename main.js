// Variables Declaration

const todoInput = document.querySelector(".todo-input")

const todoList = document.querySelector(".todo-list")

const todoButton = document.querySelector(".todo-button")

const validateOption = document.querySelector(".validate-todo")

//Add EventListener

todoButton.addEventListener("click", addTodo);

todoList.addEventListener("click", deleteTodo);

validateOption.addEventListener("click", validateTodo)


// Function


function addTodo(e) {
    
    e.preventDefault();
    
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo");

    
    const newItem = document.createElement("li");
     newItem.classList.add("todo-item");
     newItem.innerText = todoInput.value;
     todoDiv.appendChild(newItem);

     const completeButton = document.createElement("button");
     completeButton.classList.add("complete-btn");
     completeButton.innerHTML = `<i class="fas fa-check"><i/>`;
     todoDiv.appendChild(completeButton);


     const trashButton =   document.createElement("button");
     trashButton.classList.add("trash-btn");
     trashButton.innerHTML =  `<i class="fas fa-xmark"></i>`;
     todoDiv.appendChild(trashButton);

     todoList.appendChild(todoDiv)

     todoInput.value = "";
    }
    
function deleteTodo(e) {

    const item = e.target;
     
    if ( item.classList[0] === "trash-btn") {
        
       const todo = item.parentElement;
       todo.classList.add("fall");
       todo.addEventListener(transitionend, () => {
                todo.remove();
       })
    }
    

    if ( item.classList[0] === "complete-btn") {
       const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
   
}

function validateTodo(e) {
    const todos = todoList.childNodes;
     todos.forEach((todo) => {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
        
                case "done":
                    if (todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    }else {
                        todo.style.display = "none";
                    }
                  break;  

                  case "undone":
                    if (todo.classList.contains("completed")) {
                        todo.style.display = "none";
                    }else {
                        todo.style.display = "flex";
                    }
                  break;  
            default:
                break;
        }
     })
}