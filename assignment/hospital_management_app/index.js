// fill in javascript code here


// Select form and tbody

let tbody = document.querySelector("tbody");

document.querySelector("form").addEventListener("submit", getData);

function getData(e) {
  e.preventDefault();

  let name = document.querySelector("#name").value;
  let docID = document.querySelector("#docID").value;
  let dept = document.querySelector("#dept").value;
  let exp = document.querySelector("#exp").value;
  let email = document.querySelector("#email").value;
  let mobile = document.querySelector("#mbl").value;

  // Determine role
  let role = "";
  if (exp > 5) {
    role = "Senior";
  } else if (exp >= 2 && exp <= 5) {
    role = "Junior";
  } else {
    role = "Trainee";
  }

  let taskObj = {
    name,
    docID,
    dept,
    exp,
    email,
    mobile,
    role
  }

  console.log(taskObj);
  displayTable(taskObj);
}

function displayTable(taskObj){
  // Create table row
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerText = name;

  let td2 = document.createElement("td");
  td2.innerText = docID;

  let td3 = document.createElement("td");
  td3.innerText = dept;

  let td4 = document.createElement("td");
  td4.innerText = exp;

  let td5 = document.createElement("td");
  td5.innerText = email;

  let td6 = document.createElement("td");
  td6.innerText = mobile;

  let td7 = document.createElement("td");
  td7.innerText = role;

  let td8 = document.createElement("td");
  td8.innerText = "Delete";
  td8.style.color = "red";
  td8.style.cursor = "pointer";

  // Delete functionality
  td8.addEventListener("click", function () {
    tr.remove();
  });

  // Append all tds to tr
  tr.append(td1, td2, td3, td4, td5, td6, td7, td8);

  // Append tr to tbody
  tbody.append(tr);

  // Reset form
  form.reset();
}
