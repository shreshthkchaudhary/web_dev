// step -1 catch the form and apply event to it

let todoArr = JSON.parse(localStorage.getItem("todo")) || [];
let favArr = JSON.parse(localStorage.getItem("fav")) || [];
  displayTable(todoArr);
// if(JSON.parse(localStorage.getItem("todo"))==null){
//   todoArr = []
// } else{
//   todoArr = JSON.parse(localStorage.getItem("todo"))
// }
document.querySelector("form").addEventListener("submit", getData);

function getData(e) {
  e.preventDefault();
  // console.log(1);
  let taskName = document.querySelector("#task").value;
  let taskPriority = document.querySelector("#priority").value;

  console.log(taskName, taskPriority);

  let taskObj = {
    taskName,
    taskPriority,
  };
  todoArr.push(taskObj); // [{},{},{}]

  localStorage.setItem("todo",JSON.stringify(todoArr))
  console.log(todoArr);

  console.log(taskObj);
  displayTable(todoArr);
}

function displayTable(arr) {
  //  <tr>
  //         <td>html</td>
  //         <td>high</td>
  //         <td>Add</td>
  //       </tr>

  document.querySelector("tbody").innerText = "";
  arr.forEach((el) => {
    const row = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = el.taskName;

    const td2 = document.createElement("td");
    td2.innerText = el.taskPriority;

    const addToFav = document.createElement("button");
    addToFav.innerText = "add";

    addToFav.addEventListener("click",function(){
      favArr.push(el);
      localStorage.setItem("fav", JSON.stringify(favArr))
      alert("Todo Added to Fav Page")
    })

    row.append(td1, td2, addToFav);
    document.querySelector("tbody").append(row);
  });
}
