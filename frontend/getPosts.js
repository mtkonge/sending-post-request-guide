const postsElement = document.getElementById("posts")


const postsMain = async () => {
    const res = await fetch("api/getposts")
    const body = await res.json()
    postsElement.innerHTML = body.posts

}

postsMain()
