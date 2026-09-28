// File s7 34an esta5dmna React Hook Form  wa validation b maktba tanya aly heya Zod ///

export default function RegisterForm() {
  return (
    <>
    <main className="mt-20">
       <h1 className="text-6xl text-center font-bold">Register Now</h1>
       <form className="max-w-md mx-auto mt-10">
            <div className="relative z-0 w-full mb-5 group">
                <input type="text"
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
            <div className="relative z-0 w-full mb-5 group">
                <input type="email"
                    name="email" 
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
                    name="dateOfBirth" 
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
                    name="password" 
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
                    name="rePassword" 
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
                    type="radio"
                    value="male" 
                    name="gender"
                    className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"/>
                <label 
                    htmlFor="male" 
                    className="select-none ms-2 text-sm font-medium text-heading">
                        Male
                </label>
            </div>
            <div className="items-center mb-4 inline-block">
                <input id="female" 
                    type="radio"
                    name="gender"
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
