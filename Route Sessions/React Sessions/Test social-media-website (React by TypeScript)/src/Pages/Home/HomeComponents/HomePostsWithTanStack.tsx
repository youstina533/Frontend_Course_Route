import Post from '../../../Components/Posts/Post';
import axios from 'axios';
import { type PostType } from '../../../Types/Posts.type';
import LoadingSpinner from './../../../Components/Loading/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';

//concept ano yegeb al data al 2adema wa ye3rdha l user wa ye3ml fetching tany dah lma user yerg3 l home m4 lma yeseboo

// tol ma isFetching is true, fa by7sl request gded 34an ye3rf feh data gdeda gat mn server wla l2 
// user lma yegy mn Profile l Home masln fah keda isFetching b true lkn isLoading b false , yeb2a howa hay3ml request gded ye4of feh data gdeda wla l2
// m3 bal ma ye4of feh daya gdeda wla l2 byzhry al data aly feh cach wa lw feh data gdeda ye3mlha replace b data 2adema feh al UI wa Cach memory


//Bosy awl mara page Home deh ye7slha render fah by7sl request "getAllPosts" l awl mara wa data aly btegy btt7fz feh al cach memory 
//lma aro7 b2a mn Home Page l ay page tanya ba3den arg3 l page Home fah al data aly btzhr btb2a heya aly feh cach memory (ya3ny howa 3aml request 34an ye4of feh data gdeda wla l2 wa mal2a4 data gdeda fah et3ardt nafs aly feh cach memory heya heya),
//lkn lw l2a data gdeda kan 3ard data 2adema aly feh cach memory m3 bal ma yegeb data gdeda aly server wa ye7otha feh cache memory wa y-replace data 2adema b gdeda l user 3la UI 
//tb lw get mn page wa ro7t l Home tany wa kan feh data gdeda gaya mn al server, sa3tha al library bt3ml request tany b asm "getAllPosts" ***(dah 3latol swa2 feh data gdeda wla l2)*** 34an tgeb data gdeda wa te7otha feh al cach memory wa tezhrha l user (t-replace data al 2adema aly zahrt 3la UI b gdeda 3la UI)
// tb lw ana lesa feh Home page wa kan feh data gdeda feh al server, al Library m4 hat3ml request gded l2 34an ana lesa feh nafs al page mam4t4 menha **(ela lw ana 2esta5dm refetchinterval)***
// tb lw ana kont feH Home l awl mara, fah isLoading is true wa isFetching is true 
// lkn lw mn Profile wa get l Home, fah isLoading is false wa isFetching is true 34an deh m4 2awl mara ageb feha al data

// isLoading: true only when there is NO data yet (first time go to this page) and a request is in flight
//   (first visit , since the cache is empty / after page refresh).
//   It stays false when you return from profile -> home with cached data.
//   it stays false lma ba3d awl mara gebna feha al data wa masln ro7t mn profile l home hay5ly isFetching is true and make a request and came with new data (lw feh ya3ny) to show in the UI (show old data until the new data came to show it, so no need to loader as the old data appears instantly) and save in the cache memory

// isFetching: true whenever ANY request is in flight, ***** awl ma teb2a heya b true yeb2a by7sl request l al server swa2 feh data gdeda gat wla l2******
//   including background refetches.
//   Cached data (old data) is shown instantly while the refetch runs, ***then replaced if it changed***.
//   isLoading = isFetching && no data yet


export default function HomePostsWithTanStack() {
  
    function getAllPosts(){
      return axios.get(`https://route-posts.routemisr.com/posts?sort=createdAt`, {
        headers:{
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        }
      })
    }

  const {data, isLoading, error, isError} = useQuery({
    queryKey: ["getAllPosts"],
    queryFn: getAllPosts
  })
  
  if(isLoading){
    return <LoadingSpinner/>
  }
  
  if(isError){
    return <h1 className="font-extrabold my-30 mx-auto">{error?.message}</h1>
  }
  
  return (
    <>
      <div className="my-29">
        {data?.data.data.posts.map((post: PostType) => (
          <Post post={post} key={post.id} isPostDetails={false} />
          )
        )}
      </div> 
    </>
  )
}
