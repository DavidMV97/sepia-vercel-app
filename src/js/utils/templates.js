import { escapeRegExp } from './functions';

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






export { printImg, printTitle, printDetails, printColors, printWarranty, printFeatures, printSpecs };