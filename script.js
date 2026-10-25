const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
if(toggle){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',open)})}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const form=document.getElementById('contactForm');
const note=document.getElementById('formNote');
form.addEventListener('submit',e=>{e.preventDefault();note.textContent='Thank you — your enquiry is ready to be sent. Connect this form to your preferred backend/email service before production.';form.reset();});
