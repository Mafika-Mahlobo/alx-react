import $ from "jquery";

const paragraph1 = document.createElement("p");
const paragraph2 = document.createElement("p");
const paragraph3 = document.createElement("p");

paragraph1.textContent = "Holberton Dashboard";
paragraph2.textContent = "Dashboard data for the students";
paragraph3.textContent = "Copyright - Holberton School";

document.body.appendChild(paragraph1);
document.body.appendChild(paragraph2);
document.body.appendChild(paragraph3);