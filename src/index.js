import { functionOne } from "./home.js";
import { contactPage } from "./contact.js";
import { menuPage } from "./menu.js";
let nav = document.createElement("nav");
let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
li1.innerHTML = "Home";

li2.innerHTML = "Menu";
li3.innerHTML = "Contact";
/*clickable li element*/

ul.append(li1, li2, li3);
nav.append(ul);

let content = document.getElementsByClassName("content");
console.log(content);
let footer = document.createElement("footer");
footer.innerHTML =
  "This is a footer for restaruatn site and created using node js and webpack.";

document.body.insertBefore(nav, content[0]);
li1.onclick = () => {
  content[0].innerHTML = "";
  content[0].append(functionOne());
  console.log(content);
};
li2.onclick = () => {
  content[0].innerHTML = "";
  content[0].append(menuPage());
};
li3.onclick = () => {
  content[0].innerHTML = "";
  content[0].append(contactPage());
};

document.body.append(footer);
