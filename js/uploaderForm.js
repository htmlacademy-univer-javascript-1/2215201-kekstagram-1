import {isEscape} from './util.js';
import {pristine, hashtagsHandler, commentHandler, error} from './pristine-helper-forms.js';

const body = document.querySelector('body');
const uploader = document.querySelector('.img-upload__overlay');
const closeButtonUploader = document.querySelector('.img-upload__cancel');
const uploadField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const formUpload = document.querySelector('.img-upload__form');


const closeUploadPopup = () => {
  uploader.classList.add('hidden');
  body.classList.remove('modal-open');
  formUpload.reset();
};

const possibleEscButtonAction = (evt) => {
  if (isEscape(evt)) {
    closeUploadPopup();
    document.removeEventListener('keydown', possibleEscButtonAction);
  }
};

const addListenerForField = (field) => {
  field.addEventListener('focus', () => {
    document.removeEventListener('keydown', possibleEscButtonAction);
  });
  field.addEventListener('blue', () => {
    document.addEventListener('keydown', possibleEscButtonAction);
  });
};

const clickClose = () => {
  closeUploadPopup();
  document.removeEventListener('keydown', possibleEscButtonAction);
};

const helper = () => {
  document.querySelector('.img-upload__submit').disabled = !pristine.validate();
};

const imgUploaderFormOpen = () => {
  uploader.classList.remove('hidden');
  body.classList.add('modal-open');
  closeButtonUploader.addEventListener('click', clickClose);
  document.addEventListener('keydown', possibleEscButtonAction);
  addListenerForField(hashtagField);
  addListenerForField(commentField);
  helper();
};

const renderUploadForm = () => {
  uploadField.addEventListener('change', imgUploaderFormOpen);
  hashtagField.addEventListener('input', helper);
  commentField.addEventListener('input', helper);
  pristine.addValidator(hashtagField, hashtagsHandler, error);
  pristine.addValidator(commentField, commentHandler, error);
  helper();
};

export {renderUploadForm};
