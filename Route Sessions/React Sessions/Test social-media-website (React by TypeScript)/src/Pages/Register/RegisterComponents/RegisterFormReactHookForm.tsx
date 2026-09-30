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
        mode :"onChange"
    });

    const { register, handleSubmit, formState, getValues, watch, setError} = form; // dorha anha ta5d al data aly mn inputs aly 3andy wa to7otha feh al properties beta3t al object aly hakwno

    // const x = register("email"); // 2a2dr a7t gwaha ay property mn al object aly hakwno aly howa howa name beta3 kl input aly howa howa al property aly gayaly mn al API
    // console.log(x); // dah b2a haytl3 object haykon feh 
    // //onBlur, onChange, ref, name [name attribute beta3 input]
    // const {ref, name, onBlur, onChange} = register("email"); //3amlt destruct l al hagat deh mn al object aly hayrg3o register l email property // bs register object
    
    function handleRegister(registerData:UserData){ //adeto type interface 34an aly gay l function deh object gay mn function handleSubmit aly library 3amlah
     console.log(registerData);
    //  if(registerData.password === registerData.rePassword){       // ana ba3ml al condition dah lw ana 3ayza y check 3la al password wa rePassword  lma ye3ml submit lw m4 3ayza keda yeb2a 2asta5dm validate aly 3amlaha feh rePassword ta7t (hayb2a real time validation)
    //    //call API
    //  }
    //  else{
    //     setError("rePassword", {message:"password and rePaswword don't match"});
    //  }

    }

  return (
    <>
      <main className="mt-20">
       <h1 className="text-6xl text-center font-bold">Register Now</h1>
       <form onSubmit={handleSubmit(handleRegister)} className="max-w-md mx-auto mt-10">
            <div className="relative z-0 w-full mb-5 group">
                <input type="text"
                    {...register("name",{ //dah object al validation (mn bedayt al {})
                     required: {value:true, message: "Name is required"}, // al spread operatrs aly 2abl register deh 34an netl3 mnha onBlur wa onChaneg wa name wa ref, 34an dol elements gwa object aly register function btrag3holy
                     minLength: {value:3, message: "MinLength is 3"},
                     maxLength: {value: 10, message: "MaxLength is 10"}
                    })} // wa bn4el attribute name 34an heya hat7to 
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
                    {...register("email",{ //dah object al validation
                     required: {value:true, message: "Email is required"},
                     pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email"}
                    })} 
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
                    {...register("dateOfBirth",{
                        valueAsDate: false,
                        validate: function(value){ // feh al value aly user hayda5lha feh al input dah
                          const userDate = new Date(value).getFullYear(); // value aly hayda5lha al user deh asasn string fah 7awltha object 34an a3rf 2ageb al year bs
                          const nowDate = new Date().getFullYear();
                          if((nowDate - userDate) >10){
                               return true
                          }
                          else{
                             return "invalid date"
                          }
                          //return (nowDate - userDate) > 10 ? true : false
                          // return (nowDate - userDate) > 10 
                          //return (nowDate - userDate) > 10 ? true : "invalid date"
                        }
                    })}
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
                    {...register("password",{ //dah object al validation
                     required: {value:true, message: "Password is required"},
                     pattern: {value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, message: "The password must be at least 8 characters, At least one uppercase , At least one lowercase, At least one digit, At least one special character.  "}
                    })} 
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
                    {...register("rePassword",{ //dah object al validation
                     validate: function(rePasswordValue){
                        if(rePasswordValue === getValues("password")){ // mmkn 2as3ml watch 3ady 
                            return true;
                        }
                        else{
                            return "rePassword and password do not match"
                        }
                     },
                    })} 
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
                type="submit" 
                className="text-white bg-[#2a4ca1] block w-full rounded-xl hover:bg-[#19316e] box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                    Submit
            </button>
        </form>
    </main>
    </>
  )
}
