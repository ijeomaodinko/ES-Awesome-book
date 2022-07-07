/* eslint-disable */
// import { createBookElement } from "./module/createbook.js";
import {
  displayaddnew,
  displaycontact,
  displaylist,
} from "./module/display.js";
import { DateTime } from "./module/luxon.js";
import {
  createBookElement,
  removeall,
  addtocollection,
  updatePage,
} from "./module/main.js";

createBookElement();
removeall();
addtocollection();
updatePage();

// to display the current date on the website
const date = document.querySelector(".date");
const setDataTime = () => {
  const now = DateTime.now();
  const datedisplay = now.toLocaleString(DateTime.DATETIME_FULL);
  date.innerHTML = datedisplay;
};
setDataTime();

// to attach the class to a variable names that will help in diplaying of website
const list = document.querySelector(".list");
const addNew = document.querySelector(".addnew");
const contact = document.querySelector(".contact");

displaylist();
displayaddnew();
displaycontact();

// to display each of the websites
list.addEventListener("click", displaylist);
addNew.addEventListener("click", displayaddnew);
contact.addEventListener("click", displaycontact);
