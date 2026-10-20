import { AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import type { PostType } from "../../Types/Posts.type";
import Comment from './../Comment/Comment';
import { Link } from "react-router-dom";
import axios  from 'axios';
import { useQuery } from '@tanstack/react-query';
import type { CommentType } from "../../Types/Comment.type";


export default function Post({post, isPostDetails = false} : {post:PostType, isPostDetails:boolean }) {
  const {body, image, user, createdAt, topComment, _id, commentsCount, likesCount, sharesCount} = post
  const {name, photo} = user

  function getPostComments(){
    return axios.get(`https://route-posts.routemisr.com/posts/${_id}/comments?page=1&limit=50`,{
     headers:{ Authorization: `Bearer ${localStorage.getItem("userToken")}`}
    }
    )
  }

  const {data:commentsData} = useQuery({
    queryKey: ["getPostComments", _id],
    queryFn : getPostComments,
    enabled: isPostDetails //34an lw ana feh home may3ml4 fetch l data (all comments) asln al data hatb2a undefined haygebha lw ana feh Post details
  })

  console.log(commentsData?.data.data.comments);

  return (
    <>
      <div className="mx-auto w-180 bg-white rounded-3xl my-6 pb-9 shadow-xl">
        <div className="flex gap-4 itesm-center p-6">
          <img src={photo} className="w-15 h-15 rounded-full border-2 border-white " alt="post-owner-image"/>
          <div>
            <p className="font-bold text-xl ">{name}</p>
            <p className="text-sm text-slate-500 ">{createdAt}</p>
          </div>
        </div>
        <div>
          {body && <p className="px-6 py-3 text-lg ">{body}</p> }
          {image && <img src={image} className="w-full" alt="post-image"/>}
        </div>
         <div className="py-3 px-6 text-[#656066]  flex justify-between bg-white  rounded-sm text-sm">
          <div className="flex gap-2 items-center">{likesCount} likes </div>
          <div className="flex gap-2 items-center">{commentsCount} comments </div>
          <div className="flex gap-2 items-center">{sharesCount} shares </div>
        </div>
        <hr className="mx-auto w-[93%] border-t border-gray-200"/>
        <div className="py-4 px-6  flex justify-between bg-white  rounded-sm">
          <div className="font-bold cursor-pointer flex gap-2 items-center">Like <AiFillLike/></div>
          <Link to={`/postdetails/${_id}`}>
          <div className="font-bold cursor-pointer flex gap-2 items-center">Comment <FaCommentAlt/></div>
          </Link>
          <div className="font-bold cursor-pointer flex gap-2 items-center">Share <FaShare/></div>
        </div>


        {isPostDetails ?
        <>
        <Comment comment={topComment}/>
        {commentsData?.data.data.comments &&
        commentsData.data.data.comments.map((comment: CommentType) => (
          <Comment comment={comment} key ={comment._id}/>
        ))}
        </> : 
         <Comment comment={topComment}/>
        }
       
      </div>
    </>
  )
}
