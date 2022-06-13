console.log("Hello World");

let toDoList = [];

const addTask = (ev) => {  
  ev.preventDefault();
  let todo = 
  {
    task: document.querySelector("input").value
  };
  toDoList.push(todo);
  
  const toDoListrow = document.getElementById('todo-row');

  for(let i = 0; i < toDoList.length; i++)
  {
    const taskInput = document.createElement("div");
    const taskDiv = document.createElement("span");
    const trashIcon = document.createElement("span");
    const checkBox = document.createElement("span");
    //console.log(toDoList[i].task);

    
    trashIcon.classList.add("trash");
    taskInput.classList.add("delete");

    const pEl = document.createElement("p")
    pEl.innerText = toDoList[i].task;
    taskDiv.append(pEl);


    const tEl = document.createElement("span")
    tEl.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    trashIcon.append(tEl);

    const checkEl = document.createElement("span")
    checkEl.innerHTML = `<input type="checkbox"></input>`;
    checkBox.append(checkEl);

    taskInput.append(checkBox);
    taskInput.append(taskDiv);
    taskInput.append(trashIcon);
    toDoListrow.append(taskInput);
    toDoList = [];

    const input = document.getElementById("inputfield")
    input.value = "";

  } 
};

const delTask = (ev) => {
  const del = document.getElementsByClassName("delete");

  del.childElement.remove();
}


document.querySelector("i").addEventListener('click', delTask);

document.querySelector("button").addEventListener('click', addTask);
