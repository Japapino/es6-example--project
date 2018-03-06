// Make h1 in header have different text
const header = document.querySelector('h1'); 
header.innerText= "new text!!!"; 
// Make nav ul li elements get larger when you hover over them
const list = document.querySelector('ul');
let largerHover = () => list.style.fontSize = '40px';
let smallerLeave = () => list.style.fontSize = '20px';
list.addEventListener('mouseenter', largerHover); 
list.addEventListener('mouseleave', smallerLeave); 
	 
// Add another element to the main element
let addToMain = document.querySelector('main'); 
let newText = document.createElement('p'); 
newText.innerHTML = ("<p>NEW THING!!!?!?!</p>"); 
addToMain.append(newText); 

// Dynamically change the color of the background on the footer when the user hovers over it
const bottom = document.querySelector('footer'); 
let mouseOver = () => bottom.style.backgroundColor = 'red';
let mouseGone = () => bottom.style.backgroundColor = 'green';
bottom.addEventListener('mouseenter', mouseOver);
bottom.addEventListener('mouseleave', mouseGone); 

// Change the font size of the paragraphs in the main element when the user clicks them

// Change the text in the footer when the user clicks it
// Remove the h1 element in the header
// Put something in the place of the h1 in the header
// Change the text in one of the paragraph tags in the main element
// Change the size of the header element to 200px using grid syntax
