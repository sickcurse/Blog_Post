const backLink = document.getElementById('back');

if (backLink) {
  backLink.addEventListener('click', () => {
    history.back(); 
  });
}


const form = document.getElementById('form');
const errorSpan = document.getElementById('error');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  if (!username || !title || !content) {
    errorSpan.textContent = "Please fill out all fields.";
  } else {
    errorSpan.textContent = ""; 
    
  }
});