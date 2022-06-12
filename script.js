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

    const taskDiv = document.createElement("div");
    const trashIcon = document.createElement("div")
    const checkBox = document.createElement("div")
    //console.log(toDoList[i].task);

    checkBox.className="col-3"
    taskDiv.className="col-6";
    trashIcon.className="col-3"

    const pEl = document.createElement("p")
    pEl.innerText = toDoList[i].task;
    taskDiv.append(pEl);


    const tEl = document.createElement("span")
    tEl.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    trashIcon.append(tEl);

    const checkEl = document.createElement("span")
    checkEl.innerHTML = `<input type="checkbox"></input>`;
    checkBox.append(checkEl);

    toDoListrow.append(checkBox)
    toDoListrow.append(taskDiv);
    toDoListrow.append(trashIcon);
    toDoList = [];

    const input = document.getElementById("inputfield")
    input.value = "";

  } 
};


  




document.querySelector("button").addEventListener('click', addTask);
