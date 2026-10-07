import { AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import type { PostType } from "../../Types/Posts.type";

export default function Post({post} : {post:PostType }) {
  const {body, image, user, createdAt} = post
  const {name, photo} = user


  return (
    <>
      <div className="mx-auto w-150 bg-slate-300 p-4 rounded-lg my-6">
        <div className="flex gap-4 itesm-center">
          <img src={photo} className="w-10 h-10 rounded-full border-2 border-white " alt="post-owner-image"/>
          <div>
            <p className="font-bold ">{name}</p>
            <p className="text-sm text-slate-500 ">{createdAt}</p>
          </div>
        </div>
        <div className="py-4 px-1">
          <p className="py-5 text-lg">{body}</p>
          <img src={image} className="w-full" alt="post-image"/>
        </div>
        <div className="py-4 px-3.5 flex justify-between bg-slate-200 rounded-sm">
          <div className="font-bold cursor-pointer flex gap-2 items-center">Like <AiFillLike/></div>
          <div className="font-bold cursor-pointer flex gap-2 items-center">Comment <FaCommentAlt/></div>
          <div className="font-bold cursor-pointer flex gap-2 items-center">Share <FaShare/></div>
        </div>
      </div>
    </>
  )
}
