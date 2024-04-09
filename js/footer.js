// JavaScript код
const form = document.getElementById('cooperation-comment-form');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(this);

  // Відправка POST запиту на сервер
  fetch('url_for_submit', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      modal.style.display = 'block'; // Відкриття модального вікна при успішному відправленні
      form.reset(); // Очищення форми
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .catch(error => {
    alert('Error: ' + error.message); // Повідомлення про помилку
  });
});

// Закриття модального вікна по click'у на кнопці закриття або підкладці
closeButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

// Закриття модального вікна по натисканню клавіші Escape
window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
  }
});