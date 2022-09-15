import {posts} from './main';

const template = document.querySelector('#picture').content;
const newPicture = template.querySelector('.picture');
const photos = document.querySelector('.pictures');

const renderPicture = (url, amountOfLikes, amountOfComments) => {
  const cloneOfPicture = newPicture.cloneNode(true);
  const factor = document.createDocumentFragment();

  cloneOfPicture.querySelector('img').src = url;
  cloneOfPicture.querySelector('.picture__likes').textContent = amountOfLikes;
  cloneOfPicture.querySelector('.picture__comments').textContent = amountOfComments;

  factor.appendChild(cloneOfPicture);
  photos.appendChild(factor);
};

const generateSomePictures = (blogs) => {
  for (let i = 0; i < blogs.length; i++) {
    renderPicture(blogs[i].url, blogs[i].likes, blogs[i].comments.length);
  }
};

generateSomePictures(posts);
