
var config = {
    apiKey: "AIzaSyDI8VHb65yVJyJ1Nj-dgTERmkyqrcKVloo",
    databaseURL: "https://fir-to-group-project.firebaseio.com/",
  
  };

  
  
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#add-info-btn").on("click", function(event) {
    event.preventDefault();
    console.log("hi");

    var array2 = ["#name", "#email", "#number", "#username", "#password", 
     "#password-confirm", "#Q1", "#Q2", "#Q3", "#Q4"];

  var empName = $(array2[0]).val().trim();
  var empEmail = $(array2[1]).val().trim();
  var empNumber = $(array2[2]).val().trim();
  var empUserName = $(array2[3]).val().trim();
  var empPassword = $(array2[4]).val().trim();
  var empPasswordConfirm = $(array2[5]).val().trim();
  var empQ1 = $(array2[6]).val().trim();
  var empQ2 = $(array2[7]).val().trim();
  var empQ3 = $(array2[8]).val().trim();
  var empQ4 = $(array2[9]).val().trim();

  var newEmp = {
    name: empName,
    email: empEmail,
    number: empNumber,
    username: empUserName,
    password: empPassword,
    passwordConfirm: empPasswordConfirm,
    Q1: empQ1,
    Q2: empQ2,
    Q3: empQ3,
    Q4: empQ4
};

console.log(newEmp);

// Uploads employee data to the database
database.ref().push(newEmp);

//Logs everything to console
console.log(newEmp.name);

    
  function cleanUP (A){
    $(A).val(""); 
}

cleanUP(array2[0]);
cleanUP(array2[1]);
cleanUP(array2[2]);
cleanUP(array2[3]);
cleanUP(array2[4]);
cleanUP(array2[5]);
cleanUP(array2[6]);
cleanUP(array2[7]);
cleanUP(array2[8]);
cleanUP(array2[9]);
 });


database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Store everything into a variable.

var empName = childSnapshot.val().name;
var empEmail = childSnapshot.val().email;
var empNumber = childSnapshot.val().number;
var empUserName  = childSnapshot.val().username;
var empPassword = childSnapshot.val().password;
var empPasswordConfirm = childSnapshot.val().passwordConfirm;
var empQ1 = childSnapshot.val().Q1;
var empQ2 = childSnapshot.val().Q2;
var empQ3 = childSnapshot.val().Q3;
var empQ4 = childSnapshot.val().Q4;



  // Employee Info

  console.log(empName);
  console.log(empEmail);
  console.log(empNumber);
  console.log(empUserName);
  console.log(empPassword);
  console.log(empPasswordConfirm);
  console.log(empQ1);
  console.log(empQ2);
  console.log(empQ3);
  console.log(empQ4);
});

