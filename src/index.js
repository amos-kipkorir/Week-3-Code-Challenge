// src/index.js

document.addEventListener('DOMContentLoaded', main);

function main() {
  displayPosts();
  addNewPostListener();
}

const baseUrl = 'http://localhost:3000/posts';

function displayPosts() {
  fetch(baseUrl)
    .then(res => res.json())
    .then(posts => {
      const postList = document.getElementById('post-list');
      postList.innerHTML = '';
      posts.forEach(post => {
        const postItem = document.createElement('div');
        postItem.classList.add('post-item');
        postItem.innerHTML = `
          <h4>${post.title}</h4>
          <img src="${post.image || 'https://via.placeholder.com/150'}" alt="${post.title}" style="max-width: 100%">`;
        postItem.addEventListener('click', () => handlePostClick(post.id));
        postList.appendChild(postItem);
      });

      if (posts.length > 0) handlePostClick(posts[0].id);
    });
}

function handlePostClick(postId) {
  fetch(`${baseUrl}/${postId}`)
    .then(res => res.json())
    .then(post => {
      const detail = document.getElementById('post-detail');
      detail.innerHTML = `
        <h2>${post.title}</h2>
        <p><strong>${post.author}</strong></p>
        <img src="${post.image || 'https://via.placeholder.com/150'}" alt="${post.title}" style="max-width: 100%">
        <p>${post.content}</p>
        <button id="edit-btn">Edit</button>
        <button id="delete-btn">Delete</button>
      `;
      setupEditForm(post);
      setupDeleteButton(post.id);
    });
}

function addNewPostListener() {
  const form = document.getElementById('new-post-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const newPost = {
      title: document.getElementById('new-title').value,
      author: document.getElementById('new-author').value,
      content: document.getElementById('new-content').value,
      image: document.getElementById('new-image').value
    };
    fetch(baseUrl, {
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
  const editBtn = document.getElementById('edit-btn');
  editForm.classList.add('hidden');
  editBtn.addEventListener('click', () => {
    editForm.classList.remove('hidden');
    document.getElementById('edit-title').value = post.title;
    document.getElementById('edit-content').value = post.content;

    editForm.onsubmit = e => {
      e.preventDefault();
      const updatedPost = {
        title: document.getElementById('edit-title').value,
        content: document.getElementById('edit-content').value
      };
      fetch(`${baseUrl}/${post.id}`, {
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
  });

  document.getElementById('cancel-edit').addEventListener('click', () => {
    editForm.classList.add('hidden');
  });
}

function setupDeleteButton(postId) {
  const deleteBtn = document.getElementById('delete-btn');
  deleteBtn.addEventListener('click', () => {
    fetch(`${baseUrl}/${postId}`, {
      method: 'DELETE'
    }).then(() => {
      document.getElementById('post-detail').innerHTML = '<p>Post deleted. Select another post to view details.</p>';
      displayPosts();
    });
  });
}
