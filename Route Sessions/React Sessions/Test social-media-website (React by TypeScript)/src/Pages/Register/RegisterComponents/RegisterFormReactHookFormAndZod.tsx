// File s7 34an esta5dmna React Hook Form  wa validation b maktba tanya aly heya Zod ///

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { registerSchema, type RegisterSchemaType } from './../../../Schemas/auth.schema';
import axios from "axios"
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";

// al interface wa al zod object kona bn3mlhm hena 2abl export register() bs wadenahm al schema  ///////



// interface UserData{  // kolhm string 34an al API 3ayz al data aly tegelo string
//     name: string,
//     email: string,
//     dateOfBirth: string,
//     gender: "male" | "female" ,       // dah user interface lw makona4 na2lnah aw 7aawlnah l type feh folder al schemas
//     password: string,
//     rePassword: string,
// }


export default function RegisterFormReactHookFormAndZod() {
    const navigate = useNavigate();
    const [apiError, setapiError] = useState(null) // 34an a3ml state l error aly gay mn al API 34an a3mlha display lma y7sl error feh
    const [isLoading, setIsLoading] = useState(false);
  
      const form = useForm<RegisterSchemaType>({ //useForm dah hook, ya3ny function, ya3ny 2a2dr a3mlo generic data, ya3ny a7dd type l data aly gayalo
        defaultValues: {
            name: "",
            email: "",
            dateOfBirth: "",
            gender: "male",
            password: "",
            rePassword: ""
        },
        resolver: zodResolver(registerSchema),

        mode :"onChange"
      });
  
      const { register, handleSubmit, formState} = form; // dorha anha ta5d al data aly mn inputs aly 3andy wa to7otha feh al properties beta3t al object aly hakwno
  
      // const x = register("email"); // 2a2dr a7t gwaha ay property mn al object aly hakwno aly howa howa name beta3 kl input aly howa howa al property aly gayaly mn al API
      // console.log(x); // dah b2a haytl3 object haykon feh 
      // //onBlur, onChange, ref, name [name attribute beta3 input]
      // const {ref, name, onBlur, onChange} = register("email"); //3amlt destruct l al hagat deh mn al object aly hayrg3o register l email property // bs register object
      
      function handleRegister(registerData:RegisterSchemaType){ //adeto type interface 34an aly gay l function deh object gay mn function handleSubmit aly library 3amlah
       console.log(registerData);
      //  if(registerData.password === registerData.rePassword){       // ana ba3ml al condition dah lw ana 3ayza y check 3la al password wa rePassword  lma ye3ml submit lw m4 3ayza keda yeb2a 2asta5dm validate aly 3amlaha feh rePassword ta7t (hayb2a real time validation)
      //    //call API
      //  }
      //  else{
      //     setError("rePassword", {message:"password and rePaswword don't match"});
      //  }
        setIsLoading(true);
        axios.post(`https://route-posts.routemisr.com/users/signup`, registerData) // 34an a3ml post l API wa ab3t al data aly gaya mn al form
        .then((response) =>{
           if(response.data.success){
            alert("Registeration successful");
            navigate("/login");
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
         <h1 className="text-6xl text-center font-bold">Register Now</h1>
         {apiError&&(
            <p className="bg-red-500 text-hite font-bold text-center text-xl">
                {apiError}
            </p>
         )}
         <form onSubmit={handleSubmit(handleRegister)} className="max-w-md mx-auto mt-10">
              <div className="relative z-0 w-full mb-5 group">
                  <input type="text"
                      {...register("name")} // wa bn4el attribute name 34an heya hat7to 
                      id="name" 
                      className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" 
                      placeholder="" 
                   />
                  <label htmlFor="name"
                      className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:insert-s-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                      Full Name
                   </label>
                   {formState.errors.name?.message && formState.touchedFields.name &&(
                      <p className="text-red-500 font-bold">
                          {formState.errors.name?.message}
                      </p>
                   )}
              </div>
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
                  <input type="date"
                      {...register("dateOfBirth")}
                      id="dateOfBirth" 
                      className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" 
                      placeholder="" 
                   />
                  <label htmlFor="dateOfBirth"
                      className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:insert-s-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                      Date of Birth
                   </label>
                   {formState.errors.dateOfBirth?.message && formState.touchedFields.dateOfBirth && (
                      <p className="text-red-500 font-bold">
                          {formState.errors.dateOfBirth?.message}
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
              <div className="relative z-0 w-full mb-5 group">
                  <input type="password"
                      {...register("rePassword")} 
                      id="rePassword" 
                      className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" 
                      placeholder="" 
                   />
                  <label htmlFor="rePassword"
                      className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:insert-s-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                      Confirm The Password
                   </label>
                   {formState.errors.rePassword?.message && formState.touchedFields.rePassword && (
                      <p className="text-red-500 font-bold">
                          {formState.errors.rePassword?.message}
                      </p>
                   )}
              </div> 
              <div className="inline-block items-center mb-4 me-10">
                  <input id="male" 
                      {...register("gender")}
                      type="radio"
                      value="male" 
                      className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"/>
                  <label 
                      htmlFor="male" 
                      className="select-none ms-2 text-sm font-medium text-heading">
                          Male
                  </label>
              </div>
              <div className="items-center mb-4 inline-block">
                  <input id="female" 
                      {...register("gender")}
                      value="female"
                      type="radio"
                      className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"/>
                  <label 
                      htmlFor="female" 
                      className="select-none ms-2 text-sm font-medium text-heading">
                          Female
                  </label>
              </div>
              {formState.errors.gender?.message && formState.touchedFields.gender && (
                      <p className="text-red-500 font-bold">
                          {formState.errors.gender?.message}
                      </p>
                   )}
              <button 
                 disabled={isLoading}
                type="submit" 
                className="text-white bg-[#2a4ca1] disabled:bg-slate-900 disabled:text-white disabled:cursor-not-allowed block w-full rounded-xl hover:bg-[#19316e] box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                {isLoading ? "Loading ..." : "Register"}
              </button>
             <div className="my-2 text-center text-xl text-blue-500 hover:text-blue-700 font-semibold hover:underline cursor:pointer">
                <Link to="/login"> 
                   Already have an account? Login
                </Link>
             </div>
          </form>
      </main>
      </>
    )
  }
  
