const formEl = ddocument.getElementById('form');

const form = document.getElementById('form');
const errorSpan = document.getElementById('error');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameEl = document.getElementById('username').value.trim();
    const titleEl = document.getElementById('title').value.trim();
    const contentEl = document.getElementById('content').value.trim();

    if (!username || !title || !content) {
        errorSpan.textContent = 'Please fill out all fields.';
        setTimeout(() => errorSpan.textContent = '', 3000);
    } else {
        errorSpan.textContent = ''; 
    }

    const formData = {
        username: usernameEl,
        title: titleEl,
        content: contentEl,
      };

      storeLocalStorage(formData);
      redirectPage();
});