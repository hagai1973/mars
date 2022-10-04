let validAge = 18;
console.log("hello from js file");

var task = new Object();
task.country = "Israel"; // Assign properties to the object
task.continent = "Asia";
task.popolation = "10 milion";
alert("Country: " + task.country);
alert("Continent: " + task.continent);
alert("popolation: " + task.popolation);

function calc() {
  console.log("text" + x);
  console.log("text" + y);
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  alert("this sum: " + (parseInt(num1) + parseInt(num2)));
}

function showDate(element) {
  console.log(Date());
  document.getElementById("showdate").innerHTML = Date();
}

function checkAge() {
  let userAge = document.getElementById("userAge").value;

  if (parseInt(userAge) > validAge) {
    // alert("Your age is valid");
    document.getElementById("status").style.color = "black";
    document.getElementById("status").style.backgroundColor = "lightgreen";
    document.getElementById("status").innerHTML = "All Good";
  } else {
    // alert("Your age is too young");
    document.getElementById("status").style.color = "balck";
    document.getElementById("status").style.backgroundColor = "red";
    document.getElementById("status").innerHTML = "Too Young";
  }
}
