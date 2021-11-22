/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {

;// CONCATENATED MODULE: ./src/js/utils/functions.js
function removeActive(items) {
    items.forEach(item => {
        item.classList.remove('active');
        item.classList.add('hide');
    });
}

function escapeRegExp(str) {
    return str.replace(/[^a-zA-Z ]/g, "")
        .split(" ").join("-")
        .toLowerCase();
}



;// CONCATENATED MODULE: ./src/js/utils/templates.js


const printImg = (object, id, containierDiv) => {
    let fragment = document.createDocumentFragment();
    for (let item of object) {
        let contiainerImge = document.createElement('div');
        contiainerImge.classList.add('item-img');
        let htmImg = document.createElement('img');
        htmImg.classList.add('img-ralated');
        htmImg.setAttribute('src', item[id]);
        contiainerImge.append(htmImg);
        fragment.append(contiainerImge);
    }
    containierDiv.append(fragment);
}

const printDetails = (object, containerDiv) => {
    let fragment = document.createDocumentFragment();
    let fragmentDescription = document.createDocumentFragment();
    //contenedor principal
    let containierDetails = document.createElement('div');
    containierDetails.classList.add('container-details');
    //contenedor titulos
    let containerTitle = document.createElement('div');
    containerTitle.classList.add('details-title');
    //contenedor descripcion 
    let contaierDescription = document.createElement('div');
    contaierDescription.classList.add('details-description');

    for (let item of object) {
        let spanTitle = document.createElement('span');
        let description = document.createElement('p');

        spanTitle.setAttribute('data-name', escapeRegExp(item.name));
        spanTitle.classList.add('details-title-span');
        description.classList.add(escapeRegExp(item.name));

        description.textContent = item.description;
        spanTitle.textContent = item.name;
        fragment.append(spanTitle);
        fragmentDescription.append(description);
    }
    containerTitle.append(fragment);
    contaierDescription.append(fragmentDescription);
    containierDetails.append(containerTitle, contaierDescription);
    containerDiv.append(containierDetails);
}

const printColors = (object, containerDiv) => {
    let fragment = document.createDocumentFragment();
    let containerColors = document.createElement('div');
    containerColors.classList.add('container-colors');
    containerColors.innerHTML = '<span>Choose your finis.</span>';

    for (let item of object) {
        let containerItem = document.createElement('div');
        containerItem.classList.add('item-color');
        let nameColor = document.createElement('span');
        let descriptionColor = document.createElement('p');
        descriptionColor.textContent = item.description;
        nameColor.textContent = item.name;
        containerItem.append(nameColor, descriptionColor);
        fragment.append(containerItem);
    }
    containerColors.append(fragment);
    containerDiv.append(containerColors);
}
const printWarranty = (object, containerDiv) => {
    let fragment = document.createDocumentFragment();
    let containerWarranty = document.createElement('div');
    containerWarranty.classList.add('container-warranty');
    containerWarranty.innerHTML = '<span>Would you like to add to extended warranty coverage ? </span>';

    for (let item of object) {
        let containerItem = document.createElement('div');
        containerItem.classList.add('container-item');
        let nameWarranty = document.createElement('span');
        let descriptionColor = document.createElement('p');
        descriptionColor.textContent = item.description;
        nameWarranty.textContent = item.name;
        containerItem.append(nameWarranty, descriptionColor);
        fragment.append(containerItem);
    }
    containerWarranty.append(fragment);
    containerDiv.append(containerWarranty);
}

const printFeatures = (object, containerDiv) => {
    let fragment = document.createDocumentFragment();
    let containerFeatures = document.createElement('div');
    containerFeatures.classList.add('container-features');
    containerFeatures.innerHTML = '<span>Features </span>';

    for (let item of object) {
        let containerItem = document.createElement('div');
        containerItem.classList.add('container-item');
        let nameFeatures = document.createElement('span');
        let descriptionFeatures = document.createElement('p');

        descriptionFeatures.textContent = item.additionalValue;
        nameFeatures.textContent = item.name;
        containerItem.append(nameFeatures, descriptionFeatures);
        fragment.append(containerItem);
    }
    containerFeatures.append(fragment);
    containerDiv.append(containerFeatures);
}

const printSpecs = (objet, containerDiv) => {
    let fragment = document.createDocumentFragment();
    let containerSpecs = document.createElement('div');
    containerSpecs.classList.add('container-specs');
    containerSpecs.innerHTML = '<span class="title" >Specifications </span>';
    for (let [key, value] of Object.entries(objet)) {
        let containerItem = document.createElement('div');
        containerItem.classList.add('item-specs');

        let name = document.createElement('p');
        let valueSpec = document.createElement('span');
        valueSpec.textContent = value;
        name.textContent = key;
        containerItem.append(name, valueSpec);
        fragment.append(containerItem);
    }
    containerSpecs.append(fragment);
    containerDiv.append(containerSpecs);
}



const printTitle = (title, description, price) => {
    const template = `
    <div class="title-description">
        <div class="title"> 
          <span> NEW ELASE </span>
          <h2> ${title} </h2>
          <p> ${description} </p>
        </div>
        <div class="price">
          <span>STARTING AT</span>
          <p> ${price} </p>
        </div>
    </div>
  `;
    return template;
};







;// CONCATENATED MODULE: ./src/js/getDataApi.js


const getDataApi = () => {

    function getData(enpoint) {
        return fetch(enpoint)
            .then((response) => response.json())
            .then((json) => {
                return json
            });
    }

    async function showData() {
        try {
            let ResultData = await getData('https://frontend-interview-api-sepia.vercel.app/api/items');
            let data = ResultData[0];
            let descriptionRight = document.querySelector('.description-right');
            let mainImgLeft = document.querySelector('.related-img');
            let srcMainImg = document.querySelector('.main-img img');

            const { title, description, price, details, colors, warranty, features, specs, images } = data;
            //title , price, description
            descriptionRight.insertAdjacentHTML('beforeend', printTitle(title, description, price));
            //details
            printDetails(details, descriptionRight);
            //colors
            printColors(colors, descriptionRight);
            //warranyt
            printWarranty(warranty, descriptionRight);
            //features
            printFeatures(features, descriptionRight);
            //specs
            printSpecs(specs, descriptionRight);
            //main img left 
            printImg(data.images, 'x1', mainImgLeft);
            srcMainImg.setAttribute('src', images[0].x1);
            mainImgLeft.firstChild.classList.add('active');

        } catch (error) {
            console.log(error);
        }
    }

    showData();


}


/* harmony default export */ const js_getDataApi = (getDataApi);
;// CONCATENATED MODULE: ./src/js/main.js



document.addEventListener('DOMContentLoaded', (e) => {
    js_getDataApi();

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
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=main.js.map