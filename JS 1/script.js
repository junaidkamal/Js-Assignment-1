//  var SubjectOne = prompt("Enter Your Subject One marks")

var SubjectOne = +prompt("Enter Your Math marks");
var SubjectTwo = +prompt("Enter Your Physics marks");
var SubjectThree = +prompt("Enter Your English marks");
var SubjectFour = +prompt("Enter Your Computer marks");
var SubjectFive = +prompt("Enter Your Urdu marks");

var totalMarks = 500;

var ObtainedMarks = SubjectOne + SubjectTwo + SubjectThree + SubjectFour + SubjectFive;

var result = (ObtainedMarks / totalMarks) * 100;

alert("Percentage: " + result.toFixed(2) + "%");
