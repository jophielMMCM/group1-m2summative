function addTask(){

let taskText = document.getElementById("taskInput").value;
let category = document.getElementById("category").value;
let date = document.getElementById("taskDate").value;
let priority = document.getElementById("priority").value;

if(taskText === ""){
    alert("Please enter a task");
    return;
}

/* CREATE TASK FOR INCOMPLETE LIST */
let li = document.createElement("li");

let taskInfo = document.createElement("span");
taskInfo.textContent = taskText + " | " + category + " | " + date + " | " + priority;

let completeBtn = document.createElement("button");
completeBtn.textContent = "Complete";

let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";

li.appendChild(taskInfo);
li.appendChild(completeBtn);
li.appendChild(deleteBtn);

/* ADD TO INCOMPLETE TASKS */
document.getElementById("incompleteList").appendChild(li);

/* COMPLETE BUTTON */
completeBtn.onclick = function(){
    document.getElementById("completeList").appendChild(li);
};

/* DELETE BUTTON */
deleteBtn.onclick = function(){
    li.remove();
};

/* ADD SEPARATE ITEM TO PRIORITY LIST IF HIGH */
if(priority === "High"){

let priorityItem = document.createElement("li");
priorityItem.textContent = taskText + " | " + category + " | " + date + " | HIGH PRIORITY";

document.getElementById("priorityList").appendChild(priorityItem);

}

/* CLEAR INPUTS */
document.getElementById("taskInput").value = "";
document.getElementById("taskDate").value = "";

}