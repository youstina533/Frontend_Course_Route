import * as zod from "zod"


export const registerSchema = zod.object({
    name: zod.string().nonempty("Name is required").min(3,"Min Length should be 3 char.").max(10,"Max Length should be 10 char."),
    email: zod.email().nonempty("Email is required"). regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email is invalid"),
    dateOfBirth: zod.string().nonempty("Date is required").refine(
        (dateOfBirth) =>{
            const userDate = new Date(dateOfBirth).getFullYear(); // value aly hayda5lha al user deh asasn string fah 7awltha object 34an a3rf 2ageb al year bs
            const nowDate = new Date().getFullYear();
            if((nowDate - userDate) >10){
                return true
            }
            else{
                return false
            }
        }, "Date's year should be less than 2015 "),
    gender: zod.enum(["male", "female"]),
    password: zod.string().nonempty("Password is required").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "invalid password"),
    rePassword: zod.string().nonempty("rePaswword is required")
    
}).refine(
    (object)=>{
     if(object.password === object.rePassword){
         return true
     }
     else{
       return false
     }

},{
    path: ["rePassword"], //hayro7 l formState beta3t rePassword
    error: "Password and rePassword do not match"
});



export type RegisterSchemaType = zod.infer<typeof registerSchema>