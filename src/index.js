document.addEventListener('DOMContentLoaded', main);

function main() {
  displayPosts();
  addNewPostListener();
}

const BASE_URL = 'http://localhost:3000/posts';

function displayPosts() {
  fetch(BASE_URL)
    .then(res => res.json())
    .then(posts => {
      const postList = document.getElementById('post-list');
      postList.innerHTML = '';

      posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.className = 'post-title';
        postEl.dataset.id = post.id;
        postEl.textContent = post.title;
        postList.appendChild(postEl);

        postEl.addEventListener('click', () => handlePostClick(post.id));
      });

      if (posts.length > 0) handlePostClick(posts[0].id);
    });
}

function handlePostClick(postId) {
  fetch(`${BASE_URL}/${postId}`)
    .then(res => res.json())
    .then(post => {
      const detailDiv = document.getElementById('post-detail');
      detailDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <p><strong>Author:</strong> ${post.author}</p>
        <button id="edit-btn">Edit</button>
        <button id="delete-btn">Delete</button>
      `;

      setupEditForm(post);
      setupDeleteButton(post.id);
    });
}

function addNewPostListener() {
  const form = document.getElementById('new-post-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = form.title.value;
    const content = form.content.value;
    const author = form.author.value;

    const newPost = { title, content, author };

    fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost)
    })
    .then(res => res.json())
    .then(() => {
      form.reset();
      displayPosts();
    });
  });
}

function setupEditForm(post) {
  const editForm = document.getElementById('edit-post-form');
  editForm.classList.remove('hidden');
  document.getElementById('edit-title').value = post.title;
  document.getElementById('edit-content').value = post.content;

  editForm.onsubmit = function(e) {
    e.preventDefault();
    const updatedPost = {
      title: document.getElementById('edit-title').value,
      content: document.getElementById('edit-content').value
    };

    fetch(`${BASE_URL}/${post.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPost)
    })
    .then(res => res.json())
    .then(() => {
      editForm.classList.add('hidden');
      displayPosts();
      handlePostClick(post.id);
    });
  };

  document.getElementById('cancel-edit').onclick = () => {
    editForm.classList.add('hidden');
  };
}

function setupDeleteButton(postId) {
  const deleteBtn = document.getElementById('delete-btn');
  deleteBtn.addEventListener('click', () => {
    fetch(`${BASE_URL}/${postId}`, {
      method: 'DELETE'
    })
    .then(() => {
      displayPosts();
      document.getElementById('post-detail').innerHTML = '<p>Select a post to see details.</p>';
    });
  });
}
