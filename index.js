const initialButtonElement = document.querySelector('.button_type_start');
const popupElement = document.querySelector('.popup');
const bgLayerElement = document.querySelector('.bg-layer');
const formElement = document.querySelector('.form');
const userDataElement = document.querySelector('.user-data');

initialButtonElement.addEventListener('click', openPopupForm);
formElement.addEventListener('submit', sendFormData);
bgLayerElement.addEventListener('click', closePopupForm);

function openPopupForm() {
    popupElement.classList.remove('popup_hidden');
    bgLayerElement.classList.remove('bg-layer_hidden');
}

function closePopupForm() {
    popupElement.classList.add('popup_hidden');
    bgLayerElement.classList.add('bg-layer_hidden');
}

function sendFormData(e) {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const surname = document.querySelector('#surname').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;

    const userData = {
        name,
        surname,
        email,
        password,
        confirmPassword
    }

    userDataElement.innerText = `Ваши данные в формате JSON - ${JSON.stringify(userData, null, "\t")}`;

    closePopupForm();
    initialButtonElement.classList.add('button_hidden');

    formElement.reset();
}