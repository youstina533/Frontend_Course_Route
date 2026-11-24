"use client"

export default function loading() {
  return (
    <>
      <div className="h-screen bg-red-800 flex justify-center items-center text-4xl font-bold text-white">
        <span>Error ...</span>
        <p>Something wrong in your request !</p>
      </div>
    </>
  )
}