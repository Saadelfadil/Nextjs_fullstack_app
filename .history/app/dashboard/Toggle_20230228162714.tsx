
"use client"

type ToggleType = {
    deletePost: () => void,
    setDel: (del : boolean) => void
}

// const handleDelete = () => {
//     deletePost();
// };

export default function Toggle({ deletePost, setDel }: ToggleType) {
  return (
    <div className="fixed bg-black/50 w-full h-full z-20 left-0 top-0">
      <div className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 rounded-lg flex flex-col gap-6">
        <h2 className="text-xl">
          Are you sure that you want to Delete this post?
        </h2>
        <h3 className="text-sm text-red-600">
          Pressing the delete button will permenantly delete your post
        </h3>
        <button onClick={deletePost} className="text-sm bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">
          Delete Post
        </button>
        <button onClick={() => setDel(false)} className="text-sm bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300">
          Cancel
        </button>
      </div>
    </div>
  );
}