const list = document.querySelector('.book-lists');
const add = document.querySelector('.addnewbook');
const contact = document.querySelector('.contact');
const listlink = document.querySelector('.list-link');
const addlink = document.querySelector('.add-link');
const contactlink = document.querySelector('.contact-link');

listlink.addEventListener('click', () => {
  list.style.display = 'block';
  listlink.style.color = 'blue';
  contactlink.style.color = 'black';
  addlink.style.color = 'black';
  add.style.display = 'none';
  contact.style.display = 'none';
});

addlink.addEventListener('click', () => {
  add.style.display = 'block';
  list.style.display = 'none';
  contact.style.display = 'none';
  listlink.style.color = 'black';
  contactlink.style.color = 'black';
  addlink.style.color = 'blue';
});

contactlink.addEventListener('click', () => {
  contact.style.display = 'block';
  list.style.display = 'none';
  add.style.display = 'none';
  listlink.style.color = 'black';
  contactlink.style.color = 'blue';
  addlink.style.color = 'black';
});
