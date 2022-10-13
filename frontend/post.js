
const input = document.getElementById("post-value")
const postBtn = document.getElementById("post-button")

    

postBtn.addEventListener("click", async function() {
    const dataToSend = {post: input.value}
    const body = JSON.stringify(dataToSend);
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const method = "POST"
    await fetch("api/createpost", {body, headers, method})

})