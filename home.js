const taskInput = document.querySelector("[data-taskName]")
const taskGenerator = document.querySelector("[data-addTask]")
const taskBox = document.querySelector("[data-taskBox]")

function addTask(){

    taskName = taskInput.value

    newTask = document.createElement("div")
    newTask.classList.add("task")
    
    newTaskBox = document.createElement("div")
    newTaskBox.classList.add("mainTask")

    newTaskName = document.createElement("input")
    newTaskName.value = taskName

    addSubtask = document.createElement("img")
    addSubtask.src = "plus.png"
    addSubtask.classList.add("addSub")

    addSubtask.addEventListener("click", addSub)

    addRemove = document.createElement("img")
    addRemove.src = "delete.png"
    addRemove.classList.add("remove")

    addRemove.addEventListener("click", removeSelf)

    newTaskBox.appendChild(newTaskName)
    newTaskBox.appendChild(addSubtask)
    newTaskBox.appendChild(addRemove)
    newTask.appendChild(newTaskBox)
    taskBox.appendChild(newTask)

}

function removeSelf(self){

    self.target.parentElement.remove()

}

function addSub(self){

    taskPlace = self.target.parentElement

    newSubtaskBox = document.createElement("div")
    newSubtaskBox.classList.add("subTask")

    newSubtask = document.createElement("input")
    newSubtask.classList.add("name")

    addRemove = document.createElement("img")
    addRemove.src = "delete.png"
    addRemove.classList.add("remove")

    addRemove.addEventListener("click", removeSelf)

    newSubtaskBox.appendChild(newSubtask)
    newSubtaskBox.appendChild(addRemove)
    taskPlace.appendChild(newSubtaskBox)

}


taskGenerator.onclick = addTask