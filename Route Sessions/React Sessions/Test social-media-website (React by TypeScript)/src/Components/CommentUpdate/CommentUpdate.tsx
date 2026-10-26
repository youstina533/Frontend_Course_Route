import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { FiShare } from "react-icons/fi";
import { useMutation } from '@tanstack/react-query';


 export default function CommentUpdate({onClose, postId, content, image, queryKey, commentId}: {onClose: () => void, postId:string , content:string, image:string, queryKey:string[], commentId:string}) {
     const commentUpdateForm = useForm({
        defaultValues:{
            content: "",
            image: "",
        },
    })

    const CommentUpdateformData =  new FormData();

    const {register, handleSubmit, reset} = commentUpdateForm;

    const query = useQueryClient();

    function UpdateComment(){
        return axios.put(`https://route-posts.routemisr.com/posts/${postId}/comments/${commentId}`, CommentUpdateformData ,{
            headers :{ Authorization: `Bearer ${localStorage.getItem("userToken")}` }
        });
    }

    const {isPending, mutate} = useMutation({
        mutationFn : UpdateComment,
        onSuccess: (res) =>{
            reset();
            query.invalidateQueries({queryKey: queryKey })
            toast.success(res.data.message, { style: { zIndex: 999 } });
            onClose()
        },
        onError:(err) => {
            toast.error(err.message);
        },
        onSettled:() => {
        }
    })

    function handleUpdateComment(formResponseObject: {content: string, image: string}){ //formResponseObject dah object aly useForm btgam3o 
        if(!formResponseObject.content && !formResponseObject.image){
            return
        }
        if(formResponseObject.content){
            CommentUpdateformData.append("content",formResponseObject.content); //content deh nafs al property aly 3ayzha al backend
        }
        if(formResponseObject.image){
           CommentUpdateformData.append("image",formResponseObject.image[0]); //ana keda bab3t al sora m4 al path beta3ha //lw feh image hayb2a array 34an keda ba7t al index 
        }
        mutate()
    }
   return (
     <>
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="mx-auto xl:w-full bg-white rounded-3xl my-6 p-6 shadow-xl">
            <span className="text-2xl font-bold my-4">Update Comment</span>
            <form className="mt-3" onSubmit={handleSubmit(handleUpdateComment)}>   
                <div className=" mx-10 relative">
                    <input value={content} type="text" id="commentCreation" className="inline-block w-full p-2 ps-9 bg-slate-100 border border-[#98a7a9] text-lg rounded-2xl focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" 
                        {...register("content")}
                    />
                    <label className="absolute inset-e-26 top-1/2 -translate-y-1/2 border border-slate-400 flex items-center justify-center w-8 h-8 bg-white rounded-full cursor-pointer hover:bg-slate-100 transition">
                        <FiShare className="text-lg" />
                        <input type="file" hidden value={image}
                            {...register("image")}
                        />
                    </label>
                    <button disabled={isPending} type="submit" className=" disabled:bg-slate-700 disabled:cursor-not-allowed cursor-pointer absolute inset-e-1.5 me-3 bottom-1.5 text-white bg-[#1C398E]  hover:bg-[#152967] box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-2xl text-xs px-3 py-1.5 focus:outline-none">
                        {isPending ? "Loading" : "Submit" } 
                    </button>
                </div>
            </form>
        </div>
       </div>
     </div>
     </>
   )
 }
 