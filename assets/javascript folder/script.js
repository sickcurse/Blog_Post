const backLink = document.getElementById('back');

if (backLink) {
  backLink.addEventListener('click', () => {
    history.back(); 
  });
}