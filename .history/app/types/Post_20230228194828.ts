export type PostTy = {
    id: string,
    message: string,
    updatedAt?: string,
    user: {
        email: string,
        id: string,
        image: string,
        name: string
    },
    Comment?: {
        createdAt?: string,
        id: string,
        postId: string,
        title: string,
        userId: string,
        user: {
            email: string,
            id: string,
            image: string,
            name: string
        }
    }[]
}