const POSSIBLE_NAMES = [
  'Дмитрий',
  'Микола',
  'Клементина',
  'Деметриус',
  'Виктория',
  'user_unknown',
];

const POSSIBLE_DESCRIPTIONS = [
  'Хорошая фотография?',
  'Я решил заняться фотографией!',
  'Мяу!',
  'Как вам фото?'
];

const POSSIBLE_MESSAGE = [
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Отлично!',
  'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'
];

let usedCommentsID = [];

const getRndIntInRange = (leftNumber, rightNumber) =>
{
  if (leftNumber < 0) {leftNumber = 0;}
  if (rightNumber < 0) {rightNumber = 0;}
  if (leftNumber < rightNumber) {[leftNumber, rightNumber] = [rightNumber, leftNumber];}
  return Math.floor(Math.random() * (rightNumber + 1 - leftNumber) + leftNumber);
};

const isStrSizeAcceptable = (string, maxSize) => string.length <= maxSize;

const getUnusedID = () => {
  let tempID = getRndIntInRange(0, 999);
  while(usedCommentsID.includes(tempID))
  {
    tempID = getRndIntInRange(0, 999);
  }
  usedCommentsID.push(tempID);
  return tempID;
}

const generateComments = (amountOfComments) =>
{
  let comments = [];
  for (let i = 0; i < amountOfComments; i++)
  {
    comments.push(
      {
        id: getUnusedID(),
        avatar: `img/avatar-${getRndIntInRange(1, 6)}.svg`,
        message: POSSIBLE_MESSAGE[getRndIntInRange(0, POSSIBLE_MESSAGE.length - 1)],
        name: POSSIBLE_NAMES[getRndIntInRange(0, POSSIBLE_NAMES.length - 1)]
      }
    );
  }

  return comments;
}

const generatePosts = (amountOfPosts) =>
{
  let tempPosts = [];
  for (let i = 1; i <= amountOfPosts; i++)
  {
    tempPosts.push(
      {
        id: i,
        url: `photos/${i}.jpg`,
        description: POSSIBLE_DESCRIPTIONS[getRndIntInRange(0, POSSIBLE_DESCRIPTIONS.length - 1)],
        likes: getRndIntInRange(15, 200),
        comments: generateComments(10)
      }
    );
  }

  return tempPosts;
}

let posts = generatePosts(25); //Посты
