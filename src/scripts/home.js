function createWorkspaceLayout() {
  const container = document.createElement("div");
  container.className = "container-root";

  const header = document.createElement("header");
  header.className = "header";

  const title = document.createElement("h1");
  title.innerText = " ";

  const homeLink = document.createElement("a");
  homeLink.setAttribute("href", "index.html");
  homeLink.innerText = "Log In";

  const registrationLink = document.createElement("a");
  registrationLink.setAttribute("href", "registration.html");
  registrationLink.innerText = "Register";


  header.appendChild(title);
  header.appendChild(homeLink);
  header.appendChild(registrationLink);

  const main = document.createElement("main");
  main.className = "main-section";

  const sidebar = document.createElement("nav");
  sidebar.className = "sidebar";

  const bloggersTitle = document.createElement("h2");
  bloggersTitle.innerText = "Bloggers";
  sidebar.appendChild(bloggersTitle);


  bloggers.reduce((acc, blogger) => {
    const bloggerCard = document.createElement("div");
    bloggerCard.className = "blogger-card";

    const avatar = document.createElement("img");
    avatar.src = blogger.avatar;
    avatar.alt = `${blogger.firstName} ${blogger.lastName}`;
    avatar.className = "avatar";

    const name = document.createElement("h3");
    name.className = "blogger-name";
    name.innerText = `${blogger.firstName} ${blogger.lastName}`;

    bloggerCard.appendChild(avatar);
    bloggerCard.appendChild(name);
    acc.appendChild(bloggerCard);

    return acc;
  }, sidebar); 


  const section = document.createElement("div");
  section.className = "section";

  const postsTitle = document.createElement("h2");
  postsTitle.innerText = "Posts";
  section.appendChild(postsTitle);

  posts.reduce((acc, post) => {
    const postCard = document.createElement("div");
    postCard.className = "post-card";

    const postImage = document.createElement("img");
    postImage.src = post.img;
    postImage.alt = post.title;
    postImage.className = "post-image";

    const postTitle = document.createElement("h3");
    postTitle.className = "post-title";
    postTitle.innerText = post.title;

    const postStory = document.createElement("p");
    postStory.className = "post-story";
    postStory.innerText = post.story;

    const author = document.createElement("p");
    author.className = "author-name";
    author.innerText = `By ${post.authorName}`;

    postCard.appendChild(postImage);
    postCard.appendChild(postTitle);
    postCard.appendChild(postStory);
    postCard.appendChild(author);
    acc.appendChild(postCard);

    return acc;
  }, section); 

  section.appendChild(createFooter()); 

  main.appendChild(sidebar);
  main.appendChild(section);

  container.appendChild(header);
  container.appendChild(main);

  document.body.innerHTML = ''; 
  document.body.appendChild(container);
}
function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.id = "time-footer";
  footer.innerText = new Date().toLocaleString();
  return footer;
}

setInterval(() => {
  const footer = document.getElementById("time-footer");
  if (footer) {
    footer.innerText = new Date().toLocaleString();
  }
});

const isLoggedIn = true; 
if (isLoggedIn) {
  createWorkspaceLayout();
} else {
  createHomeLayout();
}
