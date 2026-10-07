import Post from '../../../Components/Posts/Post';
import axios from 'axios';
import {useEffect, useState} from "react";
import { type PostType } from '../../../Types/Posts.type';
import LoadingSpinner from './../../../Components/Loading/LoadingSpinner';



export default function HomePostsWithoutTanStack() {
  const [allPosts, setallPosts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);

  function getAllPosts(){
    axios.get(`https://route-posts.routemisr.com/posts`, {
      headers:{
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      }
    })
    .then((res) =>{
      console.log(res.data.data.posts);
      setallPosts(res.data.data.posts);
    })
    .catch((err) =>{
     console.log(err);
     setisError(true);
    })
    .finally(() => {
      setisLoading(false);
    })
  }

  useEffect(() =>{
    getAllPosts();
  }, [])

if(isLoading){
  return <LoadingSpinner/>
}

if(isError){
  return <h1 className="font-extrabold my-30 mx-auto">Error</h1>
}

  return (
    <>
      <div className="my-29">
        { isLoading ?
         "Loading"
        :
        allPosts.map((post: PostType) => (
          <Post post={post} key={post.id} />
          )
        )}
      </div> 
    </>
  )
}
