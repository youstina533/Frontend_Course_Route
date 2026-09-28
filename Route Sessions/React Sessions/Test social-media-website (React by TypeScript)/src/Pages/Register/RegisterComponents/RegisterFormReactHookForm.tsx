// File s7 34an esta5dmna React Hook Form bs hena Validation b nafs al maktba wa e7na m4 han3ml keda 2awy ///

import {useForm} from "react-hook-form";

export default function RegisterFormReactHookForm() {

    interface UserData{  // kolhm string 34an al API 3ayz al data aly tegelo string
        name: string,
        email: string,
        dateOfBirth: string,
        gender: string,
        password: string,
        rePassword: string,
    }

    const form = useForm<UserData>({ //useForm dah hook, ya3ny function, ya3ny 2a2dr a3mlo generic data, ya3ny a7dd type l data aly gayalo
        defaultValues: {
            name: "",
            email: "",
            dateOfBirth: "",
            gender: "",
            password: "",
            rePassword: ""
        },
    });

    const { register, handleSubmit } = form; // dorha anha ta5d al data aly mn inputs aly 3andy wa to7otha feh al properties beta3t al object aly hakwno

    // const x = register("email"); // 2a2dr a7t gwaha ay property mn al object aly hakwno aly howa howa name beta3 kl input aly howa howa al property aly gayaly mn al API
    // console.log(x); // dah b2a haytl3 object haykon feh 
    // //onBlur, onChange, ref, name [name attribute beta3 input]
    // const {ref, name, onBlur, onChange} = register("email"); //3amlt destruct l al hagat deh mn al object aly hayrg3o register l email property
    
    function handleRegister(registerData:UserData){ //adeto type interface 34an aly gay l function deh object gay mn function handleSubmit aly library 3amlah
     console.log(registerData);
    }

  return (
    <>
      <main className="mt-20">
       <h1 className="text-6xl text-center font-bold">Register Now</h1>
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
                    type="radio"
                    className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"/>
                <label 
                    htmlFor="female" 
                    className="select-none ms-2 text-sm font-medium text-heading">
                        Female
                </label>
            </div>
            <button 
                type="submit" 
                className="text-white bg-[#2a4ca1] block w-full rounded-xl hover:bg-[#19316e] box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                    Submit
            </button>
        </form>
    </main>
    </>
  )
}
