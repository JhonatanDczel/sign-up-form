const pwd1 = document.querySelector('#user-password');
const pwd2 = document.querySelector('#user-password-2');

function changeStatus() {
  let current_status = pwd2.dataset.status === 'valid' ? 'invalid' : 'valid';
  console.log(current_status + pwd2.dataset.status + pwd2.validity.valid);
}
