// Load posts from localStorage on page load
window.onload = function () {
  loadPosts();
};

document.getElementById("forumForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const topic = document.getElementById("topic").value;
  const date = new Date().toLocaleString();

  const post = { topic, date };
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.push(post);
  localStorage.setItem("posts", JSON.stringify(posts));

  document.getElementById("forumForm").reset();
  loadPosts();
});

function loadPosts() {
  const postsDiv = document.getElementById("posts");
  postsDiv.innerHTML = "<h3>Community Posts</h3>";

  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  posts.forEach((post, index) => {
    const postBox = document.createElement("div");
    postBox.className = "quote-box";
    postBox.innerHTML = `
      <b>${post.date}</b><br>${post.topic}
      <br><button class="delete-btn" onclick="deletePost(${index})">🗑 Delete</button>
    `;
    postsDiv.appendChild(postBox);
  });
}

function deletePost(index) {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.splice(index, 1);
  localStorage.setItem("posts", JSON.stringify(posts));
  loadPosts();
}
