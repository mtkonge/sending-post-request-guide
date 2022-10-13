
export const postApiRoutes = (router, database) => {
    router.post("/createpost", async (req, res) => {
        const post = req.body.post
        
        if (!post) {
            return res.json({msg: "post is not defined"})
        }

        database.newPost(post)

        return res.json({msg: "success"})
    })
    router.get("/getposts", async (req, res) => {
        const posts = await database.getPosts()

        return res.json({msg: "success", posts: posts})

    })
}
