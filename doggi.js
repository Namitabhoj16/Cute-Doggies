const selector = document.querySelector(".selector");
const imagesGallery = document.querySelector(".images-gallery");

function getAllBreed() {
  const allBreedsApiUrl = "https://dog.ceo/api/breeds/list/all";

  fetch(allBreedsApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      parseJsonResponse(json);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function parseJsonResponse(json) {
  var allBreedsData = json.message;
  var breedsList = Object.keys(allBreedsData);

  selector.innerHTML = "";

  breedsList.forEach(function (breed) {
    console.log(breed);

    var listHTML = `<option> ${breed} </option>`;

    selector.innerHTML += listHTML;
  });
}

getAllBreed();

selector.addEventListener("click", function (event) {
  getImage(event.target.innerHTML.trim());

  if (event.target && event.target.nodeName == "OPTION") {
    console.log(event.target.innerHTML.trim());
  }
});

function getImage(breedName) {
  const allBreedsImageUrl = `https://dog.ceo/api/breed/${breedName}/images`;

  fetch(allBreedsImageUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      showImage(json);
    })
    .catch(function (error) {
      console.log(error);
    });
}
function showImage(json) {
  var imageList = json.message;

  imagesGallery.innerHTML = "";

  imageList.forEach(function (image) {
    console.log(image);
    imagesGallery.innerHTML += `<img src="${image}" class="image-grid"> </img>`;
  });
}
