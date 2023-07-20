function uploadPhoto() {
  const photoInput = document.getElementById('photoInput');
  photoInput.click();

  photoInput.addEventListener('change', function () {
    const photo = document.getElementById('photo');
    const file = this.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
      photo.src = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file);
    }
  });
}

function addNews() {
  const newsTitle = document.getElementById('newsTitle').value;
  const newsDescription = document.getElementById('newsDescription').value;
  const photoSrc = document.getElementById('photo').src;

  if (!newsTitle || !newsDescription || photoSrc === "images/placeholder.png") {
    alert("Please fill in all the fields and upload a photo.");
  } else {
    alert("News successfully published!");

    document.getElementById('newsTitle').value = "";
    document.getElementById('newsDescription').value = "";
    document.getElementById('photo').src = "images/placeholder.png";
  }
}

document.getElementById('uploadBtn').addEventListener('click', uploadPhoto);

document.getElementById('addNewsBtn').addEventListener('click', addNews);
