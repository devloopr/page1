// API CALL

const apiURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=lpfGQ8evkxLdltBxlnmcfpgdD8Lfp3ha4UAsfaNa";
const container = document.getElementById("gallery");

const openModal = (imgSrc) => {
  console.log(imgSrc);

  const ImgModal = document.getElementById("ImgModal");
  ImgModal.style = "display: block";

  const CloseImgModalButton = document.getElementById("CloseImgModalButton");
  CloseImgModalButton.style = "display: block";

  const imgContainer = document.getElementById("ImgContainer");
  imgContainer.src = imgSrc;

  const backdropOverlay = document.getElementById("overlay");
  backdropOverlay.style = "display: block";
};

// GALLERY MODAL

const closeModal = () => {
  console.log("asd");

  const ImgModal = document.getElementById("ImgModal");
  ImgModal.style = "display: none";

  const CloseImgModalButton = document.getElementById("CloseImgModalButton");
  CloseImgModalButton.style = "display: none";

  const backdropOverlay = document.getElementById("overlay");
  backdropOverlay.style = "display: none";
};

fetch(apiURL)
  .then((response) => response.json())
  .then((json) => {
    console.log(json.photos);
    let html = "";
    json.photos.forEach((el) => {
      html += `
                <img src="${el.img_src}" class="gallery_img" onClick="openModal('${el.img_src}')" alt="Photo from mars taken by: ${el.rover.name}">
              
         
      
      
      
      `;
    });
    container.innerHTML = html;
  });

// FORM VALIDATION

function validate() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "12px";

  var text;
  if (name.length < 3) {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 30) {
    text = "Please Enter More Than 30 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}
