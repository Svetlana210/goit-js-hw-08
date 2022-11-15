import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
}



refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);




function onFormInput(e) {
    // e.preventDefault();
    // const input = {
    //     email: refs.form.elements.email.value,
    //     message: refs.form.elements.message.value,
    // };
   const input = {
        email: refs.email.value,
        message: refs.message.value,
    };
    // console.log(e.target.form.elements.email.value);
    // console.log(e.target.form.elements.message.value)
  localStorage.setItem('feedback-form-state', JSON.stringify(input));

    
};

  function onFormSubmit(e) {
    e.preventDefault();
    const {
      elements: { email, message }
    } = e.target;
    console.log({ email: email.value, message: message.value })
    refs.form.reset();
    localStorage.removeItem('feedback-form-state');
  }


const storage = localStorage.getItem('feedback-form-state');
const parseStorage = JSON.parse(storage);
// console.log(storage)
// console.log(parseStorageData)
function saveTextInInputs() {
  if (parseStorage) {
    refs.email.value = parseStorage.email;
    refs.message.value = parseStorage.message;
   }
}
saveTextInInputs();

// или if(parseStorage !== null) Репета c 17мин null всегда false

// input c типами text, password, message, email имеют общий интерфейс и у их єл. DOM есть сво-во value