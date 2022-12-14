import {isStrSizeAcceptable} from './util.js';

const MAX_SYMBOLS = 20;
const MAX_HASHTAGS = 5;
const MAX_DESCRIPTION_LENGHT = 140;

const formUpload = document.querySelector('.img-upload__form');

const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__item',
  errorClass: 'img-upload__item--invalid',
  successClass: 'img-upload__item--valid',
  errorTextParent: 'img-upload__item',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
});

const inputHashtag = document.querySelector('.text__hashtags');

let errorMessage = '';

const error = () => errorMessage;

const hashtagsHandler = (value) => {
  errorMessage = '';

  const inputText = value.toLowerCase().trim();

  if (!inputText) {
    return true;
  }

  const inputArray = inputText.split(/\s+/);

  if (inputArray.length === 0) {
    return true;
  }

  const rules = [
    {
      check: inputArray.some((item) => item.indexOf('#', 1) >= 1),
      error: 'Хэш-теги разделяются пробелами'
    },
    {
      check: inputArray.some((item) => item[0] !== '#'),
      error: 'Хэш-тег должен наичнаться с символа #'
    },
    {
      check: inputArray.some((item) => item.length > MAX_SYMBOLS),
      error: `Максимальная длина одного хэш-тега ${MAX_SYMBOLS} символ, включая решётку`
    },
    {
      check: inputArray.some((item, num, arr) => arr.includes(item, num + 1)),
      error: 'Хэш-теги не должны повторяться'
    },
    {
      check: inputArray.length > MAX_HASHTAGS,
      error: `Нельзя указать больше ${MAX_HASHTAGS} хэш-тегов`
    },
    {
      check: inputArray.some((item) => !/^#[a-zа-яё0-9]{1,19}$/i.test(item)),
      error: 'Хэш-тег содержит недопустимые символы'
    }
  ];

  return rules.every((rule) => {
    const isInvalid = rule.check;
    if (isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};

pristine.addValidator(inputHashtag, hashtagsHandler, error, 2, false);

const onHashtagInput = () => {
  if (pristine.validate()) {
    document.querySelector('.img-upload__submit').classList.remove('disabled');
  } else {
    document.querySelector('.img-upload__submit').classList.add('disabled');
  }
};

const commentHandler = (value) => {
  errorMessage = '';
  const text = value.trim();
  if (!text) {
    return true;
  }

  const rule = {
    check: isStrSizeAcceptable(text, MAX_DESCRIPTION_LENGHT),
    error: 'Слишком длинный комментарий'
  };

  const isValid = rule.check;
  if (!isValid) {
    errorMessage = rule.error;
  }
  return isValid;
};

inputHashtag.addEventListener('input', onHashtagInput);

formUpload.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export {pristine, commentHandler, hashtagsHandler, error};
