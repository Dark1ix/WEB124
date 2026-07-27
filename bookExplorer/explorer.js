const books = [{
    title: "My Hero Academia",
    author: "Kohei Horikoshi",
    pages: 8152
},
{
    title: "Diary of a Wimpy Kid",
    author: "Jeff Kinney",
    pages: 224
},
{
    title: "Haikyuu!!",
    author: "Haruichi Furudate",
    pages: 9064
},
{
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 165
},
{
    title: "Charlotte's Web",
    author: "E. B. White",
    pages: 192
}
];

console.log("List of Books:");

for (let book of books) {
    console.log(book);
}

console.log("Entire document:");
console.log(document);

console.log("Document body:");
console.log(document.body);

console.log("First child of the body:");
console.log(document.body.firstElementChild);

console.log("All children of the body:");
console.log(document.body.children);

const ul = document.body.children[2];
console.log("ul element:");
console.log(ul);

const firstli = ul.children[0];
console.log("First li:");
console.log(firstli);

console.log("Parent of li:");
console.log(firstli.parentElement);

console.log("Sibling of li:");
console.log(firstli.nextElementSibling);

console.log("Text inside li:");
console.log(firstli.textContent);

console.log("Node Type:");
console.log(firstli.nodeType);

const heading = document.body.children[0];

console.log("Heading Class Name:");
console.log(heading.className);
/*
What is the DOM tree?
The DOM (Document Object Model) tree presents the HTML structure of the website in the console memmory.

What is a node in the DOM?
A node represents any single object in the tree. This could be a simple text string, markup tag or comments.

What is the difference between a parent and a child node?
A parent node is the top hiearchial element in the DOM, 
it's similar to a family tree where the grandparents would be on the top. 
Child node is the inner element inside that parent node, 
similar to the parents being under grandparents on a family tree.

What is a sibling node?
A sibling node is any node that shares the same parent as another node,
similar to siblings on a family tree hence the name.

*/
