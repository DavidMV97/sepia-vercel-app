import getDataApi from './getDataApi'; 

document.addEventListener('DOMContentLoaded', (e) => {
  getDataApi(); 

  let mainLeftImg = document.querySelector('.main-img-left');
  console.log(window.innerWidth);
  document.addEventListener('scroll', event => {
    //if (window.innerWidth < 768) return ;
     let top = window.pageYOffset ; 
     if (top > 1) {
      mainLeftImg.classList.add('fixed');
     }else{
       mainLeftImg.classList.remove('fixed');
     }
  })

  mainLeftImg.addEventListener('click', (e) => {
    let target = e.target ; 
    if (target.classList.contains('item-img') ) {
      let allItems = document.querySelectorAll('.item-img'); 
      let srcMainImg = document.querySelector('.main-img img');
      let currentImgSrc = target.querySelector('img').getAttribute('src');
      srcMainImg.setAttribute('src', currentImgSrc);
      
      if (target.classList.contains('active')) {
        target.classList.remove('active');
      }else{
        removeActive(allItems);
        target.classList.add('active');
      }
    }

  });

  function removeActive(items) {
    items.forEach(item => {
      item.classList.remove('active');
    });
    
  }


});