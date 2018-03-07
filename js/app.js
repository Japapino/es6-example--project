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
const textSize = document.querySelector('main');
let clickReduce = () => textSize.style.fontSize = '5px'; 
textSize.addEventListener('click', clickReduce); 
// Change the text in the footer when the user clicks it
const footerText = document.querySelector('footer p');
const clickChange = () => footerText.innerText = "i make change";
footerText.addEventListener('click', clickChange); 

// Remove the h1 element in the header
var headerLogo = document.querySelector('header h1'); 
headerLogo.remove(); 

// Put something in the place of the h1 in the header
const newHeader = document.querySelector('header'), 
newLogo = document.createElement('h2');
newLogo.innerText = 'LOGO';
newHeader.prepend(newLogo); 

// Change the text in one of the paragraph tags in the main element
const mainParagraphs = document.querySelectorAll('main p'); 
mainParagraphs[2].innerText = 'CHANGED FOR THE BETTER';
mainParagraphs[2].style.backgroundColor = 'blanchedalmond'; 

// Change the size of the header element to 200px using grid syntax
const headerContainer = document.querySelector('.container');
headerContainer.style.gridTemplateRows = '200px auto 125px';