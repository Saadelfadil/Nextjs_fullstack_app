
"use client"

export default function Toggle() {
    return (
        <div className="fixed bg-black/50 w-full h-full z-20 left-0 top-0">
            <div className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 rounded-lg flex flex-col gap-6">
                <h2 className="text-xl">Are you sure that you want to Delete this post?</h2>
                <h3 className="text-sm text-red-600">Pressing the delete button will permenantly delete your post</h3>
                <button className="text-sm bg-red-600 text-white py-2 px-4 rounded">Delete Post</button>
            </div>
        </div>
    )
}