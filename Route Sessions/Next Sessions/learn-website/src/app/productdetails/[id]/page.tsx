import { type ProductType } from "@/app/products/page";


export default async function page(props:{params: Promise<{id:string}>}) {

  //params is promise
  const params = await props.params;
  console.log(params.id);

  async function getSpecificProduct(): Promise <ProductType | null>{
   try{
    
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${params.id}`);
    const data = await res.json();
    console.log(data);
    return data.data;
   }
   catch(err){
    console.log(err);
    return null
   }
   
  }

  const productDetails = await getSpecificProduct();

  return (
    <>
      <div className="w-3/4 flex gap-3 mx-auto my-5 p-5">
        <div className="w-1/4">
          <img src={productDetails?.imageCover} alt={productDetails?.title} className="w-full"/>
        </div>
        <div className="w-3/4">
          <h1 className="font-bold text-4xl mb-10">{productDetails?.title}</h1>
          <p className="text-xl">{productDetails?.description}</p>
          <span className="text-red-800 text-4xl mt-15 inline-block">{productDetails?.price}</span>
        </div>
      </div>
    </>
  )
}
