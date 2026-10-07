import Post from '../../../Components/Posts/Post';
import axios from 'axios';
import {useEffect, useState} from "react";
import { type PostType } from './../../../Types/Posts.type';

export default function HomePosts() {
  const [allPosts, setallPosts] = useState([]);

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
    })
  }

  useEffect(() =>{
    getAllPosts();
  }, [])
  
  return (
    <>
    <div className="my-8">
      {allPosts.map((post: PostType) => (
        <Post post={post} key={post.id} />
      )
      )}
    </div> 
    </>
  )
}
