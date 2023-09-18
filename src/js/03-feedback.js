import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

const saveToLocalStorage = () => {const formData = {
email: emailInput.value,
message: messageTextarea.value,};
localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const fillFormFromLocalStorage = () => {const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
emailInput.value = formData.email || '';messageTextarea.value = formData.message || '';
};

const handleInput = throttle(() => {saveToLocalStorage();
}, 500);

emailInput.addEventListener('input', handleInput);
messageTextarea.addEventListener('input', handleInput);

fillFormFromLocalStorage();

feedbackForm.addEventListener('submit', (e) => {
e.preventDefault();

const formData = {
   email: emailInput.value,
   message: messageTextarea.value,
};
console.log(formData);

localStorage.removeItem('feedback-form-state');

emailInput.value = '';
messageTextarea.value = '';
});

