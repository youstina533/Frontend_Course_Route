import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import LoadingSpinner from './../../../Components/Loading/LoadingSpinner';
import { useParams } from "react-router-dom";
import Post from './../../../Components/Posts/Post';


export default function PostDetailsWithTanStack() {
    const {id} = useParams();

    function getPostDetails(){
      return axios.get(`https://route-posts.routemisr.com/posts/${id}`,{
        headers:{
            Authorization : `Bearer ${localStorage.getItem("userToken")}`
        }
      })
    }

    const {data, isLoading, error, isError} = useQuery({
        queryKey: ["getPostDetails"],
        queryFn: getPostDetails
      })

    console.log(data?.data.data.post);
      
      if(isLoading){
        return <LoadingSpinner/>
      }
      
      if(isError){
        return <h1 className="font-extrabold my-30 mx-auto">{error?.message}</h1>
      }

  return (
   <>
      <div className="mt-30">
        <Post post={data?.data.data.post}/>
      </div>
   </>
  )
}
