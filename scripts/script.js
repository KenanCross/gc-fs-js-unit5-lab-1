const postContainer = document.querySelector("main");
const query = document.querySelector("#query");
const queryString = document.getElementById("queryText");
let formatter = Intl.NumberFormat("en", {
	notation: "compact",
	maximumSignificantDigits: 3,
});
query.addEventListener("click", () => {
	console.log(queryString.value);
	if (queryString.value !== "") {
		fetch("https://www.reddit.com/r/" + queryString.value + "/.json")
			.then((response) => response.json())
			.then((redditData) => {
				const posts = redditData.data.children;
				postContainer.innerHTML = "";
				posts.forEach((post) => {
					const postData = post.data; //setup the post data;
					const postWrap = document.createElement("div");
					const postFooter = document.createElement("div");
					const postTitle = document.createElement("h3");
					const postImg = document.createElement("img");
					const postLink = document.createElement("a");
					const ups = document.createElement("div");
					if (postData.is_video === true) {
						//do not show video posts.
					} else if (
						postData.thumbnail !== "self" ||
						postData.thumbnail !== ""
					) {
						postWrap.classList.add("redditPost");
						postFooter.classList.add("footer");
						postTitle.textContent = postData.title;
						postImg.src = postData.thumbnail;
						postLink.href = postData.url;
						postLink.appendChild(postImg);
						ups.textContent = formatter.format(postData.ups) + " upvotes";
						ups.classList.add("upvote");
						postWrap.appendChild(postTitle);
						postFooter.appendChild(ups);
						postWrap.appendChild(postLink);
						postWrap.appendChild(postFooter);
						postContainer.appendChild(postWrap);
					}
				});
			});
	} else {
		fetch("https://www.reddit.com/r/aww/.json")
			.then((response) => response.json())
			.then((redditData) => {
				const posts = redditData.data.children;
				postContainer.innerHTML = "";
				posts.forEach((post) => {
					const postData = post.data; //setup the post data;
					const postWrap = document.createElement("div");
					const postFooter = document.createElement("div");
					const postTitle = document.createElement("h3");
					const postImg = document.createElement("img");
					const postLink = document.createElement("a");
					const ups = document.createElement("div");
					if (postData.is_video === true) {
						//do not show video posts.
					} else if (
						postData.thumbnail !== "self" ||
						postData.thumbnail !== ""
					) {
						postWrap.classList.add("redditPost");
						postFooter.classList.add("footer");
						postTitle.textContent = postData.title;
						postImg.src = postData.thumbnail;
						postLink.href = postData.url;
						postLink.appendChild(postImg);
						ups.textContent = formatter.format(postData.ups) + " upvotes";
						ups.classList.add("upvote");
						postWrap.appendChild(postTitle);
						postFooter.appendChild(ups);
						postWrap.appendChild(postLink);
						postWrap.appendChild(postFooter);
						postContainer.appendChild(postWrap);
					}
				});
			});
	}
});
