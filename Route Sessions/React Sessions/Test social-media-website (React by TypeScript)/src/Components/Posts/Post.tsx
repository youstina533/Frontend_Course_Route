import { AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import type { PostType } from "../../Types/Posts.type";
import Comment from './../Comment/Comment';

export default function Post({post} : {post:PostType }) {
  const {body, image, user, createdAt, topComment} = post
  const {name, photo} = user


  return (
    <>
      <div className="mx-auto w-180 bg-slate-200 rounded-3xl my-6 pb-9 shadow-xl">
        <div className="flex gap-4 itesm-center p-6">
          <img src={photo} className="w-15 h-15 rounded-full border-2 border-white " alt="post-owner-image"/>
          <div>
            <p className="font-bold text-xl ">{name}</p>
            <p className="text-sm text-slate-500 ">{createdAt}</p>
          </div>
        </div>
        <div>
          <p className="px-6 py-3 text-lg ">{body}</p>
          <img src={image} className="w-full" alt="post-image"/>
        </div>
        <div className="py-3 px-6  flex justify-between bg-slate-200 rounded-sm">
          <div className="font-bold cursor-pointer flex gap-2 items-center">Like <AiFillLike/></div>
          <div className="font-bold cursor-pointer flex gap-2 items-center">Comment <FaCommentAlt/></div>
          <div className="font-bold cursor-pointer flex gap-2 items-center">Share <FaShare/></div>
        </div>

        {topComment && 
          <Comment topComment={topComment}/>
        }
      </div>
    </>
  )
}

