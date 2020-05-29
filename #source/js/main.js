
var navToggle = document.querySelector('.nav-toggle');
var nav = document.querySelector('.nav');

function toggleNav(){
	 nav.classList.toggle('nav--visible');
};
navToggle.addEventListener('click', toggleNav);
//hide or show footers columns
function hideOrShowColumn(el){
	var width = document.documentElement.clientWidth;	
	if(width < 990){
		el.target.classList.toggle('active');
		var next = el.target.nextElementSibling; 
		next.classList.toggle('visible');
	};		
};
var titles = document.getElementsByClassName('footer__col--title');
for (var i=0; i<titles.length; i++){
	titles[i].addEventListener('click', hideOrShowColumn);
};


function tab(){		
	var tabNav = document.getElementsByClassName('tabs__item');	
	var tabBlock = document.getElementsByClassName('tabs__block');
	var tabName;	

	function selectTabNav(){		
		for(var i=0; i<tabNav.length; i++){
			tabNav[i].classList.remove('is-active');
		};
		this.classList.add('is-active');
		tabName = this.getAttribute('data-tab-name');
		selectTabBlock(tabName);
	}

	function selectTabBlock(tabName){		
		for (var i=0; i<tabBlock.length; i++){
			tabBlock[i].classList.contains(tabName) ? tabBlock[i].classList.add('is-active') : tabBlock[i].classList.remove('is-active');
		};
	}

	for(var i=0; i<tabNav.length; i++ ){
		tabNav[i].addEventListener('click',selectTabNav)
	};	
};
tab();

function showSlides(){
	

	function selectSlide(){
		var slidesName = this.getAttribute('data-slides-name');
		var slidesArr = document.getElementsByClassName(slidesName);
		var direction, index;
		this.classList.contains('next') ? direction = 1 : direction = -1;
		for (var i=0; i<slidesArr.length; i++ ){
			if(slidesArr[i].classList.contains('is-active')){
				slidesArr[i].classList.remove('is-active');
				index = i;
				if(direction===1 && index===slidesArr.length-1){
					 index=0 
				} else {				
					if(direction===-1 && index===0){
						index=slidesArr.length-1
					}else{index += direction}
				};
			};
		};	
		slidesArr[index].classList.add('is-active');
	};

	var slideButtons = document.getElementsByClassName('slide-button');
	for (var i=0; i<slideButtons.length; i++){
		slideButtons[i].addEventListener('click', selectSlide );
	};
};
showSlides();

	