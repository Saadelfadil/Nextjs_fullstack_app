export type authPost {
    email: string,
    id: string,
    image: string,
    name: string,
    posts: {
        createdAt: string,
        id: string,
        title: string,
        Comment?: {
            createdAt: string,
            id: string,
            postId: string,
            title: string,
            userId: string
        }
    }
}