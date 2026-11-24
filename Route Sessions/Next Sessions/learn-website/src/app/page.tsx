import myImage from "../assets/images/Screenshot 2026-10-22 115431.png"
import myRealImage from "../../public/Screenshot 2026-10-22 115431.png"
import Image from "next/image"

export default function page() {
  return (
    <>
    {/* <img src={myImage} alt=""/>  dah m4 hay4t8l bssb img src bya5d string wa myImage feh object wa optimization aly next bt3mlooo */}
    <Image src={myRealImage} alt="Image-component"/>
    </>
  )
}