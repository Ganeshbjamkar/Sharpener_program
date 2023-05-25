// alert("Welcome to the JavaScript");

// confirm("Are you sure you want to learn JavaScript")

// prompt("Please enter your name","Seattle")

// document.write(" <h1> Jamkar </h1>");

// console.log("Welcome to the javascript");
// console.log("Welcome to Web Development");
// console.log("Hi");

// var x = document.getElementById("main").innerHTML;
// console.log(x);

// document.getElementById("main").innerHTML = "<h4>web application development</h4>";

// var x = document.getElementsByClassName("main")[0].innerHTML;

// alert(x);
// console.log("Helllo git commit from vs code");



/*

Examine the Document Object:

*/

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[5]);
// console.log(document.all[10]);
// // document.all[10].textContent = "Hello";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// Get Elements by ID

// console.log(document.getElementById("header-title"));

var headerTitle = document.getElementById("header-title");
var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "hello"; 
// headerTitle.innerText= 'Goodbye'; 

// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);

// headerTitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom = 'solid 3px #000'; 

// GET ELEMENTS BY CLASS NAME


var items = document.getElementsByClassName('title'); 
console.log(items);
console.log(items[0]);
items[0].style.fontweight = 'bold';
items[0].style.color  ='green';


