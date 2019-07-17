
let addButton = document.getElementById("saveTaskButton")
let createTask = document.getElementById("createTaskTextBox")
let pendingTasks = document.getElementById("pendingTasksDiv")
let completedTasks = document.getElementById("completedTasksDiv")

addButton.addEventListener('click', function() {
    console.log("button click fired")

    let task = createTask.value
    createTask.value = ""
    
    let pendingTask = document.createElement("div")

    let checkTask = document.createElement("input")
    checkTask.type = "checkbox"
    checkTask.addEventListener('click', function(){
        if(this.checked) {completedTasks.appendChild(this.parentElement)
        }else if(this.checked == false) {pendingTasks.appendChild(this.parentElement)}
    })

    let taskName = document.createElement("h5")
    taskName.innerHTML = task

    let removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    removeButton.addEventListener('click', function(){
        this.parentElement.parentElement.removeChild(this.parentElement)
    })

    pendingTask.appendChild(checkTask)
    pendingTask.appendChild(taskName)
    pendingTask.appendChild(removeButton)

    pendingTasksDiv.appendChild(pendingTask)
})