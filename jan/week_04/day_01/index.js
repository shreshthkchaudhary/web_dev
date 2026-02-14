// step 1 - catch the form and apply event to it

document.querySelector("form").addEventListener("submit", getData);
function getData(e) {
    e.preventDefault();
    // console.log(1);
    let taskName = document.querySelector("#task").value;
    let taskPriority = document.querySelector("#priority").value;
    console.log(taskName, taskPriority);

    let taskObj = {
        taskName: taskName,
        taskPriority: taskPriority
    }

console.log(taskObj);
displayTable(taskObj);
}
function displayTable(taskObj) {
    const row = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = taskObj.taskName;
    const td2 = document.createElement("td");
    td2.innerText = taskObj.taskPriority;
    const td3 = document.createElement("td");
    td3.innerText = "add";
    row.append(td1, td2, td3);
    document.querySelector("tbody").append(row);
}






// document.querySelector("form").addEventListener("submit", function (event) {
//   event.preventDefault();

//   let taskInput = document.getElementById("task").value;
//   let priorityInput = document.getElementById("priority").value;

//   if (taskInput === "" || priorityInput === "") {
//     alert("Please fill all fields!");
//     return;
//   }

//   let tbody = document.querySelector("tbody");

//   let tr = document.createElement("tr");

//   let tdTask = document.createElement("td");
//   tdTask.innerText = taskInput;

//   let tdPriority = document.createElement("td");
//   tdPriority.innerText = priorityInput;

//   let tdFav = document.createElement("td");
//   tdFav.innerText = "⭐"; // You can later change this to a button

//   tr.append(tdTask, tdPriority, tdFav);
//   tbody.append(tr);

//   // Clear inputs after submit
//   document.getElementById("task").value = "";
//   document.getElementById("priority").value = "";
// });
