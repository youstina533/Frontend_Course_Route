import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { loginSchema, type loginSchemaType } from './../../../Schemas/auth.schema';
import axios from "axios"
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";

// al interface wa al zod object kona bn3mlhm hena 2abl export login() bs wadenahm al schema  ///////



// interface UserData{  //dah user interface lw makona4 na2lnah aw 7aawlnah l type feh folder al schemas, kolhm string 34an al API 3ayz al data aly tegelo string
//     email: string,
//     password: string,    
// }


export default function LoginFormReactHookFormAndZod() {
    const navigate = useNavigate();
    const [apiError, setapiError] = useState(null) // 34an a3ml state l error aly gay mn al API 34an a3mlha display lma y7sl error feh
    const [isLoading, setIsLoading] = useState(false);
  
      const form = useForm<loginSchemaType>({ //useForm dah hook, ya3ny function, ya3ny 2a2dr a3mlo generic data, ya3ny a7dd type l data aly gayalo
        defaultValues: {
          email: "",
          password: "", 
        },
        resolver: zodResolver(loginSchema),

        mode :"onChange"
      });
  
      const { register, handleSubmit, formState} = form; // dorha anha ta5d al data aly mn inputs aly 3andy wa to7otha feh al properties beta3t al object aly hakwno
  
      // const x = register("email"); // 2a2dr a7t gwaha ay property mn al object aly hakwno aly howa howa name beta3 kl input aly howa howa al property aly gayaly mn al API
      // console.log(x); // dah b2a haytl3 object haykon feh 
      // //onBlur, onChange, ref, name [name attribute beta3 input]
      // const {ref, name, onBlur, onChange} = register("email"); //3amlt destruct l al hagat deh mn al object aly hayrg3o register l email property // bs register object
      
      function handlogin(loginrData:loginSchemaType){ //adeto type interface 34an aly gay l function deh object gay mn function handleSubmit aly library 3amlah
       console.log(loginrData);
      //  if(registerData.password === registerData.rePassword){       // ana ba3ml al condition dah lw ana 3ayza y check 3la al password wa rePassword  lma ye3ml submit lw m4 3ayza keda yeb2a 2asta5dm validate aly 3amlaha feh rePassword ta7t (hayb2a real time validation)
      //    //call API
      //  }
      //  else{
      //     setError("rePassword", {message:"password and rePaswword don't match"});
      //  }
        setIsLoading(true);
        axios.post(`https://route-posts.routemisr.com/users/signin`, loginrData) // 34an a3ml post l API wa ab3t al data aly gaya mn al form
        .then((response) =>{
           if(response.data.success){
            alert("Login successful");
            navigate("/");
           }
        })
        .catch((error)=>{
            console.log(error.response.data.message);
            setapiError(error.response.data.message) // 34an a3ml display l error aly gay mn al API
        }).finally(() =>{
            setIsLoading(false) 
        })
      }
  
    return (
      <>
        <main className="mt-20">
         <h1 className="text-6xl text-center font-bold">Login Now</h1>
         {apiError&&(
            <p className="bg-red-500 text-hite font-bold text-center text-xl">
                {apiError}
            </p>
         )}
         <form onSubmit={handleSubmit(handlogin)} className="max-w-md mx-auto mt-10">
              <div className="relative z-0 w-full mb-5 group">
                  <input type="email"
                      {...register("email")} 
                      id="email" 
                      className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" 
                      placeholder="" 
                   />
                  <label htmlFor="email"
                      className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:insert-s-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                      Email Address
                   </label>
                   {formState.errors.email?.message && formState.touchedFields.email && (
                      <p className="text-red-500 font-bold">
                          {formState.errors.email?.message}
                      </p>
                   )}
              </div>
              <div className="relative z-0 w-full mb-5 group">
                  <input type="password"
                      {...register("password")} 
                      id="password" 
                      className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" 
                      placeholder="" 
                   />
                  <label htmlFor="password"
                      className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:insert-s-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                      Password
                   </label>
                   {formState.errors.password?.message && formState.touchedFields.password && (
                      <p className="text-red-500 font-bold">
                          {formState.errors.password?.message}
                      </p>
                   )}
              </div>
              <button 
                disabled={isLoading}
                type="submit" 
                className="text-white bg-[#2a4ca1] disabled:bg-slate-900 disabled:text-white disabled:cursor-not-allowed block w-full rounded-xl hover:bg-[#19316e] box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                {isLoading ? "Loading ..." : "Login"}
              </button>
             <div className="my-2 text-center text-xl text-blue-500 hover:text-blue-700 font-semibold hover:underline cursor:pointer">
                <Link to="/register"> 
                   Don't have an account? Sign Up
                </Link>
             </div>
          </form>
      </main>
      </>
    )
  }
  
