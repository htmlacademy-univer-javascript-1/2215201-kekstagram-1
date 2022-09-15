const template = document.querySelector('#picture').content;
const newPicture = template.querySelector('.picture');
const photos = document.querySelector('.pictures');

const renderPicture = (url, amountOfLikes, amountOfComments) => {
  const cloneOfPicture = newPicture.cloneNode(true);
  const out = document.createDocumentFragment();

  const newUrl = cloneOfPicture.querySelector('img');
  newUrl.src = url;

  const newLikes = cloneOfPicture.querySelector('.picture__likes');
  newLikes.textContent = amountOfLikes;

  const newComments = cloneOfPicture.querySelector('.picture__comments');
  newComments.textContent = amountOfComments;

  out.appendChild(cloneOfPicture);
  photos.appendChild(out);
};

const generateSomePictures = () => {
  for (let i = 0 ; i < 25; i++) {
    renderPicture(`./photos/${i}.jpg`, i * 3, i * 1);
  }
};

export {generateSomePictures};
