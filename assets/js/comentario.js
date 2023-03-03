const formComment = document.querySelector('#formComment');
const txtComment = document.querySelector('#txtComment');
const commentList = document.querySelector('#commentList');
const alertMessage = document.querySelector('#alertMessage')

formComment.addEventListener('submit', (event) => {
  event.preventDefault();
  const li = document.createElement('li');
  li.style.listStyleType = 'none';
  li.textContent = txtComment.value;

  var text = document.querySelector("#txtComment").value;
  if (!text) {
    alertMessage.textContent = "Por favor, digite um comentário!";
    alertMessage.style.display = "block";
    setTimeout(() => {
      alertMessage.style.display = "none";
    }, 2000);
    return;
  }

  const date = new Date();
  const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  
  const dateComent = document.createElement('p');
  dateComent.textContent = dateString;

  const btnRemove = document.createElement('button');
  btnRemove.textContent = 'Remover';
  btnRemove.addEventListener("click", () => li.remove());

  li.appendChild(btnRemove);
  commentList.appendChild(li);
  li.appendChild(dateComent);
  txtComment.value = '';
});