import Link  from 'next/link';
 
 
export interface ProductType{  // lazm al interface al properties beta3to teb2a nafs al properties aly gaya mn object aly gay mn al API
  title:string,
  description:string,
  price:number,
  imageCover: string,
  id:string,
  sold:number,
  }


// export const revalidate = 60*5; // deh te8ny 3n revalidate aly feh al request wa ma3naha an ay data hategy feh component dah ye7slha revalidate ba3d 5 mins, ay data 3ama feh component (lw 3amla aktr mn function bt3ml request) m4 feh request mo3yn zy ma 3amla ta7t
                                   // wa m4 bs ay data gaya mn ay request deh bt3ml chache l page kolha 3ama swa2 feha api calling or not


export default async function page() {

  async function getAllProducts(): Promise<ProductType[] | null>{
    try{
     const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`
    //   {
    //     // cache:"force-cache",
    //     // next:{revalidate:60*5} // 5 min
    //   }
     );
     if(!res.ok){
      return null;
     }
     const data = await res.json();
     return data.data
     console.log("data")
    }
    catch(err){
     console.log(err);
     return null
    }
  }
  
  const allProducts= await getAllProducts();

  return (
    <>
      <div className="flex flex-wrap w-[75%] mx-auto">
        {allProducts?.map((product) => (
          <div key={product.id} className="w-1/4 p-2">
            <Link href={`/productdetails/${product.id}`}>
              <img src={product.imageCover} alt={product.description} className="w-full" />
              <h2>{product.title}</h2>
              <p className="text-red-600">{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
)
}
