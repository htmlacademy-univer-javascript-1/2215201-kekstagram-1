import {generatePosts} from './util';
import {generateSomePictures} from './render';

generateSomePictures();

// Если я правильно понял, то данные для этого задания мы берём 'условно' рандомные.
// До сих пор не совсем разобрался, может ли этот проект запуститься (через run 'main.js') на данном этапе или это будет
//   доступно позже? (Например, для проверки коретного выполнения задания.)

const posts = generatePosts(25);
export {posts};
