import { FiShare } from "react-icons/fi";
import { useForm } from 'react-hook-form';



export default function CommentCreation() {

    const commentForm = useForm({
        defaultValues:{
            content: "",
            image: "",
        },
    })

    const CommentformData =  new FormData();

    const {register, handleSubmit} = commentForm;

    function handleCreateComment(formResponseObject: {content: string, image: string}){ //formResponseObject dah object aly useForm btgam3o 
        if(!formResponseObject.content && !formResponseObject.image){
            return
        }
        if(formResponseObject.content){
            CommentformData.append("conent",formResponseObject.content);
        }
        if(formResponseObject.image){
           CommentformData.append("image",formResponseObject.image[0]); //ana keda bab3t al sora m4 al path beta3ha //lw feh image hayb2a array 34an keda ba7t al index 
        }
    }

  return (  
    <>
       <form className="mt-3" onSubmit={handleSubmit(handleCreateComment)}>   
            <div className=" mx-10 relative">
                <input type="text" id="commentCreation" className="inline-block w-full p-2 ps-9 bg-slate-100 border border-[#98a7a9] text-lg rounded-2xl focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Write a comment"  
                  {...register("content")}

                />
                <label className="absolute inset-e-26 top-1/2 -translate-y-1/2 border border-slate-400 flex items-center justify-center w-8 h-8 bg-white rounded-full cursor-pointer hover:bg-slate-100 transition">
                    <FiShare className="text-lg" />
                    <input type="file" hidden 
                      {...register("image")}
                    />
                </label>
                <button type="submit" className=" cursor-pointer absolute inset-e-1.5 me-3 bottom-1.5 text-white bg-[#1C398E]  hover:bg-[#152967] box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-2xl text-xs px-3 py-1.5 focus:outline-none">Submit</button>
            </div>
        </form>

    </>
  )
}
