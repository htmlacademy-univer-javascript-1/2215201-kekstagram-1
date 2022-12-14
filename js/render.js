import {generatePosts} from './util.js';
import {openPicture} from './bigPicture.js';
import {renderUploadForm} from './uploaderForm.js';
import {initialEffects} from './effects.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');
const pictureContainer = document.createDocumentFragment();

const renderPicture = ({url, likes, comments, description}) => {
  const cloneOfPicture = template.cloneNode(true);
  cloneOfPicture.querySelector('.picture__img').src = url;
  cloneOfPicture.querySelector('.picture__likes').textContent = likes;
  cloneOfPicture.querySelector('.picture__comments').textContent = comments.length;

  cloneOfPicture.addEventListener('click', (evt) => {
    evt.preventDefault();
    openPicture({url, likes, comments, description});
  });

  pictureContainer.append(cloneOfPicture);
};

const renderPictures = (pictures) => {
  for (let i = 0; i < pictures.length; i++) {
    renderPicture(pictures[i]);
  }
  picturesList.append(pictureContainer);
};

// renderPictures(generatePosts(25));
// renderUploadForm();
// initialEffects();

export {renderPictures};

