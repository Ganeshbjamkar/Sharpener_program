// // alert("Welcome to the JavaScript");

// // confirm("Are you sure you want to learn JavaScript")

// // prompt("Please enter your name","Seattle")

// // document.write(" <h1> Jamkar </h1>");

// // console.log("Welcome to the javascript");
// // console.log("Welcome to Web Development");
// // console.log("Hi");

// // var x = document.getElementById("main").innerHTML;
// // console.log(x);

// // document.getElementById("main").innerHTML = "<h4>web application development</h4>";

// // var x = document.getElementsByClassName("main")[0].innerHTML;

// // alert(x);
// // console.log("Helllo git commit from vs code");



// /*

// Examine the Document Object:

// */

// // console.dir(document);
// // console.log(document.domain);
// // console.log(document.URL);
// // console.log(document.title);
// // // document.title = 123;
// // console.log(document.doctype);
// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.all);
// // console.log(document.all[5]);
// // console.log(document.all[10]);
// // // document.all[10].textContent = "Hello";
// // console.log(document.forms);
// // console.log(document.links);
// // console.log(document.images);

// // Get Elements by ID

// // console.log(document.getElementById("header-title"));

// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById('main-header');
// // console.log(headerTitle);
// // headerTitle.textContent = "hello"; 
// // headerTitle.innerText= 'Goodbye'; 

// // console.log(headerTitle.textContent);
// // console.log(headerTitle.innerText);

// // headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000'; 

// // GET ELEMENTS BY CLASS NAME




// var items2 = document.getElementsByClassName('list-group-item'); 
// console.log(items2);
// console.log(items2[2]);
// items2[2].textContent='Hello 2';
// items2[2].style.fontWeight = 'bold';
// items2[2].style.backgroundColor = 'green';

// for(var i=0; i<items.length; i++){
//     items.style.fontWeight = 'bold';
// }

// var items3 = document.getElementsByClassName('list-group-item'); 
// console.log(items3);
// console.log(items3[1]);
// items3[1].textContent='Hello';
// items3[1].style.fontWeight = 'bold';

// var items4 = document.getElementsByClassName('list-group-item'); 
// console.log(items4);
// console.log(items4[0]);
// items4[0].textContent='Hello';
// items4[0].style.fontWeight = 'bold';

// var items5 = document.getElementsByClassName('list-group-item'); 
// console.log(items5);
// console.log(items5[3]);
// items5[3].textContent='Hello';
// items5[3].style.fontWeight = 'bold';


// // GET ELEMENTS BY TAG NAME




// // var newItem = document.createElement("li");
// // newItem.textContent = "New Item";
// // document.getElementById("items").appendChild(newItem);


// // var li = document.getElementsByTagName('li'); 
// // console.log(li[0]);
// // console.log(li[0]);
// // li[0].textContent='Hello 2';
// // li[0].style.fontWeight = 'bold';
// // li[0].style.backgroundColor = 'green';

// // for(var i=0; li < li.length; i++){
// //     li[i].style.fontWeight = 'bold';

// // }

// // QUERY SELECTOR //

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #FF0000';

// var input = document.querySelector('input');
// input.value = 'Hello JavaScript!';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'send';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'orange';

// // var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.backgroundColor = 'green';

// // Select the third item using querySelector
// var thirdItem = document.querySelector('ul li:nth-child(3)');

// // Apply CSS style to make it invisible
// thirdItem.style.visibility = 'hidden';

// // Select all items in the list
// var itemList = document.querySelectorAll('ul li');

// // Check if there is a second item
// if (itemList.length >= 2) {
//   // Apply CSS style to make the second item's font color green
//   itemList[1].style.color = 'green';
// }




// // QUERY SELECTOR ALL //

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.background = "green";
// }


// Creating Nodes and Modifying Dom //

// Traversing the DOM

var itemList = document.querySelector('#items');

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// console.log(itemList.parentNode.parentNode.parentNode);


// ParentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentNode.parentNode);

// childNodes

// console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor ="yellow"; 

// First child //

// console.log(itemList.firstChild);

// FirstElementChild //

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// lastChild //

console.log(itemList.lastChild);

// lastElementChild //

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

// NextSibling //

console.log(itemList.nextSibling);

// nextElementSibling //

console.log(itemList.nextElementSibling);

// PreviousSibling //

console.log(itemList.previousSibling);

// previousElementSibling //

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'red'; 


// createElement //

// create a div

var newDiv = document.createElement('div');

// Add class
newDiv.className='HelloDiv';

// Add id
newDiv.id = 'Helloid';

// Add attributes
newDiv.setAttribute('title', 'Hello Div');

// create text node
var newDivText = document.createTextNode('Hello World!');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');



console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);


document.getElementById('header-title').innerHTML = 'HELLO ' + document.getElementById('header-title').innerHTML;
document.getElementById('items').getElementsByTagName('li')[0].innerHTML = 'HELLO ' + document.getElementById('items').getElementsByTagName('li')[0].innerHTML;











