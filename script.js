'use strict';

let position=0;
const slider=document.querySelector('.reviews__slider');

function arrow(){
	slider.style.opacity=0;
	function arrowTimer(){slider.style.right=position+'px';}
	setTimeout(arrowTimer,150);
	function opacityTimer(){slider.style.opacity=1;}
	setTimeout(opacityTimer,300);
}

document.querySelector('.reviews__left').addEventListener('click',function(){
	position-=900;
	if(position<0)position=3600;
	arrow();
});

document.querySelector('.reviews__right').addEventListener('click',function(){
	position+=900;
	if(position>3600)position=0;
	arrow();
});

document.querySelector('.portfolio__button--4').addEventListener('click',function(){
	document.querySelector('.portfolio__item--4').classList.toggle('portfolio__item--active')
	document.querySelector('.portfolio__button--4').classList.toggle('portfolio__button--active')
});
document.querySelector('.portfolio__button--3').addEventListener('click',function(){
	document.querySelector('.portfolio__item--3').classList.toggle('portfolio__item--active')
	document.querySelector('.portfolio__button--3').classList.toggle('portfolio__button--active')
});
document.querySelector('.portfolio__button--2').addEventListener('click',function(){
	document.querySelector('.portfolio__item--2').classList.toggle('portfolio__item--active')
	document.querySelector('.portfolio__button--2').classList.toggle('portfolio__button--active')
});
document.querySelector('.portfolio__button--1').addEventListener('click',function(){
	document.querySelector('.portfolio__item--1').classList.toggle('portfolio__item--active')
	document.querySelector('.portfolio__button--1').classList.toggle('portfolio__button--active')
});

const anchors=document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors){
	anchor.addEventListener('click',function(event){
		event.preventDefault();
		const blockID=anchor.getAttribute('href')
		document.querySelector(''+blockID).scrollIntoView({
			behavior:'smooth',
			block:'start'
		})
	})
}

document.querySelector('.price-list__item--1').addEventListener('click',function(){
	document.querySelector('.popup-price-list__item--1').style.display='flex';
});
document.querySelector('.price-list__item--2').addEventListener('click',function(){
	document.querySelector('.popup-price-list__item--2').style.display='flex';
});
document.querySelector('.price-list__item--3').addEventListener('click',function(){
	document.querySelector('.popup-price-list__item--3').style.display='flex';
});
document.querySelector('.price-list__item--4').addEventListener('click',function(){
	document.querySelector('.popup-price-list__item--4').style.display='flex';
});

document.querySelector('.popup-price-list__item--1').addEventListener('click',function(){
	document.querySelector('.popup-price-list__item--1').style.display='none';
});
document.querySelector('.popup-price-list__item--2').addEventListener('click',function(){
	document.querySelector('.popup-price-list__item--2').style.display='none';
});
document.querySelector('.popup-price-list__item--3').addEventListener('click',function(){
	document.querySelector('.popup-price-list__item--3').style.display='none';
});
document.querySelector('.popup-price-list__item--4').addEventListener('click',function(){
	document.querySelector('.popup-price-list__item--4').style.display='none';
});