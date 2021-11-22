import getDataApi from './getDataApi';
import { removeActive } from './utils/functions';

document.addEventListener('DOMContentLoaded', (e) => {
    getDataApi();

    let mainLeftImg = document.querySelector('.main-img-left');
    //Bloque lateral derecho 
    let descriptionRight = document.querySelector('.description-right');
    document.addEventListener('scroll', event => {
        //if (window.innerWidth < 768) return ;
        let top = window.pageYOffset;
        if (top > 1) {
            mainLeftImg.classList.add('fixed');
        } else {
            mainLeftImg.classList.remove('fixed');
        }
    })

    mainLeftImg.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('item-img')) {
            let allItems = document.querySelectorAll('.item-img');
            let srcMainImg = document.querySelector('.main-img img');
            let currentImgSrc = target.querySelector('img').getAttribute('src');
            srcMainImg.setAttribute('src', currentImgSrc);

            if (target.classList.contains('active')) {
                target.classList.remove('active');
            } else {
                removeActive(allItems);
                target.classList.add('active');
            }
        }
    });

    descriptionRight.addEventListener('click', (e) => {
        let target = e.target;

        if (target.classList.contains('details-title-span')) {
            let allItems = document.querySelectorAll('.details-title-span');

            //Item active
            if (target.classList.contains('active')) {
                target.classList.remove('active');
            } else {
                removeActive(allItems);
                target.classList.add('active');
                target.classList.remove('hide');
            }
            //capturar el valor del atributo personalizado
            let value = target.getAttribute('data-name');
            let allDescription = document.querySelectorAll('.details-description p');

            allDescription.forEach(description => {
                console.log(description);
                if (description.classList.contains(value)) {
                    description.classList.add('active');
                    description.classList.remove('hide');
                } else {
                    description.classList.remove('active');
                    description.classList.add('hide');
                }
            });
        }

    })

});