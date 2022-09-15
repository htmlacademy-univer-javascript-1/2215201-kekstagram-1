import {generatePosts} from './util';
import {generateSomePictures} from './render';

const posts = generatePosts(25);
export {posts};

generateSomePictures(posts);
