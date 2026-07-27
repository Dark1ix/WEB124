const books = [{
    title: "My Hero Academia",
    author: "Kohei Horikoshi",
    aages: 8152
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
console.log("UL Element:");
console.log(ul);

const firstli = ul.children[0];
console.log("First lI:");
console.log(firstli);

console.log("Parent of li:");
console.log(firstli.parentElement);

console.log("Sibling of li:");
console.log(firstli.nextElementSibling);

console.log("Text inside lI:");
console.log(firstli.textContent);

console.log("Node Type:");
console.log(firstli.nodeType);

const heading = document.body.children[1];

console.log("Paragraph Class Name:");
console.log(heading.className);
