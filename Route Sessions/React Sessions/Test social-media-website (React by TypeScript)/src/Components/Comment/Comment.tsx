import { type CommentType } from "../../Types/Comment.type"


export default function Comment({comment} : {comment : CommentType}) {
  return (
    <>
      <div className="comment mt-5 bg-gray-100 p-3">
            <div className="flex gap-4 itesm-center">
                <img src={comment?.commentCreator.photo} className="w-10 h-10 rounded-full border-2 border-white " alt="post-owner-image"/>
                <div>
                    <p className="font-bold ">{comment?.commentCreator.name}</p>
                    <p className="text-sm text-slate-500 ">{comment?.createdAt}</p>
                    <p className="comment-content pt-3">{comment?.content}</p>
                </div>
            </div>
        </div>
    </>
  )
}
