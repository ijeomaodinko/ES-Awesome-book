const sectionList = document.querySelector('.booklist');
const sectionForm = document.querySelector('.form');
const sectionContact = document.querySelector('.contact-information');

// to declare the functions that will used in displaying websites
const displaylist = () => {
  sectionList.classList.remove('hidden');
  sectionForm.classList.add('hidden');
  sectionContact.classList.add('hidden');
};

const displayaddnew = () => {
  sectionList.classList.add('hidden');
  sectionForm.classList.remove('hidden');
  sectionContact.classList.add('hidden');
};

const displaycontact = () => {
  sectionList.classList.add('hidden');
  sectionForm.classList.add('hidden');
  sectionContact.classList.remove('hidden');
};

export { displayaddnew, displaycontact, displaylist };
