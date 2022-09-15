import {generatePosts} from './util';

const template = document.querySelector('#picture').content;
const newTemplate = template.querySelector('.picture');

const photos = document.querySelector('.pictures');
const factor = document.createDocumentFragment();

const renderPictures = (posts) => {
  posts.forEach((post) =>
  {
    const cloneOfPicture = newTemplate.cloneNode(true);
    cloneOfPicture.querySelector('img').src = post.url;
    cloneOfPicture.querySelector('.picture__likes').textContent = post.likes;
    cloneOfPicture.querySelector('.picture__comments').textContent = post.comments.length;

    factor.appendChild(cloneOfPicture);
  });

  photos.appendChild(factor);
};

renderPictures(generatePosts(25));

