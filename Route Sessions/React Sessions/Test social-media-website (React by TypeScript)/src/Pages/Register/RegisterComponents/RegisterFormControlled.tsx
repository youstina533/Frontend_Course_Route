// file dah 8lt 34an feh Controlled b tare2a deh ana ba3ml function wa state l kl input plus onChange deh keda hat4t8l kl ma ye7sl ta8yeer so8ayr wa dah k performance we74 /////////
// ana hena m4 basta3ml aw m4 bt3aml m3 al dom 5als ////

import { useState, type ChangeEvent  } from "react"

export default function RegisterFormControlled() {
    const [name,setName] = useState("");

    function handleName(e : ChangeEvent<HTMLInputElement>){
     setName(e.target.value)
    }
  return (
      <main className="mt-20">
       <h1 className="text-6xl text-center font-bold">Register Now</h1>
       <form className="max-w-md mx-auto mt-10">
            <div className="relative z-0 w-full mb-5 group">
                <input type="text"
                    value={name} // keda b2a controlled input 34an react heya aly mas2ola 3ano, heya aly 4ayfa al value beta3to wa 7ataha feh al state
                    onChange={(e)=> handleName(e)} //3amlto 34an 2a2dr any aktb feh input 34an value={named} man3tny aktb since an react at7akmt feh al input
                    //keda ana m3 kl ta8yer by7sl al function deh bt8yr feh name variable wa tetsgl feh setState
                    // wa lw mafe4 onChange wa function deh sa3tha reaact m4 hatsm7ly aktb feh input 34an howa at7fz b "" awl ma fat7t al page 5alas
                    name="name" 
                    id="name" 
                    className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" 
                    placeholder="" 
                 />
                <label htmlFor="name"
                    className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:insert-s-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                    Full Name
                 </label>
            </div>
            <button 
                type="submit" 
                className="text-white bg-[#2a4ca1] block w-full rounded-xl hover:bg-[#19316e] box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                    Submit
            </button>
        </form>
    </main>
  )
}
