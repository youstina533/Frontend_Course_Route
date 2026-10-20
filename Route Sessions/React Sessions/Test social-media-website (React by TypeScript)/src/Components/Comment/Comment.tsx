import { type CommentType } from "../../Types/Comment.type"
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Comment({comment} : {comment : CommentType}) {
  return (
    <>
      <div className="comment mt-5 p-3">
            <div className="flex gap-4 itesm-center">
                <img src={comment?.commentCreator.photo} className="w-10 h-10 rounded-full border-2 border-white " alt="post-owner-image"/>
                <div>
                    <p className="font-bold ">{comment?.commentCreator.name}</p>
                    <p className="text-sm text-slate-500 ">{comment?.createdAt}</p>
                    <p className="comment-content pt-3">{comment?.content}</p>
                    <div className="mt-4 mb-1 flex gap-5">
                      <button className="text-xl cursor-pointer"><AiOutlineLike/></button>
                      <button className="cursor-pointer text-sm"><FaRegComment className="inline-block text-xl me-2"/>make a reply</button>
                    </div>
                    <button className="mt-3 text-md cursor-pointer text-[#1a46cb]"><TiArrowSortedDown className="inline-block text-lg"/> see replies</button>
                </div>
            </div>
        </div>
    </>
  )
}
