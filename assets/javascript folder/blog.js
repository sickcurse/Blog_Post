const mainEl = document.querySelector('#blogData');

const buildElement = function (type, text, parent) {
  const tag = document.createElement(type);
  tag.textContent = text;
  parent.appendChild(tag);
  return tag;
};

const getBlogData = function () {
  return JSON.parse(localStorage.getItem('blog')) || [];
};

const clearBlogData = function () {
  localStorage.removeItem('blog');  
  mainEl.innerHTML = '';  
  handleEmpty();  
};

const handleEmpty = function () {
  buildElement('h2', 'No Blog posts yet...', mainEl);
  const link = buildElement('a', 'Enter your own submission here!', mainEl);
  link.href = './index.html';
};

const displayBlogData = function (blogs) {
  if (!blogs.length) {
    handleEmpty();
    return;
  }

  const parentDiv = document.createElement('div');

  for (let blog of blogs) {
    const blogDiv = buildElement('div', null, parentDiv);
    blogDiv.style.border = '1px solid black';
    blogDiv.style.margin = '5px';
    blogDiv.classList.add('card');

    buildElement('h2', blog.title, blogDiv);
    buildElement('blockquote', blog.content, blogDiv);
    buildElement('p', `Posted by: ${blog.username}`, blogDiv);
  }

  mainEl.appendChild(parentDiv);
};

const init = function () {
  const blogData = getBlogData();
  displayBlogData(blogData);

  const clearButton = buildElement('button', 'Clear Posts', document.body);
  clearButton.style.marginTop = '20px';
  clearButton.addEventListener('click', clearBlogData);
};

init();
