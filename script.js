const button=document.querySelector('.menu-button');
const nav=document.querySelector('nav');
const menuLabel=button.querySelector('.sr-only');
const closeMenu=()=>{button.setAttribute('aria-expanded','false');menuLabel.textContent='Open menu';nav.classList.remove('open')};
button.addEventListener('click',()=>{const isOpen=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!isOpen));menuLabel.textContent=isOpen?'Open menu':'Close menu';nav.classList.toggle('open',!isOpen)});
document.querySelectorAll('nav a').forEach(link=>link.addEventListener('click',closeMenu));
document.getElementById('year').textContent=new Date().getFullYear();
const revealItems=document.querySelectorAll('.reveal');
const header=document.querySelector('.nav');
const sectionLinks=[...document.querySelectorAll('nav a[href^="#"]')];
if('IntersectionObserver' in window){
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}}),{threshold:.12});
  revealItems.forEach(item=>revealObserver.observe(item));
  const linkObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){sectionLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id))}}),{rootMargin:'-35% 0px -55% 0px'});
  document.querySelectorAll('main section[id]').forEach(section=>linkObserver.observe(section));
}else{revealItems.forEach(item=>item.classList.add('visible'))}
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>12),{passive:true});
