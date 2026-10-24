import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import PostCreation from '../../../Components/PostCreation/PostCreation';
import {Helmet} from "react-helmet"

export default function ProfileContent() {
 
    function getUserData(){
      return axios.get(`https://route-posts.routemisr.com/users/profile-data`, {
        headers:{
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        }
      })
    }

  const {data} = useQuery({
    queryKey: ["getUserData"],
    queryFn: getUserData
  })
  console.log(data);

  return (
    <>
     <Helmet>
          <title>Profile</title>
      </Helmet>
      <PostCreation userImage={data?.data.data.user.photo}/>
    </>
  )
}
