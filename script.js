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
    taskInput.setAttribute('id', 'delete');

    checkBox.classList.add('checkbox');
    

    const pEl = document.createElement("p")
    pEl.innerText = toDoList[i].task;
    pEl.setAttribute('id', 'strikethrough');
    pEl.setAttribute('class', 'unstrike');
    taskDiv.append(pEl);
    

    const tEl = document.createElement("span")
    tEl.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    trashIcon.append(tEl);

    const checkEl = document.createElement("span")
    checkEl.innerHTML = `<input type="checkbox" id="check"></input>`;
    
    checkBox.append(checkEl);

    taskInput.append(checkBox);
    taskInput.append(taskDiv);
    taskInput.append(trashIcon);
    toDoListrow.append(taskInput);
    toDoList = [];

    const input = document.getElementById("inputfield")
    input.value = "";
  } 

  const checkbox = document.getElementsByClassName('checkbox');

  const trash = document.getElementsByClassName("fa-trash-alt");
  for(let i = 0; i < trash.length; i++)
  {
    trash[i].addEventListener('click', delTask);
    checkbox[i].addEventListener('click', validate);
  }
  
};

function delTask() 
{
  console.log("click")
  const del = document.getElementById("delete");

  del.parentNode.removeChild(del);
};

document.querySelector("button").addEventListener('click', addTask);

function validate() 
{
 const p = document.getElementById('strikethrough');
 const c = document.getElementById ('check');
 if(c.checked) {
  p.className = 'strikethrough';
 } else{
  p.className = 'unstrike';
 }
}
