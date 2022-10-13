import { readFile, writeFile } from "fs/promises";

export class FileDb {
    constructor() {
        this.posts = [] 
    }

    save = async () => {
        const postsJSON = JSON.stringify(this.posts);
        await writeFile("posts.json", postsJSON);
    }
    
    newPost = async (post) => {
        this.posts.push(post)
        await this.save()
        return post
    }

    getPosts = async () => {
        return this.posts
    }
}