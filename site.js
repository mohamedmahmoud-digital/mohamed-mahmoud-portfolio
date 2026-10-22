
const toggle=document.querySelector('.mobile-toggle');
const links=document.querySelector('.navlinks');
if(toggle&&links){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const form=document.querySelector('[data-contact-form]');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const name=form.querySelector('[name="name"]').value.trim();const email=form.querySelector('[name="email"]').value.trim();const message=form.querySelector('[name="message"]').value.trim();const subject=encodeURIComponent('Portfolio inquiry from '+name);const body=encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+message);window.location.href='mailto:imohamed.mahmoud280@gmail.com?subject='+subject+'&body='+body;});}
