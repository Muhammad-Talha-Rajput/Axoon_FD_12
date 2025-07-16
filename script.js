const postsContainer = document.getElementById("posts");
const errorContainer = document.getElementById("error");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (response.status >= 200 && response.status < 300) {
  return response.json();
} else {
  throw new Error("Failed to fetch data. Status: " + response.status);
}
})
  .then((posts) => {
    const first10 = posts.slice(0, 10);
    first10.forEach((post) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          `;
      postsContainer.appendChild(card);
    });
  })
  .catch((error) => {
    errorContainer.textContent = "Failed to load posts: " + error.message;
  });