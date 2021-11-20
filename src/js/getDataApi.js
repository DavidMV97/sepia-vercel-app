import { printImg, printTitle , printDetails, printColors, printWarranty, printFeatures, printSpecs } from "./utils/templates";

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

      const { title, description, price , details, colors, warranty, features ,specs, images } = data ; 
      //title , price, description
      descriptionRight.insertAdjacentHTML('beforeend' , printTitle(title, description, price));
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
      srcMainImg.setAttribute('src', images[0].x1 ); 
      mainImgLeft.firstChild.classList.add('active');

    } catch (error) {
      console.log(error);
    }
  }

  showData();


}


export default getDataApi;