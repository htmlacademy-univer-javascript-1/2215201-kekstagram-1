import {generatePosts} from './util';
import {renderBigPicture} from './bigPicture';

const template = document.querySelector('#picture').content;
const newTemplate = template.querySelector('.picture');

const photos = document.querySelector('.pictures');
const factor = document.createDocumentFragment();

const renderPicture = ({url, likes, comments, description}) => {
  const cloneOfPicture = newTemplate.cloneNode(true);
  cloneOfPicture.querySelector('img').src = url;
  cloneOfPicture.querySelector('.picture__likes').textContent = likes;
  cloneOfPicture.querySelector('.picture__comments').textContent = comments.length;

  cloneOfPicture.addEventListener('click', (evt) => {
    evt.preventDefault();
    renderBigPicture({url, likes, comments, description});
  });

  factor.appendChild(cloneOfPicture);
};

const renderPictures = (pictures) => {
  for (let i = 0; i < pictures.length; i++) {
    renderPicture(pictures[i]);
  }
  photos.appendChild(factor);
};

renderPictures(generatePosts(25));
