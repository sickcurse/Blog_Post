const formEl = document.getElementById('form');

const form = document.getElementById('form');
const errorSpan = document.getElementById('error');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameEl = document.getElementById('username').value.trim();
    const titleEl = document.getElementById('title').value.trim();
    const contentEl = document.getElementById('content').value.trim();

    if (!usernameEl || !titleEl || !contentEl) {
        errorSpan.textContent = 'Please fill out all fields.';
        setTimeout(() => errorSpan.textContent = '', 5000);
    } else {
        errorSpan.textContent = ''; 
    }

    const formData = {
        username: usernameEl,
        title: titleEl,
        content: contentEl,
      };

      storeLocalStorage(formData);
    //   redirectPage();

window.location.href = "./blog.html"

}); 
function storeLocalStorage(formData) {
let blogData = JSON.parse(localStorage.getItem("blog"))
if (blogData){
    blogData.push(formData)

}else {
blogData = []
blogData.push(formData)
}
localStorage.setItem("blog",JSON.stringify(blogData))
}